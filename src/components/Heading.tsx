import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading({ size = 'md', children, asChild, className = 'text-gray-100' }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
            className={clsx(
                'font-bold font-sans', 
                {
                    'text-lg': size === 'sm', // Apply class lg if the size is small
                    'text-xl': size === 'md', //Apply class xl if the size is medium                    
                    'text-2xl': size === 'lg' // Apply class 2xl if the size is large
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}