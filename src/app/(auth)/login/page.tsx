"use client"; // 1. Add this to make it a Client Component

import React, { useState } from 'react'; // 2. Import useState
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'; // 3. Import Eye icons
import Link from 'next/link';
import Footer from '@/components/Footer';


export default function LoginPage() {
    // 4. State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col grow items-center justify-center px-4 py-12 bg-gray-50">
            <div className="w-full max-w-md space-y-8">
                {/* --- Page Header --- */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Welcome Back!
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Sign in to continue to your NoteBook.
                    </p>
                </div>

                {/* --- Login Form --- */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <form className="space-y-6" action="#" method="POST">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    // 5. Toggle input type based on state
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    // Add more padding to the right for the icon
                                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                                {/* 6. Add the toggle button */}
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <Eye className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-right text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                {/* --- Bottom Link to Register --- */}
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member yet?{' '}
                    <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Start for free
                    </Link>
                </p>
            </div>
              <Footer/>
        </div>
    );
}

