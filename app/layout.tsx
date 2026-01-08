import type { Metadata } from 'next';
import { Geist, Geist_Mono, DM_Serif_Text } from 'next/font/google';
import './globals.css';
import { Footer } from '@/Components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['monospace'],
});

const dmSerifText = DM_Serif_Text({
    variable: '--font-dm-serif-text',
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Georgia', 'serif'],
});

export const metadata: Metadata = {
    title: 'VALLON Guillaume - Vidéographer',
    description: 'Découvrez mes réalisations de vidéos de mariage',
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        url: 'https://drive.google.com/file/d/1hWsAliOAumrvnWTCaSnbQy-B9fv1SlP-/view?usp=drive_link<',
        title: 'VALLON Guillaume - Vidéographer',
        description: 'Découvrez mes réalisations de vidéos de mariage',
        images: [
            {
                url: 'https://wedding.provision-gv.fr/Logo.png',
                width: 1200,
                height: 630,
                alt: 'VALLON Guillaume - Vidéographer',
            },
        ],
        type: 'website',
        locale: 'fr_FR',
        siteName: 'VALLON Guillaume - Vidéographer',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VALLON Guillaume - Vidéographer',
        description: 'Découvrez mes réalisations de vidéos de mariage',
        images: ['https://wedding.provision-gv.fr/Logo.png'],
    },
    metadataBase: new URL('https://wedding.provision-gv.fr'),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='fr'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased`}>
                <div>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
