/** @type {import('next').NextConfig} */
const nextConfig = {
    routes: [
        {
          page: '/notFound',
          statusCode: 404,
        },
      ],
};

export default nextConfig;
