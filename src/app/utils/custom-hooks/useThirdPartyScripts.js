const useThirdPartyScripts = () => {
    return {
        "legal-monster": `// Legal Monster
                        console.log("Legal Monster");
                        !function(){var i,e,t,s=window.legal=window.legal||[];if(s.SNIPPET_VERSION="3.0.0",i="https://widgets.legalmonster.com/v1/legal.js",!s.__VERSION__)if(s.invoked)window.console&&console.info&&console.info("legal.js: The initialisation snippet is included more than once on this page, and does not need to be.");else{for(s.invoked=!0,s.methods=["cookieConsent","document","ensureConsent","handleWidget","signup","user"],s.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),s.push(e),s}},e=0;e<s.methods.length;e++)t=s.methods[e],s[t]=s.factory(t);s.load=function(e,t){var n,o=document.createElement("script");o.setAttribute("data-legalmonster","sven"),o.type="text/javascript",o.defer=!0,o.src=i,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,n),s.__project=e,s.__loadOptions=t||{}},s.widget=function(e){s.__project||s.load(e.widgetPublicKey),s.handleWidget(e)}}}();
                        legal.widget({
                            type: "cookie",
                            jurisdiction: "dk",
                            locale: "en-us",
                            widgetPublicKey: "J5Bi8Gyw3UMasKHLL1qtuTBe",
                        });
                        // For Pricing Page CTA
                        window.addEventListener('legalmonster.cookie.marketing.rejected', function(){
                            $("a[href='#open_drift_chat']").hide()
                        })`,

        "segment": `// Segment - Marketing Ops
                    let cbEnvironmentSegment = document.domain;
                    // console.log('segment script 1');
                    window.addEventListener('legalmonster.cookie.marketing.accepted', function(){
                        // console.log('segment script 2');
                        if(cbEnvironmentSegment === 'localhost' || cbEnvironmentSegment === 'www.devcb.in' || cbEnvironmentSegment === 'www.devstory.in'){
                        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="6OCdKwWyBQh87y4gnGGRt04a8NJJLmzx";;analytics.SNIPPET_VERSION="4.15.3";
                        analytics.load("6OCdKwWyBQh87y4gnGGRt04a8NJJLmzx");
                        // analytics.page();
                        }}();
                        }else{
                        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="eKkFejKwXQkmFJ6IHaoRFpgvvhgDzyUR";;analytics.SNIPPET_VERSION="4.15.3";
                        analytics.load("eKkFejKwXQkmFJ6IHaoRFpgvvhgDzyUR");
                        // analytics.page();
                        }}();
                        }
                    })`,

        "customfit": `// Customfit
                        !function(e,t,i,s){var n=t.getElementById("customfitpreinit");if(n){var r=document.querySelector("html");r.className=r.className+" customfit-invisible-preinit-block",setTimeout(function(){r.className=r.className.replace(/customfit-invisible-preinit-block/g,"")},5e3);var c=t.getElementsByTagName("script")[0],o=t.createElement("script");o.id="customfitinit",o.setAttribute("crossorigin","*"),o.deferred=!0,o.src="https://sdk.customfit.ai/7a80e100-474a-11ea-a265-d9d4407c2d40/cf-js-sdk-min.js",o.type="text/javascript",c.parentNode.insertBefore(o,c),o.onerror=function(){var e=t.getElementById("customfit-invisible-preinit-block");e&&e.parentNode.removeChild(e)}}}(window,document);`,

        "vwo-script": `// VWO Script
                        let cbEnvironmentVWO = document.domain;
                        // console.log('vwo 1');
                        if(cbEnvironmentVWO != 'localhost' && cbEnvironmentVWO != 'www.devcb.in' && cbEnvironmentVWO != 'www.devstory.in'){
                            // console.log('vwo 2')
                            window._vwo_code = window._vwo_code || (function(){
                            var account_id=21063,
                            settings_tolerance=2000,
                            library_tolerance=2500,
                            use_existing_jquery=false,
                            is_spa=1,
                            hide_element='body',
                            /* DO NOT EDIT BELOW THIS LINE */
                            f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
                            settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());
                        }`,

        // "gtm": `let cbEnvironmentGTM = document.domain;
        //         if(cbEnvironmentGTM === 'localhost'){
        //             // GTM Code added by CRO - Local
        //             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        //             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        //             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        //             'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=3_0wnX23_A4RVlrHJTIqKg&gtm_preview=env-174&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
        //             })(window,document,'script','dataLayer','GTM-TKDT3Z8');
        //         }else if(cbEnvironmentGTM === 'www.devcb.in' || cbEnvironmentGTM === 'www.devstory.in'){
        //             // GTM Code added by CRO - DevCB
        //             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        //             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        //             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        //             'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=6MYUYYLvMg9Oo0hs70qQhA&gtm_preview=env-175&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
        //             })(window,document,'script','dataLayer','GTM-TKDT3Z8');
        //         }else{
        //             // GTM Code added by CRO - Live
        //             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        //             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        //             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        //             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        //             })(window,document,'script','dataLayer','GTM-TKDT3Z8');
        //         }`,

        "accesibe": `let cbEnvironmentAccessiBe = document.location.pathname;
                    if(cbEnvironmentAccessiBe != '/' && !cbEnvironmentAccessiBe.includes('-signup') && !cbEnvironmentAccessiBe.includes('/pricing') && !cbEnvironmentAccessiBe.includes('/schedule-a-demo') && !cbEnvironmentAccessiBe.includes('/customers') && !cbEnvironmentAccessiBe.includes('/billing') && !cbEnvironmentAccessiBe.includes('/receivables') && !cbEnvironmentAccessiBe.includes('/retention') && !cbEnvironmentAccessiBe.includes('/revenue-recognition-software')){
                        (function(){
                            var s    = document.createElement('script');
                            var h    = document.querySelector('head') || document.body;
                            s.src    = 'https://acsbapp.com/apps/app/dist/js/app.js';
                            s.async  = true;
                            s.onload = function(){
                                acsbJS.init({
                                    statementLink    : '',
                                    footerHtml       : '',
                                    hideMobile       : false,
                                    hideTrigger      : false,
                                    disableBgProcess : false,
                                    language         : 'en',
                                    position         : 'left',
                                    leadColor        : '#012a38',
                                    triggerColor     : '#012a38',
                                    triggerRadius    : '50%',
                                    triggerPositionX : 'left',
                                    triggerPositionY : 'bottom',
                                    triggerIcon      : 'wheels2',
                                    triggerSize      : 'large',
                                    triggerOffsetX   : 20,
                                    triggerOffsetY   : 100,
                                    mobile           : {
                                        triggerSize      : 'large',
                                        triggerPositionX : 'left',
                                        triggerPositionY : 'bottom',
                                        triggerOffsetX   : 20,
                                        triggerOffsetY   : 20,
                                        triggerRadius    : '50%'
                                    }
                                });
                            };
                            h.appendChild(s);
                        })();
                    }`,
    };
};

export default useThirdPartyScripts;
