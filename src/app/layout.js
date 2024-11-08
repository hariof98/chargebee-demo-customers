/* this is the common layout for the entire application */

import "./utils/helpers/css/globals.css";
import Script from "next/script";
import useThirdPartyScripts from "./utils/custom-hooks/useThirdPartyScripts";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

/* for dynamic meta data generation */
// const generateMetaData = async ({ params }) => {
//     const { id, name } = params;

//     const data = await fetch(`https://.....${id}/${name}`).then((values) => {
//         return values;
//     });

//     return {
//         title: data.title,
//         description: data.description,
//     };
// };

const RootLayout = ({ children }) => {
    const getThirdPartyScripts = useThirdPartyScripts();

    const layout = (
        // we have the html declaration here because this is the root of the application
        <html lang="en">
            <body>
                {/* without optimization */}
                {/* <script
                    id="cdn-clouflare"
                    strategy="lazyOnload"
                    src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js"></script>

                <script
                    id="gtm"
                    dangerouslySetInnerHTML={{
                        __html: `let cbEnvironmentGTM = document.domain;
                if(cbEnvironmentGTM === 'localhost'){
                    // GTM Code added by CRO - Local
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=3_0wnX23_A4RVlrHJTIqKg&gtm_preview=env-174&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else if(cbEnvironmentGTM === 'www.devcb.in' || cbEnvironmentGTM === 'www.devstory.in'){
                    // GTM Code added by CRO - DevCB
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=6MYUYYLvMg9Oo0hs70qQhA&gtm_preview=env-175&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else{
                    // GTM Code added by CRO - Live
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }`,
                    }}></script>

                {Object.keys(getThirdPartyScripts).map((data) => {
                    return <script key={data} id={data} dangerouslySetInnerHTML={{ __html: getThirdPartyScripts[data] }}></script>;
                })} */}

                {/* with optimization */}
                <Script
                    id="cdn-clouflare"
                    strategy="lazyOnload"
                    src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js"></Script>

                <Script id="gtm" strategy="lazyOnload">
                    {`let cbEnvironmentGTM = document.domain;
                if(cbEnvironmentGTM === 'localhost'){
                    // GTM Code added by CRO - Local
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=3_0wnX23_A4RVlrHJTIqKg&gtm_preview=env-174&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else if(cbEnvironmentGTM === 'www.devcb.in' || cbEnvironmentGTM === 'www.devstory.in'){
                    // GTM Code added by CRO - DevCB
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=6MYUYYLvMg9Oo0hs70qQhA&gtm_preview=env-175&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else{
                    // GTM Code added by CRO - Live
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }`}
                </Script>

                {Object.keys(getThirdPartyScripts).map((data) => {
                    return (
                        <Script key={data} id={data} strategy="lazyOnload">
                            {getThirdPartyScripts[data]}
                        </Script>
                    );
                })}

                {/* with GoogleTagManager component */}
                {/* <Script
                    id="cdn-clouflare"
                    strategy="lazyOnload"
                    src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js"></Script>

                <GoogleTagManager gtmId="GTM-TKDT3Z8">
                    {`let cbEnvironmentGTM = document.domain;
                if(cbEnvironmentGTM === 'localhost'){
                    // GTM Code added by CRO - Local
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=3_0wnX23_A4RVlrHJTIqKg&gtm_preview=env-174&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else if(cbEnvironmentGTM === 'www.devcb.in' || cbEnvironmentGTM === 'www.devstory.in'){
                    // GTM Code added by CRO - DevCB
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=6MYUYYLvMg9Oo0hs70qQhA&gtm_preview=env-175&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }else{
                    // GTM Code added by CRO - Live
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKDT3Z8');
                }`}
                </GoogleTagManager>

                {Object.keys(getThirdPartyScripts).map((data) => {
                    return (
                        <Script key={data} id={data} strategy="lazyOnload">
                            {getThirdPartyScripts[data]}
                        </Script>
                    );
                })} */}

                <h1>Common Layout</h1>

                {children}
            </body>
        </html>
    );

    return layout;
};

export default RootLayout;