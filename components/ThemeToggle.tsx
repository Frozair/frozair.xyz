import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Switch } from './ui/switch';

interface ThemeToggleProps {
	className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className={`flex items-center gap-2 ${className || ''}`}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500 dark:text-gray-400" />
			<Switch
				checked={theme === 'dark'}
				onCheckedChange={toggleTheme}
				aria-label="Toggle theme"
			/>
			<Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-400 dark:text-blue-light" />
		</div>
	);
};

export default ThemeToggle;
