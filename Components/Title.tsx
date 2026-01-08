'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const DrawCircleText = () => {
    return (
        <div className='grid place-content-center px-4 py-24 text-yellow-50'>
            <h1 className='max-w-2xl text-center text-5xl leading-snug font-(family-name:--font-dm-serif-text)'>
                VALLON Guillaume{' '}
                <span className='relative inline-block pb-3'>
                    <span className='relative z-10'>Vidéographer</span>

                    <svg
                        viewBox='0 0 286 73'
                        fill='none'
                        aria-hidden='true'
                        className='absolute left-0 right-0 bottom-0 z-0 h-[1.35em] w-[calc(100%+1rem)] -translate-x-2'>
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            d='M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1'
                            stroke='#FACC15'
                            strokeWidth='3'
                            vectorEffect='non-scaling-stroke'
                            strokeLinecap='round'
                        />
                    </svg>
                </span>{' '}
            </h1>
        </div>
    );
};
