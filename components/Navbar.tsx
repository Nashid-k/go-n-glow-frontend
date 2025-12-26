'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function Navbar() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    if (pathname !== '/') {
        return null;
    }

    return (
        <>
            {/* Top Section - Scrolls away with page */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo (G and N Glow Icon) */}
                        <Link href="/" className="text-2xl font-bold text-yellow-500">
                            Go N Glow
                        </Link>

                        {/* Auth Buttons and Language Selector */}
                        <div className="hidden md:flex items-center gap-6">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-700">Hi, {user.name}</span>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href="/signin"
                                        className="px-4 py-2 text-gray-700 hover:text-yellow-500 transition"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                            {/* Language Selector - EN/AR */}
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <button className="hover:text-yellow-500 transition">EN</button>
                                <span>|</span>
                                <button className="hover:text-yellow-500 transition">AR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Navigation Menu - Stays on scroll */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center h-12">
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/contact-us"
                                className="font-medium text-gray-700 hover:text-yellow-500 transition"
                            >
                                Contact Us
                            </Link>
                            {/* Add more navigation items here as needed */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
