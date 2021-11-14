const path = require('path');

/** @type {import('./node_modules/next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
