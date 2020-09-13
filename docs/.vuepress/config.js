const sidebar = require('./sidebar.js');

const config = {
	title: 'BladeBotList Docs',
	description: 'A guide made by the community of discord.js for its users.',
	head: [
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#42b983' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { name: 'og:title', content: 'Bladebotlist docs' }],
		['meta', { name: 'og:description', content: 'The official docs of bladebotlist.xyz.' }],
		['meta', { name: 'og:type', content: 'website' }],
		['meta', { name: 'og:url', content: 'https://docs.bladebtlist.xyz' }],
		['meta', { name: 'og:locale', content: 'en_US' }],
		['meta', { name: 'og:image', content: '/meta-image.png' }],
	],
	plugins: [],
	theme: 'yuu',
	themeConfig: {
		yuu: {
			extraOptions: { before: 'BranchSelector' },
		},
		repo: 'bladebotlist/docs',
		docsDir: 'docs',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: 'Home',
				link: '/',
			},
			{
				text: 'Website',
				link: 'https://bladebotlist.xyz',
			},
		],
		sidebar,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': '../',
			},
		},
	},
	globalUIComponents: ['EOLNotice'],
};

for (const group of Object.values(config.themeConfig.sidebar)) {
	for (const section of group) {
		if (section.collapsable) continue;
		section.collapsable = false;
	}
}

if (process.env.NODE_ENV === 'production') {
	config.themeConfig.algolia = {
		apiKey: 'c8d9361fb8403f7c5111887e0edf4b5e',
		indexName: 'discordjs',
	};

	config.plugins.push(['@vuepress/google-analytics', { ga: 'UA-108513187-1' }]);
}

module.exports = config;
