import React, { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	variant?: 'primary' | 'outline';
	children: React.ReactNode;
}

const SocialMediaButton: React.FC<Props> = ({ href, className, variant = 'primary', children, ...rest }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"flex items-center justify-center rounded-full w-10 h-10 transition-colors transition-transform duration-150 shadow-md transform hover:-translate-y-1",
				{
					"text-white bg-blue hover:bg-blue-dark dark:bg-blue-dark dark:hover:bg-blue": variant === 'primary',
					"bg-button-secondary hover:bg-button-secondary-hover text-blue border border-blue": variant === 'outline',
				},
				className
			)}
			{...rest}
		>
			{children}
		</a>
	);
}

export default SocialMediaButton;
