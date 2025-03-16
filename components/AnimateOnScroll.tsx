'use client';

import React from "react";

interface Props {
	animationClass: string;
	children: React.ReactNode;
}

export const AnimateOnScroll: React.FC<Props> = ({ animationClass, children }) => {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting || (ref.current && isElementVisible(ref.current))) {
				if (ref.current) {
					ref.current.classList.add(animationClass)
					ref.current.classList.remove('opacity-0')
					observer.unobserve(ref.current);
				}
			}
		}, { threshold: 0.1, root: null });

		if (ref.current) {
			observer.observe(ref.current);
		}

		const isElementVisible = (element: HTMLDivElement) => {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		}
	}, []);

	return (
		<div ref={ref} className="opacity-0">{children}</div>
	);
}
