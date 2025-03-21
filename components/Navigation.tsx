'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const isActive = (target: string) => pathname === target;

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'py-3 bg-white/80 dark:bg-gray-900/80 dark:border-b dark:border-card-border backdrop-blur-lg shadow-sm' : 'py-5 bg-transparent'
			}`}
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex justify-between items-center">
					<Link href="/" className="text-2xl font-bold blue-gradient-text">
						Frozair
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-1 items-center">
						<Link
							href="/"
							className={cn(
								'nav-link',
								{
									'nav-link-active': isActive('/')
								}
							)}
						>
							Home
						</Link>
						<Link
							href="/apps"
							className={cn(
								'nav-link',
								{
									'nav-link-active': isActive('/apps')
								}
							)}
						>
							Apps
						</Link>
						<Link
							href="/about"
							className={cn(
								'nav-link',
								{
									'nav-link-active': isActive('/about')
								}
							)}
						>
							About
						</Link>
						<div className="ml-4">
							<ThemeToggle />
						</div>
					</nav>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center gap-4">
						<ThemeToggle />
						<button
							className="text-gray-700 dark:text-gray-300 hover:text-blue dark:hover:text-blue-light"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
					<nav className="flex flex-col p-4">
						<Link
							href="/"
							className={cn(
								'px-3 py-4 text-lg',
								{
									'text-blue dark:text-blue-light font-medium': isActive('/'),
									'text-gray-700 dark:text-gray-300': !isActive('/')
								}
							)}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/apps"
							className={cn(
								'px-3 py-4 text-lg',
								{
									'text-blue dark:text-blue-light font-medium': isActive('/apps'),
									'text-gray-700 dark:text-gray-300': !isActive('/apps')
								}
							)}
							onClick={() => setIsMenuOpen(false)}
						>
							Apps
						</Link>
						<Link
							href="/about"
							className={cn(
								'px-3 py-4 text-lg',
								{
									'text-blue dark:text-blue-light font-medium': isActive('/about'),
									'text-gray-700 dark:text-gray-300': !isActive('/about')
								}
							)}
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
}
