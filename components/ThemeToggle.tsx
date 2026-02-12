'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
	className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<button
			onClick={toggleTheme}
			className={`relative p-2 rounded-lg transition-all hover:scale-110 ${className || ''}`}
			style={{ 
				background: 'var(--surface-elevated)',
				border: '2px solid var(--border-emphasis)',
				width: '44px',
				height: '44px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
			aria-label="Toggle theme"
		>
			<Sun 
				className="h-5 w-5 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
				style={{ color: 'var(--accent-primary)' }}
			/>
			<Moon 
				className="h-5 w-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
				style={{ color: 'var(--accent-secondary)' }}
			/>
		</button>
	);
};

export default dynamic(() => Promise.resolve(ThemeToggle), {ssr: false});
