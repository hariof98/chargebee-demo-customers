import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
    /* images */
    images: {
        formats: ["image/avif", "image/webp"],

        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
            },
        ],
    },

    /* party town - web workers */
    // experimental: {
    //     nextScriptWorkers: true,
    // },
};

export default withBundleAnalyzerConfig(nextConfig);
