export const content = ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"];

export const darkMode = "media";

export const corePlugins = {
    preflight: false,
};

export const theme = {
    container: {
        padding: {
            DEFAULT: "16px",
            sm: "24px",
            md: "34px",
            lg: "90px",
            xl: "76px",
            "2xl": "76px",
            "3xl": "96px",
            "4xl": "136px",
        },
        center: true,
    },

    colors: {
        "orange-500": "#FF3300",
        "orange-400": "#FF523B",
        "blue-900": "#012A38",
        "blue-800": "#4F6169",
        "blue-100": "#92A1A8",
        "blue-50": "#D3D9DC",
        "grey-50": "#EFEFEF",
        "white": "#FFFFFF",
        "lime-500": "#BFF90B",
        "bone-50": "#E0DBC6",
        "opal-100": "#A2C1C4",
        "transparent": "transparent",
    },

    fontSize: {
        xxs: ["10px", { lineHeight: "16px" }],
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "26px" }],
        xl: ["20px", { lineHeight: "30px" }],
        "2xl": ["22px", { lineHeight: "34px" }],
        "3xl": ["24px", { lineHeight: "30px" }],
        "4xl": ["28px", { lineHeight: "36px" }],
        "5xl": ["32px", { lineHeight: "42px" }],
        "6xl": ["36px", { lineHeight: "46px" }],
        "7xl": ["40px", { lineHeight: "48px" }],
        "8xl": ["44px", { lineHeight: "52px" }],
        "9xl": ["48px", { lineHeight: "56px" }],
        "10xl": ["52px", { lineHeight: "62px" }],
        "11xl": ["56px", { lineHeight: "68px" }],
        "12xl": ["60px", { lineHeight: "68px" }],
        "13xl": ["64px", { lineHeight: "72px" }],
        "14xl": ["68px", { lineHeight: "76px" }],
        "15xl": ["72px", { lineHeight: "82px" }],
        "16xl": ["76px", { lineHeight: "88px" }],
        "17xl": ["80px", { lineHeight: "92px" }],
        "18xl": ["84px", { lineHeight: "96px" }],
        "19xl": ["88px", { lineHeight: "100px" }],
    },

    fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
    },

    fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },
    letterSpacing: {
        tightest: "-2px",
        tighter: "-0.5px",
        tight: "-0.25px",
        normal: "0px",
        wide: "1px",
    },

    lineHeight: {
        20: "20px",
        22: "22px",
        24: "24px",
        25: "25px",
        28: "28px",
        32: "32px",
        36: "36px",
        54: "54px",
        60: "60px",
        68: "68px",
    },

    screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }

        "4xl": "1920px",
    },

    boxShadow: {
        DEFAULT: "0px 0px 16px rgba(1, 34, 45, 0.05)",
        md: "0px 0px 26px rgba(1, 34, 45, 0.1)",
        lg: "0px 10px 36px rgba(1, 34, 45, 0.1)",
        xl: "0px 20px 36px rgba(1, 34, 45, 0.16)",
        "2xl": "0px 18px 36px rgba(1, 34, 45, 0.1)",
    },

    extend: {
        spacing: {
            18: "72px",
        },
    },
};
