/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: "/editor",
				destination: "/editor/raw",
				permanent: true,
			},
		];
	},
	images: {
		domains: ['raw.githubusercontent.com'],
	},
};

export default nextConfig;
