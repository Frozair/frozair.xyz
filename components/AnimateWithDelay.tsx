import React from "react";
import { cn } from "@/lib/utils";

interface Props {
	animationClass: string;
	animationDelay: string;
	animationFillMode: string;
	children: React.ReactNode;

}

export const AnimateWithDelay: React.FC<Props> = ({ animationClass, animationDelay, animationFillMode, children }) => {
	return (
		<div className={cn("opacity-0", animationClass)} style={{ animationDelay, animationFillMode }}>
			{children}
		</div>
	);
}
