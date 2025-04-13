/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Warning: This allows production builds to successfully complete even if
        // your project has TypeScript errors.
        ignoreBuildErrors: true,
    },
    // Transpile @react-three packages
    transpilePackages: [
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        'react-merge-refs'
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
            },
        });
        
        return config;
    },
}

module.exports = nextConfig
