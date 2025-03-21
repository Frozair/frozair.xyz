import React from "react";

interface Props {
    year: string;
    title: string;
    direction: 'left' | 'right';
    children: React.ReactNode;
}

export const TimelineCard: React.FC<Props> = ({ year, title, direction, children }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-background sm:bg-transparent z-10 py-4">
            { direction === 'left' ? (
                <div className="w-full text-center sm:w-5/12 sm:text-right sm:pr-8">
                    <span className="text-gray-500 dark:text-gray-400 block sm:hidden mb-2">{year}</span>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {children}
                    </p>
                </div>
            ) : (
                <div className="w-5/12 hidden sm:block"></div>
            )}
            <span className="w-10 h-10 items-center justify-center bg-background text-gray-500 dark:text-gray-400 hidden sm:flex">
                  {year}
			</span>
            { direction === 'left' ? (
                <div className="w-5/12 hidden sm:block"></div>
            ) : (
                <div className="w-full text-center sm:w-5/12 sm:text-left sm:pr-8">
                    <span className="text-gray-500 dark:text-gray-400 block sm:hidden mb-2">{year}</span>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {children}
                    </p>
                </div>
            )}
        </div>
    );
}