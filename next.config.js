// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['example.com', 'anotherdomain.com', 'www.freepnglogos.com','www.freeiconspng.com'], 
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com', 'anotherdomain.com', 'www.freepnglogos.com','www.freeiconspng.com'], 
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

}

module.exports = nextConfig
