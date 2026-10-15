import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Deploys to Vercel. adapter-vercel@3 (SvelteKit 1) only auto-detects Node 16-20, so pin the runtime explicitly.
		adapter: adapter({ runtime: 'nodejs22.x' })
	}
};

export default config;
