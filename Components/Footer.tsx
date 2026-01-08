export const Footer = () => {
    return (
        <footer className='bg-black w-full p-0 m-0 border-t border-gray-800'>
            <div className='flex flex-col items-center justify-center py-12 px-6 space-y-8'>
                {/* Section Contact */}
                <div className='flex flex-col items-center justify-center gap-4 text-gray-300'>
                    <a
                        href='tel:+33613920942'
                        className='flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm md:text-base'>
                        <svg
                            className='w-5 h-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                            />
                        </svg>
                        <span>06 13 92 09 42</span>
                    </a>
                    <span className='hidden md:inline text-gray-600'>•</span>
                    <a
                        href='mailto:guillaume.edh-2@gmail.com'
                        className='flex items-center gap-2 hover:text-white transition-colors duration-200 text-sm md:text-base'>
                        <svg
                            className='w-5 h-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                        </svg>
                        <span>guillaume.edh-2@gmail.com</span>
                    </a>
                </div>

                {/* Séparateur */}
                <div className='w-24 h-px bg-gray-700'></div>

                {/* Réseaux sociaux */}
                <ul className='flex flex-row items-center justify-center gap-8'>
                    <li>
                        <a
                            href='https://www.instagram.com/guil.vallon/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-110 group'
                            aria-label='Instagram'>
                            <svg
                                className='w-6 h-6 text-gray-300 group-hover:text-white transition-colors'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.youtube.com/@ProVision-GV'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 hover:bg-red-600 transition-all duration-300 transform hover:scale-110 group'
                            aria-label='YouTube'>
                            <svg
                                className='w-6 h-6 text-gray-300 group-hover:text-white transition-colors'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                            </svg>
                        </a>
                    </li>
                </ul>

                {/* Copyright */}
                <div className='pt-4 border-t border-gray-800 w-full'>
                    <p className='text-center text-gray-500 text-sm'>
                        © 2026 VALLON Guillaume - Vidéographer
                    </p>
                </div>
            </div>
        </footer>
    );
};
