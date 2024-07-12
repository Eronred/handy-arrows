import { Github, Twitter, X } from 'lucide-react'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Logo from './logo'

export default function Header() {
    return (
        <>
            <header className="w-full border-b sticky top-0 bg-white/40 shadow-sm backdrop-blur-md z-50">
                <div className=" mx-auto px-4 py-4 flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center space-x-4">
                        <Link
                            target="_blank"
                            href="https://github.com/eronred/handy-arrows">
                            <img
                                src="/github.svg"
                                className="w-5 h-5 cursor-pointer"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://x.com/imeronn">
                            <img
                                src="/x.svg"
                                className="w-5 h-5 cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}
