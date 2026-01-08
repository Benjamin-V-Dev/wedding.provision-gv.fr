'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
    videoSrc: string;
    previewImage?: string;
    title?: string;
}

export const VideoPlayer = ({
    videoSrc,
    previewImage,
    title,
}: VideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current?.play();
    };

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    useEffect(() => {
        if (previewImage && imgRef.current) {
            // Vérifier si l'image est déjà chargée (en cache)
            if (imgRef.current.complete) {
                // Utiliser setTimeout pour éviter le rendu en cascade
                setTimeout(() => setIsImageLoading(false), 0);
            }
        } else if (!previewImage) {
            setTimeout(() => setIsImageLoading(false), 0);
        }
    }, [previewImage]);

    return (
        <div className='relative w-full aspect-video overflow-hidden'>
            {!isPlaying && (
                <div
                    className='absolute inset-0 cursor-pointer flex items-center justify-center bg-black/30'
                    onClick={handlePlay}>
                    {previewImage ? (
                        <>
                            {isImageLoading && (
                                <div className='absolute inset-0 flex items-center justify-center bg-gray-900'>
                                    <div className='w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin'></div>
                                </div>
                            )}
                            <img
                                ref={imgRef}
                                src={previewImage}
                                alt={title || 'Video preview'}
                                className={`w-full h-full object-cover transition-opacity duration-300 ${
                                    isImageLoading ? 'opacity-0' : 'opacity-100'
                                }`}
                                onLoad={handleImageLoad}
                                onError={handleImageLoad}
                            />
                        </>
                    ) : (
                        <div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-900' />
                    )}
                    <div className='absolute inset-0 bg-black/20'></div>
                    {!isImageLoading && (
                        <button
                            className='absolute z-10 w-20 h-20 rounded-full bg-white/70 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-lg hover:scale-105 hover:cursor-pointer'
                            aria-label='Play video'>
                            <svg
                                className='w-8 h-8 text-gray-900 ml-1'
                                fill='currentColor'
                                viewBox='0 0 24 24'>
                                <path d='M8 5v14l11-7z' />
                            </svg>
                        </button>
                    )}
                </div>
            )}
            <video
                ref={videoRef}
                src={videoSrc}
                className='w-full h-full object-cover'
                controls
                preload='metadata'
            />
        </div>
    );
};
