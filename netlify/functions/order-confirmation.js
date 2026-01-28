// Netlify serverless function for sending order confirmation emails
// This function sends order confirmation emails using SendGrid or Resend
// Can be called via webhook from Stripe or directly after order placement

const sendOrderConfirmation = async (orderData) => {
    // Check if email service is configured
    const emailApiKey = process.env.EMAIL_API_KEY;
    const emailService = process.env.EMAIL_SERVICE || 'sendgrid'; // 'sendgrid' or 'resend'

    if (!emailApiKey) {
        console.warn('Email service not configured - skipping email send');
        return {
            success: false,
            message: 'Email service not configured. Add EMAIL_API_KEY to environment variables.',
        };
    }

    // Generate order confirmation email HTML
    const emailHTML = generateOrderEmailHTML(orderData);
    const emailText = generateOrderEmailText(orderData);

    // TODO: Implement actual email sending based on service
    // Example for SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(emailApiKey);
    
    await sgMail.send({
      to: orderData.customerEmail,
      from: 'orders@shophub.com', // verified sender
      subject: `Order Confirmation #${orderData.orderId}`,
      text: emailText,
      html: emailHTML,
    });
    */

    // Example for Resend:
    /*
    const Resend = require('resend');
    const resend = new Resend(emailApiKey);
    
    await resend.emails.send({
      from: 'orders@shophub.com',
      to: orderData.customerEmail,
      subject: `Order Confirmation #${orderData.orderId}`,
      html: emailHTML,
    });
    */

    return {
        success: true,
        message: 'Email placeholder - integrate SendGrid or Resend',
        preview: emailHTML, // For development preview
    };
};

function generateOrderEmailHTML(orderData) {
    const { orderId, customerEmail, items, subtotal, shipping, tax, total } = orderData;

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; }
        .order-info { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .item { border-bottom: 1px solid #e5e7eb; padding: 15px 0; }
        .item:last-child { border-bottom: none; }
        .total { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .total-row { display: flex; justify-content: space-between; padding: 8px 0; }
        .total-row.grand { font-size: 1.2em; font-weight: bold; border-top: 2px solid #0ea5e9; padding-top: 15px; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.875em; }
        .button { display: inline-block; background: #0ea5e9; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">Thank You for Your Order!</h1>
          <p style="margin: 10px 0 0;">Order #${orderId}</p>
        </div>
        
        <div class="content">
          <div class="order-info">
            <h2 style="margin-top: 0;">Order Details</h2>
            <p><strong>Order ID:</strong> #${orderId}</p>
            <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="order-info">
            <h2 style="margin-top: 0;">Items Ordered</h2>
            ${items.map(item => `
              <div class="item">
                <div style="display: flex; justify-content: space-between;">
                  <div>
                    <strong>${item.name}</strong>
                    ${item.variants ? `<br><small style="color: #6b7280;">${item.variants}</small>` : ''}
                  </div>
                  <div style="text-align: right;">
                    <div>$${item.price.toFixed(2)} × ${item.quantity}</div>
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="total">
            <div class="total-row">
              <span>Subtotal:</span>
              <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Shipping:</span>
              <span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span>
            </div>
            <div class="total-row">
              <span>Tax:</span>
              <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="total-row grand">
              <span>Total:</span>
              <span>$${total.toFixed(2)}</span>
            </div>
          </div>

          <center>
            <a href="${process.env.BUSINESS_URL || 'http://localhost:3000'}" class="button">
              Continue Shopping
            </a>
          </center>
        </div>

        <div class="footer">
          <p>Thank you for shopping with ShopHub!</p>
          <p>If you have any questions, contact us at support@shophub.com</p>
          <p>&copy; ${new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateOrderEmailText(orderData) {
    const { orderId, customerEmail, items, subtotal, shipping, tax, total } = orderData;

    return `
Thank You for Your Order!
Order #${orderId}

Order Details:
Order ID: #${orderId}
Email: ${customerEmail}
Order Date: ${new Date().toLocaleDateString()}

Items Ordered:
${items.map(item => `
${item.name}${item.variants ? ` (${item.variants})` : ''}
$${item.price.toFixed(2)} × ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}
`).join('\n')}

Order Summary:
Subtotal: $${subtotal.toFixed(2)}
Shipping: ${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}

Thank you for shopping with ShopHub!
If you have any questions, contact us at support@shophub.com

© ${new Date().getFullYear()} ShopHub. All rights reserved.
  `.trim();
}

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        const orderData = JSON.parse(event.body);

        // Validate required fields
        if (!orderData.orderId || !orderData.customerEmail || !orderData.items) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Missing required order data' }),
            };
        }

        const result = await sendOrderConfirmation(orderData);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error('Error sending order confirmation:', error);

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to send order confirmation',
                message: error.message,
            }),
        };
    }
};
