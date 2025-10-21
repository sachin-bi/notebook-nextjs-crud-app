import React from 'react'
import { Cloud, BookMarked, Search, Github, Linkedin ,X } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-24 pt-12 border-t border-gray-200 w-full max-w-4xl">
            <div className="text-center">
                <p className="text-gray-800 font-semibold">Created by Sachin</p>
                <p className="text-gray-500 text-sm mt-1">
                    Connect with me on social media.
                </p>
                <div className="flex justify-center gap-6 mt-4">
                    <a
                        href="https://github.com/sachin-bi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <Github size={28} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sachinandanp5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                        <Linkedin size={28} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://x.com/sachinandanp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                        <X size={28} />
                        <span className="sr-only">X</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
