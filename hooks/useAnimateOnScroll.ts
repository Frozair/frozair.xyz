import { useEffect } from "react";

export const useAnimateOnScroll = (targetClass: string) => {
	useEffect(() => {
		// Apply initial animations
		const elementsToAnimate = document.querySelectorAll(targetClass);

		elementsToAnimate.forEach(element => {
			element.classList.add('opacity-0');
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in');
						entry.target.classList.remove('opacity-0');
						// Once the animation is applied, we no longer need to observe this element
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const sections = document.querySelectorAll(targetClass);
		sections.forEach(section => {
			observer.observe(section);
		});

		// // Make sure initial elements are visible
		// const initialAnimations = document.querySelectorAll('.animate-fade-in');
		// initialAnimations.forEach(element => {
		//   if (element.classList.contains('opacity-0')) {
		//     element.classList.remove('opacity-0');
		//   }
		// });

		return () => {
			sections.forEach(section => {
				observer.unobserve(section);
			});
		};
	}, []);
}
