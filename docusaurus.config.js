const config= {
    title: 'Room of JL \'s own ',
    favicon: 'img/door-closed-svgrepo-com.svg',

    url: 'https://jlfati23.github.io',
    baseUrl: '/',
    organizationName: 'jlfati23',
    projectName: 'jlfati23.github.io',
    deploymentBranch: 'main',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        (
            {
                navbar: {
                    logo: {
                        src: 'img/dog-bone-svgrepo-com.svg',
                    },
                    items: [
                        {
                            type: 'docSidebar',
                            sidebarId: 'tutorialSidebar',
                            position: 'right',
                            label: 'Docs',
                        },
                        {
                            to: '/blog',
                            label: 'Blogs',
                            position: 'right'
                        },
                    ],
                },
                colorMode: {
                    defaultMode: 'light',
                    disableSwitch: true,
                    respectPrefersColorScheme: false,
                },
            }
        ),
};

export default config;
