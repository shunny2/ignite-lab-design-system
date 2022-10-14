import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
            className={clsx(
                'text-gray-100 font-sans', 
                {
                    'text-xs': size === 'sm', // Apply class xs if the size is small
                    'text-sm': size === 'md', //Apply class sm if the size is medium                    
                    'text-md': size === 'lg' // Apply class md if the size is large
                }
            )}
        >
            {children}
        </Comp>
    )
}