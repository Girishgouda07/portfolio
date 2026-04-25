import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Yeshwanth R - Full Stack Developer Portfolio',
        short_name: 'Yeshwanth R',
        description: 'Portfolio of Yeshwanth R, a passionate Full Stack Developer with 2+ years of experience.',
        start_url: '/',
        display: 'standalone',
        background_color: '#060606',
        theme_color: '#5237f9',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
