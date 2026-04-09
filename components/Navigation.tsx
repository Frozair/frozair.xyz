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
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled 
					? 'py-3 backdrop-blur-lg shadow-lg' 
					: 'py-5'
			}`}
			style={{
				background: isScrolled ? 'rgba(15, 15, 35, 0.9)' : 'transparent',
				borderBottom: isScrolled ? '2px solid var(--border-subtle)' : 'none'
			}}
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex justify-between items-center">
					<Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform group">
						<div className="relative">
							<div 
								className="text-2xl font-black tracking-tighter relative z-10"
								style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
							>
								<span style={{ color: 'var(--accent-primary)' }}>FRO</span>
								<span style={{ color: 'var(--accent-secondary)' }}>Z</span>
								<span style={{ color: 'var(--accent-primary)' }}>AIR</span>
							</div>
							{/* Geometric accent */}
							<div 
								className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-300 group-hover:h-2"
								style={{ width: '100%' }}
							></div>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-2 items-center">
						<Link
							href="/"
							className={cn('nav-link', { 'nav-link-active': isActive('/') })}
						>
							Home
						</Link>
						<Link
							href="/apps"
							className={cn('nav-link', { 'nav-link-active': isActive('/apps') })}
						>
							Projects
						</Link>
						<Link
							href="/about"
							className={cn('nav-link', { 'nav-link-active': isActive('/about') })}
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
							className="p-2 rounded-lg transition-all hover:scale-110"
							style={{ background: 'var(--surface)' }}
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
				<div 
					className="md:hidden absolute top-full left-0 w-full shadow-2xl animate-fade-in-up border-t-2"
					style={{
						background: 'var(--background-secondary)',
						borderColor: 'var(--border-emphasis)'
					}}
				>
					<nav className="flex flex-col p-4">
						<Link
							href="/"
							className={cn(
								'px-4 py-4 text-lg font-semibold rounded-lg transition-all',
								{
									'text-[var(--accent-primary)]': isActive('/'),
								}
							)}
							style={{
								background: isActive('/') ? 'var(--surface-elevated)' : 'transparent'
							}}
							onClick={() => setIsMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/apps"
							className={cn(
								'px-4 py-4 text-lg font-semibold rounded-lg transition-all',
								{
									'text-[var(--accent-primary)]': isActive('/apps'),
								}
							)}
							style={{
								background: isActive('/apps') ? 'var(--surface-elevated)' : 'transparent'
							}}
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</Link>
						<Link
							href="/about"
							className={cn(
								'px-4 py-4 text-lg font-semibold rounded-lg transition-all',
								{
									'text-[var(--accent-primary)]': isActive('/about'),
								}
							)}
							style={{
								background: isActive('/about') ? 'var(--surface-elevated)' : 'transparent'
							}}
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
