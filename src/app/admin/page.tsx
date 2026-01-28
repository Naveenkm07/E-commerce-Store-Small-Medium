import { Package, ShoppingCart, DollarSign, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function AdminPage() {
    // Mock data for demo
    const stats = [
        { name: 'Total Revenue', value: '$24,567', change: '+12.3%', icon: DollarSign, color: 'primary' },
        { name: 'Total Orders', value: '347', change: '+8.2%', icon: ShoppingCart, color: 'secondary' },
        { name: 'Active Products', value: '20', change: '+2', icon: Package, color: 'accent' },
        { name: 'Total Customers', value: '1,234', change: '+15.1%', icon: Users, color: 'primary' },
    ];

    const recentOrders = [
        { id: '1001', customer: 'John Doe', total: 299.99, status: 'Completed', date: '2026-01-28' },
        { id: '1002', customer: 'Jane Smith', total: 549.99, status: 'Processing', date: '2026-01-28' },
        { id: '1003', customer: 'Bob Johnson', total: 89.99, status: 'Shipped', date: '2026-01-27' },
        { id: '1004', customer: 'Alice Williams', total: 159.99, status: 'Pending', date: '2026-01-27' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Welcome to your store management center</p>

                    {/* Demo Notice */}
                    <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-yellow-900 mb-1">Demo Dashboard</h3>
                                <p className="text-sm text-yellow-800">
                                    This is a placeholder admin dashboard. In a production application, this would connect to a backend API to manage products, orders, customers, and analytics. Consider integrating with services like Shopify, Snipcart, or building a custom backend with Next.js API routes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.name} className="bg-white rounded-xl shadow-md p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                                    </div>
                                    <Badge variant="success" className="text-xs">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        {stat.change}
                                    </Badge>
                                </div>
                                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.name}</h3>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                                <Button size="sm" variant="outline">View All</Button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Order ID</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Customer</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Total</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Status</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                <td className="py-3 px-4 text-sm font-medium text-gray-900">#{order.id}</td>
                                                <td className="py-3 px-4 text-sm text-gray-600">{order.customer}</td>
                                                <td className="py-3 px-4 text-sm font-medium text-gray-900">${order.total}</td>
                                                <td className="py-3 px-4">
                                                    <Badge
                                                        variant={
                                                            order.status === 'Completed'
                                                                ? 'success'
                                                                : order.status === 'Processing'
                                                                    ? 'info'
                                                                    : order.status === 'Shipped'
                                                                        ? 'default'
                                                                        : 'warning'
                                                        }
                                                        className="text-xs"
                                                    >
                                                        {order.status}
                                                    </Badge>
                                                </td>
                                                <td className="py-3 px-4 text-sm text-gray-600">{order.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>

                            <div className="space-y-3">
                                <Link href="/shop">
                                    <Button variant="outline" className="w-full justify-start" size="md">
                                        <Package className="w-5 h-5" />
                                        View Products
                                    </Button>
                                </Link>

                                <Button variant="outline" className="w-full justify-start" size="md" disabled>
                                    <ShoppingCart className="w-5 h-5" />
                                    Manage Orders
                                </Button>

                                <Button variant="outline" className="w-full justify-start" size="md" disabled>
                                    <Users className="w-5 h-5" />
                                    Customer List
                                </Button>

                                <Button variant="outline" className="w-full justify-start" size="md" disabled>
                                    <DollarSign className="w-5 h-5" />
                                    Sales Reports
                                </Button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900 mb-3">Integration Options</h3>
                                <p className="text-xs text-gray-600 mb-4">
                                    Connect your admin panel to a backend service:
                                </p>
                                <ul className="text-xs text-gray-600 space-y-2">
                                    <li>• Shopify Headless API</li>
                                    <li>• Snipcart eCommerce</li>
                                    <li>• Custom Next.js API Routes</li>
                                    <li>• Firebase or Supabase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
