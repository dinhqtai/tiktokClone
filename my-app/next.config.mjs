/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Thêm một tuyến đường để xử lý mô - đun nhị phân canvas.node
        config.module.rules.push({ test: /\.node$/, use: 'raw-loader' })
        if (!isServer) config.externals.push('canvas');
        // Loại trừ canvas khỏi bị Next.js xử lý trên trình duyệt
        return config;
    }
};

export default nextConfig;
