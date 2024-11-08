// Customers - Client Side

"use client";

import { useState } from "react";
import CardsLayout from "../../layouts/CardsLayout/CardsLayout";

const ClientComponent = ({ initialCategory }) => {
    const { Billing, Retention, RevRec, Receivables, featured } = initialCategory;

    const [count, setCount] = useState(10);

    const limitItems = Billing.length > 10 ? Billing.slice(0, count) : Billing;

    return (
        <div>
            <div className="relative hero-section">
                <div>
                    <div className="py-10 md:py-16 xl:py-24 bg-blue-900">
                        <div className="relative">
                            <div>
                                <div className="container">
                                    <div className="grid grid-hero grid-cols-2 gap-y-10 lg:gap-y-32 col-span-full">
                                        <div data-animate="instant" data-animate-name="slide-in" className="left pt-5 lg:pt-9">
                                            <div className="mb-3">
                                                <div>
                                                    <h1
                                                        tag="h1"
                                                        variant="heading-8xl"
                                                        className="text-variant text-balance text-white font-sora font-semibold tracking-tighter text-7xl lg:text-13xl 2xl:text-15xl 2xl:tracking-tightest 3xl:text-19xl 3xl:tracking-tightest">
                                                        Customer Stories
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="mb-10 max-w-lg">
                                                <div>
                                                    <p
                                                        tag="p"
                                                        variant="description-lg"
                                                        className="text-variant text-balance text-blue-50 font-inter text-base md:tracking-tight 3xl:text-lg 3xl:leading-28">
                                                        Businesses just like yours share how they transformed, retained, pivoted, and grew with some
                                                        focus and Chargebee.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-y-4 gap-x-6">
                                                <div className="w-full sm:w-fit">
                                                    <a href="/trial-signup/" title="Sign up for free" variant="button-filled">
                                                        <div className="group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none button-filled inline-flex w-full justify-center items-center text-blue-900 border-2 border-lime-500 bg-lime-500 group-hover:bg-white group-hover:border-white text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]">
                                                            <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                                Sign up for free
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="w-full sm:w-fit">
                                                    <a href="/schedule-a-demo/" title="Talk to us" variant="button-outline">
                                                        <div className="group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none button-outline inline-flex w-full justify-center items-center text-lime-500 border-2 border-lime-500 text-base leading-20 group-hover:bg-lime-500 group-hover:text-blue-900 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]">
                                                            <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                                Talk to us
                                                            </span>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="lg:-mb-[120px] 2xl:-mb-[240px]">
                                                <a href="/customers/condenast/" className="relative">
                                                    <div className="bg-white sm:max-w-md md:max-w-xs lg:max-w-sm xl:max-w-lg sm:mx-auto md:ml-auto 2xl:max-w-xl 3xl:max-w-[622px] text-blue-900 p-4 pb-14 lg:p-5 lg:pb-16 xl:p-5 xl:pb-24 rounded-lg md:rounded-2xl hero-card">
                                                        <div className="mb-10">
                                                            <img
                                                                src="//images.ctfassets.net/a7hvy8sclsq6/5DKWJ8pHIMLvrP4Eb6Y9OX/2de3b509268896c3582f9a119d59a7c3/Conde_Nast_banner.png"
                                                                alt="Condé Nast- Banner"
                                                                className="rounded-lg md:rmdnded-xl max-md48 md:max-h-96 lg:max-h-64 2xl:max-h-96 w-full object-cover object-top"
                                                            />
                                                        </div>
                                                        <div className="md:px-2 xl:px-10">
                                                            <div>
                                                                <h4
                                                                    tag="h4"
                                                                    className="text-blue-900 font-sora font-semibold tracking-wide uppercase text-xxs lg:text-xs lg:font-normal 3xl:text-sm 3xl:font-medium">
                                                                    Publishing
                                                                </h4>
                                                            </div>
                                                            <div className="mt-2">
                                                                <div>
                                                                    <h3
                                                                        tag="h3"
                                                                        variant="heading-6xl"
                                                                        className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                                                        Cover to Cover: Condé Nast's Value-Driven Journey to Increased Subscriber
                                                                        Retention
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-grey-50 py-10 md:py-16 xl:py-24">
                        <div className="py-10 md:py-16 xl:py-24">
                            <div className="container">
                                <div className="featured grid grid-hero gap-y-18 grid-cols-2 items-start">
                                    <div>
                                        <div className="mb-8 lg:mb-6">
                                            <h3
                                                tag="h3"
                                                variant="heading-6xl"
                                                className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                                Featured Stories
                                            </h3>
                                        </div>

                                        <div>
                                            <div className="grid gap-y-10">
                                                {featured.map((data, index) => {
                                                    if (index < 3) {
                                                        return (
                                                            <div key={index} className="featured-card sm:max-w-lg lg:max-w-full">
                                                                <div>
                                                                    <h4
                                                                        tag="h4"
                                                                        className="text-blue-900 font-sora font-semibold tracking-wide uppercase text-xxs lg:text-xs lg:font-normal 3xl:text-sm 3xl:font-medium">
                                                                        {data.fields.filter}
                                                                    </h4>
                                                                </div>
                                                                <a href={`/customers/${data.fields.slug}/`}>
                                                                    <div className="mt-1.5">
                                                                        <div>
                                                                            <h3
                                                                                tag="h3"
                                                                                variant="heading-3xl"
                                                                                className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-lg 2xl:text-xl 3xl:text-3xl 2xl:leading-28 3xl:leading-36">
                                                                                {data.fields.seoTitle}
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="2xl:max-w-xl 2xl:mt-[120px] 3xl:max-w-[622px] hero-card lg:max-w-sm lg:mt-[60px] md:max-w-xs md:ml-auto sm:max-w-md sm:mx-auto border-lime-500 border-8 border-solid">
                                        <a href="/resources/guides/gartner-magic-quadrant/?ref=customersBanner">
                                            <img
                                                src="https://webstatic.chargebee.com/assets/web/700/images/gartner/customer-callout-gartner.webp"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container py-10 md:py-16 xl:py-24">
                        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-[928px] 4xl:max-w-5xl mx-auto text-center">
                            <div data-animate="delay">
                                <div>
                                    <h2
                                        tag="h2"
                                        variant="heading-6xl"
                                        className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                        Chargebee powers subscriptions for businesses of all sizes
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="container">
                            {/* billing */}
                            <div className="mb-16">
                                <div className="mb-3">
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="heading-6xl"
                                            className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                            Billing
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="description-2xl"
                                            className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight xl:text-xl 3xl:text-2xl">
                                            Reduce voluntary churn and boost retention with an experience your customers can’t resist.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-10">
                                {limitItems.map((record, index) => {
                                    return <Component key={index} data={record} />;
                                })}
                            </div>

                            <div
                                className="mt-10 sm:mt-8 lg:mt-12 xl:mt-16 2xl:mt-14 3xl:mt-16 4xl:mt-20 flex justify-center cursor-pointer"
                                onClick={() => {
                                    setCount((prevValue) => {
                                        return prevValue + 10;
                                    });
                                }}>
                                <div className="group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none button-outline inline-flex w-full justify-center items-center text-blue-900 border-2 border-blue-900 group-hover:bg-blue-900 group-hover:text-white text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]">
                                    <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                        Show More
                                    </span>
                                </div>
                            </div>

                            {/* rev rec */}
                            <div className="mb-16 mt-16">
                                <div className="mb-3">
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="heading-6xl"
                                            className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                            Rev Rec
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="description-2xl"
                                            className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight xl:text-xl 3xl:text-2xl">
                                            Reduce voluntary churn and boost retention with an experience your customers can’t resist.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-10">
                                {RevRec.map((record, index) => {
                                    return <Component key={index} data={record} />;
                                })}
                            </div>

                            {/* receivables */}
                            <div className="mb-16 mt-16">
                                <div className="mb-3">
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="heading-6xl"
                                            className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                            Receivables
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="description-2xl"
                                            className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight xl:text-xl 3xl:text-2xl">
                                            Reduce voluntary churn and boost retention with an experience your customers can’t resist.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-10">
                                {Receivables.map((record, index) => {
                                    return <Component key={index} data={record} />;
                                })}
                            </div>

                            {/* retention */}
                            <div className="mb-16 mt-16">
                                <div className="mb-3">
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="heading-6xl"
                                            className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                            Retention
                                        </h3>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3
                                            tag="h3"
                                            variant="description-2xl"
                                            className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight xl:text-xl 3xl:text-2xl">
                                            Reduce voluntary churn and boost retention with an experience your customers can’t resist.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-10">
                                {Retention.map((record, index) => {
                                    return <Component key={index} data={record} />;
                                })}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white">
                                <div
                                    data-animate="onScroll"
                                    data-animate-name="slide-in"
                                    className="container py-14 sm:pt-12 sm:pb-14 md:py-18 lg:py-20 xl:py-24 3xl:py-32 4xl:py-36">
                                    <div className="flex flex-col items-center">
                                        <div className="sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl text-center">
                                            <div>
                                                <h2
                                                    tag="h2"
                                                    variant="heading-6xl"
                                                    className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                                    Explore Chargebee Products
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:w-auto lg:gap-5 xl:gap-8 mt-7 sm:mt-5 md:mt-8 xl:mt-10 4xl:mt-12">
                                            <div className="w-full sm:w-fit">
                                                <a href="/schedule-a-demo/" title="Get a Demo" variant="button-filled">
                                                    <div className="group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none button-filled inline-flex w-full justify-center items-center text-white border-2 border-blue-900 bg-blue-900 group-hover:bg-lime-500 group-hover:border-lime-500 group-hover:text-blue-900 text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]">
                                                        <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                            Get a Demo
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-full sm:w-fit">
                                                <a href="/trial-signup/" title="Sign up for free" variant="button-outline">
                                                    <div className="group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none button-outline inline-flex w-full justify-center items-center text-blue-900 border-2 border-blue-900 group-hover:bg-blue-900 group-hover:text-white text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]">
                                                        <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                            Sign up for free
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Component = ({ data }) => {
    return (
        <CardsLayout
            link={`/customers/${data.fields.slug}/`}
            heading={data.fields.category}
            title={data.fields.heroTitle}
            image={data.fields.heroBannerImage?.fields?.file?.url}
        />
    );
};

export default ClientComponent;
