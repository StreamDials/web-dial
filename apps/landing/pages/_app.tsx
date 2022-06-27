// import { GetServerSidePropsContext } from 'next';
// import { useState } from 'react';
// import { AppProps } from 'next/app';
// import { getCookie, setCookies } from 'cookies-next';
// import Head from 'next/head';
// import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
// import { NotificationsProvider } from '@mantine/notifications';

// export default function App(props: AppProps & { colorScheme: ColorScheme }) {
//     const { Component, pageProps } = props;
//     const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

//     const toggleColorScheme = (value?: ColorScheme) => {
//         const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
//         setColorScheme(nextColorScheme);
//         setCookies('stream-dials-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
//     };

//     return (
//         <>
//             <Head>
//                 <meta charSet="UTF-8" />
//                 <title>Stream Dials</title>
//                 <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover" />
//                 <meta name="description" content="Description of the page less than 150 characters" />
//                 <link rel="shortcut icon" href="/favicon.svg" />
//                 {/* <!-- Standard favicon --> */}
//                 <link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico" />
//                 {/* <!-- Recommended favicon format --> */}
//                 <link rel="icon" type="image/png" href="https://example.com/favicon.png" />

//                 {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
//                 {/* <link rel="apple-touch-icon" href="/custom-icon.png" /> */}

//                 {/* <!-- To run web application in full-screen --> */}
//                 <meta name="apple-mobile-web-app-capable" content="yes" />

//                 {/* <!-- Status Bar Style (see Supported Meta Tags below for available values) --> */}
//                 {/* <!-- Has no effect unless you have the previous meta tag --> */}
//                 <meta name="apple-mobile-web-app-status-bar-style" content="black" />

//                 {/* <!-- Microsoft Tiles --> */}
//                 <meta name="msapplication-config" content="browserconfig.xml" />


//                 {/* <!-- Helps prevent duplicate content issues --> */}
//                 <link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html" />
//                 {/* <script
//                     async
//                     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
//                 />
//                 <script
//                     dangerouslySetInnerHTML={{
//                         __html: `
//                                 window.dataLayer = window.dataLayer || [];
//                                 function gtag(){dataLayer.push(arguments);}
//                                 gtag('js', new Date());
//                                 gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
//                                     page_path: window.location.pathname,
//                                 });
//                                 `,
//                     }}
//                 /> */}
//             </Head>

//             <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
//                 <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
//                     <NotificationsProvider>
//                         <Component {...pageProps} />
//                     </NotificationsProvider>
//                 </MantineProvider>
//             </ColorSchemeProvider>
//         </>
//     );
// }

// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
//     colorScheme: getCookie('stream-dials-color-scheme', ctx) || 'light',
// });

import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'light',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </>
    );
}