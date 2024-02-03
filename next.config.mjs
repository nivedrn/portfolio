/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: "/editor",
				destination: "/editor/profile",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
