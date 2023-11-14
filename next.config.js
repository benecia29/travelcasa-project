/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'fbcdn.net'
    ]
  },
    "compilerOptions": {
      "types": ["jquery", "datatables.net"]
    }
}

module.exports = nextConfig
