import React, { AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends NavLinkProps {
	href: string;
	variant?: 'primary' | 'outline';
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ href, className, variant = 'primary', children, ...rest }) => {
	return (
		<Link
			href={href}
			className={cn(
				"inline-flex gap-2 text-center items-center justify-center px-8 py-3 font-medium rounded-lg shadow-md transition-colors transition-transform duration-150 transform hover:-translate-y-1",
				{
					"bg-blue hover:bg-blue-dark text-white": variant === 'primary',
					"bg-button-secondary hover:bg-button-secondary-hover text-blue border border-blue": variant === 'outline',
				},
				className
			)}
			{...rest}
		>
			{children}
		</Link>
	);
}

export default Button;
