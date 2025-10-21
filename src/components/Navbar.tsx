import Link from 'next/link';
import { User } from 'lucide-react'; // Importing a user icon

/**
 * A clean, reusable Navbar component.
 * - Logo links to the homepage ('/').
 * - Sign In button links to the sign-in page ('/signin').
 */
export default function Navbar() {
    return (
        <header className="px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-semibold text-indigo-600 tracking-tight cursor-pointer">
                        NoteBook
                    </span>
                </Link>

                {/* Sign In Button */}
                <Link href="/login">
                    <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75">
                        <User size={18} /> {/* User icon */}
                        <span>Sign In</span>
                    </button>
                </Link>
            </nav>
        </header>
    );
}