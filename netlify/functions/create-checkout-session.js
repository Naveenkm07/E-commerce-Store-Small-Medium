// Netlify serverless function for creating Stripe checkout session
// This function creates a Stripe checkout session from cart items
// Documentation: https://stripe.com/docs/api/checkout/sessions/create

const stripe = process.env.STRIPE_SECRET_KEY
    ? require('stripe')(process.env.STRIPE_SECRET_KEY)
    : null;

exports.handler = async (event, context) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        // Parse request body
        const { items, customerEmail } = JSON.parse(event.body);

        // Validate request
        if (!items || !Array.isArray(items) || items.length === 0) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid items' }),
            };
        }

        // Check if Stripe is configured
        if (!stripe) {
            console.warn('Stripe not configured - returning mock response');

            // Return mock success response for development
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    sessionId: 'mock_session_' + Date.now(),
                    url: '/checkout/success',
                    message: 'Demo mode: Stripe keys not configured. Add STRIPE_SECRET_KEY to enable real payments.',
                }),
            };
        }

        // Map cart items to Stripe line items
        const lineItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: item.description || '',
                    images: item.images || [],
                },
                unit_amount: Math.round(item.price * 100), // Convert to cents
            },
            quantity: item.quantity,
        }));

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            customer_email: customerEmail,
            success_url: `${process.env.BUSINESS_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BUSINESS_URL || 'http://localhost:3000'}/checkout/cancel`,
            metadata: {
                customerEmail: customerEmail,
                orderDate: new Date().toISOString(),
            },
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                sessionId: session.id,
                url: session.url,
            }),
        };
    } catch (error) {
        console.error('Error creating checkout session:', error);

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to create checkout session',
                message: error.message,
            }),
        };
    }
};
