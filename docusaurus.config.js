const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const { npm2yarn2pnpm } = require('@sapphire/docusaurus-plugin-npm2yarn2pnpm');
const { ts2esm2cjs } = require('@sapphire/docusaurus-plugin-ts2esm2cjs');

const Description =
	'Sapphire is a next-gen Discord bot framework for developers of all skill levels to make the best JavaScript/TypeScript based bots possible.';
const BaseUrl = 'https://sapphirejs.dev';
const Email = 'contact@sapphirejs.dev';
const Title = 'Sapphire Framework';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Sapphire',
	url: BaseUrl,
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	onDuplicateRoutes: 'throw',
	favicon: 'img/favicon.ico',
	tagline: Description,
	organizationName: 'sapphiredev',
	projectName: 'framework',

	themes: [],

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/icons/android-chrome-192x192.png'
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.webmanifest'
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: '#23529B'
					}
				]
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'framework',
				entryPoints: ['./projects/framework/src/index.ts'],
				tsconfig: './projects/framework/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/api-framework',
				plugin: ['typedoc-plugin-mdn-links', 'typedoc-plugin-djs-links'],
				sidebar: {
					categoryLabel: '@sapphire/framework',
					position: 0,
					fullNames: true
				}
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Pieces',
				entryPoints: ['./projects/pieces/src/index.ts'],
				tsconfig: './projects/pieces/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/api-pieces',
				plugin: ['typedoc-plugin-mdn-links'],
				sidebar: {
					categoryLabel: '@sapphire/pieces',
					position: 1,
					fullNames: true
				}
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Utilities',
				entryPointStrategy: 'resolve',
				entryPoints: [
					'./projects/utilities/packages/async-queue/src/index.ts',
					'./projects/utilities/packages/bitfield/src/index.ts',
					'./projects/utilities/packages/cron/src/index.ts',
					'./projects/utilities/packages/decorators/src/index.ts',
					'./projects/utilities/packages/discord-utilities/src/index.ts',
					'./projects/utilities/packages/discord.js-utilities/src/index.ts',
					'./projects/utilities/packages/duration/src/index.ts',
					'./projects/utilities/packages/event-iterator/src/index.ts',
					'./projects/utilities/packages/fetch/src/index.ts',
					'./projects/utilities/packages/lexure/src/index.ts',
					'./projects/utilities/packages/node-utilities/src/index.ts',
					'./projects/utilities/packages/phisherman/src/index.ts',
					'./projects/utilities/packages/ratelimits/src/index.ts',
					'./projects/utilities/packages/result/src/index.ts',
					'./projects/utilities/packages/snowflake/src/index.ts',
					'./projects/utilities/packages/stopwatch/src/index.ts',
					'./projects/utilities/packages/time-utilities/src/index.ts',
					'./projects/utilities/packages/timer-manager/src/index.ts',
					'./projects/utilities/packages/timestamp/src/index.ts',
					'./projects/utilities/packages/utilities/src/index.ts'
				],
				tsconfig: './tsconfig.typedoc.json',
				readme: 'none',
				out: 'Documentation/api-utilities',
				plugin: ['typedoc-plugin-mdn-links', 'typedoc-plugin-djs-links'],
				sidebar: {
					categoryLabel: 'Sapphire Utilities',
					position: 2
				}
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Plugins',
				entryPointStrategy: 'resolve',
				entryPoints: [
					'./projects/plugins/packages/api/src/index.ts',
					'./projects/plugins/packages/editable-commands/src/index.ts',
					'./projects/plugins/packages/hmr/src/index.ts',
					'./projects/plugins/packages/i18next/src/index.ts',
					'./projects/plugins/packages/logger/src/index.ts',
					'./projects/plugins/packages/pattern-commands/src/index.ts',
					'./projects/plugins/packages/scheduled-tasks/src/index.ts',
					'./projects/plugins/packages/subcommands/src/index.ts',
					'./projects/plugins/packages/utilities-store/src/index.ts'
				],
				tsconfig: './tsconfig.typedoc.json',
				readme: 'none',
				out: 'Documentation/api-plugins',
				excludeExternals: true,
				externalPattern: ['node_modules/@types/**'],
				plugin: ['typedoc-plugin-mdn-links', 'typedoc-plugin-djs-links'],
				sidebar: {
					categoryLabel: 'Sapphire Plugins',
					position: 3
				}
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Type',
				entryPoints: ['./projects/type/src/index.ts'],
				tsconfig: './projects/type/src/tsconfig.json',
				readme: './projects/type/README.md',
				out: 'Documentation/api-type',
				plugin: ['typedoc-plugin-mdn-links'],
				sidebar: {
					categoryLabel: '@sapphire/type',
					position: 4,
					fullNames: true
				}
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Shapeshift',
				entryPoints: ['./projects/shapeshift/src/index.ts'],
				tsconfig: './projects/shapeshift/src/tsconfig.json',
				readme: './projects/shapeshift/README.md',
				out: 'Documentation/api-shapeshift',
				plugin: ['typedoc-plugin-mdn-links'],
				sidebar: {
					categoryLabel: '@sapphire/shapeshift',
					position: 5,
					fullNames: true
				}
			}
		]
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/sapphiredev/website/edit/main/',
					remarkPlugins: [npm2yarn2pnpm, ts2esm2cjs],
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				blog: false,
				theme: {
					customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/tippy-discord.css')]
				}
			})
		]
	],

	themeConfig:
		/** @type {Partial<import('@docusaurus/preset-classic').ThemeConfig>} */
		({
			image: 'https://www.sapphirejs.dev/icons/opengraph.png',
			colorMode: {
				defaultMode: 'dark',
				respectPrefersColorScheme: true
			},
			metadata: [
				{ name: 'apple-mobile-web-app-capable', content: 'yes' },
				{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
				{ name: 'apple-mobile-web-app-title', content: Title },
				{ name: 'application-name', content: Title },
				{ name: 'audience', content: 'all' },
				{ name: 'author', content: `Sapphire Community, ${Email}` },
				{ name: 'coverage', content: 'Worldwide' },
				{ name: 'description', content: Description },
				{ name: 'designer', content: `Sapphire Community, ${Email}` },
				{ name: 'distribution', content: 'Global' },
				{ name: 'googlebot', content: 'index,follow' },
				{ name: 'HandheldFriendly', content: 'True' },
				{ name: 'identifier-URL', content: BaseUrl },
				{ name: 'keywords', content: 'discord, bot, framework, documentation, guide, sapphire' },
				{ name: 'msapplication-config', content: '/browserconfig.xml' },
				{ name: 'msapplication-TileColor', content: '#23529B' },
				{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
				{ name: 'owner', content: `Sapphire Community, ${Email}` },
				{ name: 'rating', content: 'safe for kids' },
				{ name: 'reply-to', content: Email },
				{ name: 'revisit-after', content: '7 days' },
				{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
				{ name: 'shortlink', content: BaseUrl },
				{ name: 'subject', content: 'Documentation website for Sapphire Projects' },
				{ name: 'summary', content: Description },
				{ name: 'target', content: 'all' },
				{ name: 'theme-color', content: '#23529B' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:creator', content: '@WolfgalVlad' },
				{ name: 'twitter:site', content: '@WolfgalVlad' },
				{ name: 'url', content: BaseUrl },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ property: 'og:description', content: Description },
				{ property: 'og:email', content: Email },
				{ property: 'og:image:alt', content: 'OpenGraphImage' },
				{ property: 'og:image:height', content: '512' },
				{ property: 'og:image:width', content: '1024' },
				{ property: 'og:locale', content: 'en_US' },
				{ property: 'og:site_name', content: Title },
				{ property: 'og:title', content: Title },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: BaseUrl }
			],
			navbar: {
				title: 'Sapphire',
				logo: {
					alt: 'Sapphire Logo',
					src: 'img/gem.svg'
				},
				items: [
					{
						to: '/',
						label: 'Home',
						position: 'left',
						activeBaseRegex: '^/$'
					},
					{
						to: 'docs/General/Welcome',
						position: 'left',
						label: 'Documentation',
						activeBaseRegex: '^/docs/(General|Documentation)/.+$'
					},
					{
						to: 'docs/Guide/getting-started/getting-started-with-sapphire',
						position: 'left',
						label: 'Guide',
						activeBaseRegex: '^/docs/Guide/.+$'
					},
					{
						href: 'https://sapphirejs.dev/discord',
						label: 'Discord',
						position: 'right'
					},
					{
						href: 'https://github.com/sapphiredev',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				logo: {
					alt: 'Powered By Vercel',
					src: 'img/powered-by-vercel-and-polypane.svg'
				},
				links: [
					{
						title: 'Donate',
						items: [
							{
								label: 'Ko-fi',
								href: 'https://sapphirejs.dev/kofi'
							},
							{
								label: 'PayPal',
								href: 'https://sapphirejs.dev/paypal'
							},
							{
								label: 'Patreon',
								href: 'https://sapphirejs.dev/patreon'
							},
							{
								label: 'Open Collective',
								href: 'https://sapphirejs.dev/opencollective'
							}
						]
					},
					{
						title: 'Our Platforms',
						items: [
							{
								label: 'Discord Server',
								href: 'https://sapphirejs.dev/discord'
							},
							{
								label: 'NPM Organization',
								href: 'https://www.npmjs.com/org/sapphire'
							},
							{
								label: 'GitHub Organization',
								href: 'https://github.com/sapphiredev'
							}
						]
					},
					{
						title: 'Our Sponsors',
						items: [
							{
								label: 'Vercel',
								href: 'https://vercel.com/?utm_source=sapphiredev&utm_campaign=oss'
							},
							{
								label: 'Polypane',
								href: 'https://polypane.app'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} The Sapphire Community and its contributors.`
			},
			prism: {
				defaultLanguage: 'javascript',
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['powershell', 'batch']
			},
			algolia: {
				appId: 'WWVT30WAIZ',
				apiKey: 'c1639f17b4ed5183d032d2e7f22ec62f',
				indexName: 'sapphirejs',
				contextualSearch: false
			}
		})
};

module.exports = config;
