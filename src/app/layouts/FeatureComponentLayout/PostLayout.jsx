"use client";

import useClutteredDataFilter from "../../utils/custom-hooks/useClutteredDataFilter";
import useThemeSelector from "../../utils/custom-hooks/useThemeSelector";

const PostLayout = (props) => {
    const { heading, title, subHeading, description, list, primaryCta, secondaryCta, theme, type } = props;

    const getFilteredDescription = useClutteredDataFilter(description);
    const getThemeData = useThemeSelector(...theme);

    // console.log(getFilteredDescription);
    // console.log(title);
    // console.log(heading);

    const layout = (
        <div>
            <div className={getThemeData.background}>
                <div className="pt-12 pb-14 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 lg:pt-18 lg:pb-20 xl:pt-16 xl:pb-18 2xl:pt-18 2xl:pb-20 3xl:pt-20 3xl:pb-24 4xl:pt-24 4xl:pb-28">
                    <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16 3xl:mb-18 max-w-5xl mx-auto">
                        <div data-animate="onScroll" data-animate-name="slide-in" className="sectionHeading">
                            <div className="relative">
                                <div className="container">
                                    <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-[928px] 4xl:max-w-5xl mx-auto text-center">
                                        <div data-animate="delay">
                                            <div>
                                                <h2
                                                    tag="h2"
                                                    variant="heading-6xl"
                                                    className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl 3xl:leading-54  ">
                                                    {heading}
                                                </h2>
                                            </div>
                                        </div>

                                        <div data-animate="delay" className="mx-auto mt-2 sm:mt-2.5 xl:mt-4 3xl:mt-5 4xl:mt-3.5">
                                            <div>
                                                <p
                                                    tag="p"
                                                    variant="description-2xl"
                                                    className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight xl:text-xl 3xl:text-2xl">
                                                    {subHeading}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        data-animate="onScroll"
                        data-animate-name="slide-in"
                        className="grid feature-card grid-cols-1 gap-12 px-5 sm:px-0 sm:gap-x-8 sm:gap-y-12 sm:grid-cols-2 md:gap-x-14 md:gap-y-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14 xl:gap-x-14 xl:gap-y-18 2xl:gap-y-19 2xl:gap-x-16 3xl:gap-x-14 3xl:gap-y-20 4xl:gap-x-16">
                        {title.map((data, index) => {
                            return (
                                <div data-animate="delay" key={index}>
                                    <div className="flex h-full flex-col justify-between">
                                        <div>
                                            <div className="mb-5 sm:mb-3.5 md:mb-4 xl:mb-6 4xl:mb-8">
                                                <div className="flex h-9 w-9 items-end justify-start">
                                                    <div className="cb-storybook-img__document-type-two--regular max-w-[36px] max-h-[36px] w-full h-full">
                                                        <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M3.70934 2.77971C3.17717 2.77971 2.74577 3.21111 2.74577 3.74327V32.2372C2.74577 32.7694 3.17717 33.2008 3.70934 33.2008H24.7701C25.3022 33.2008 25.7336 32.7694 25.7336 32.2372V17.3708C25.7336 14.786 23.6382 12.6906 21.0535 12.6906H18.5757C17.0553 12.6906 15.8227 11.4581 15.8227 9.9376V7.45987C15.8227 4.87509 13.7273 2.77971 11.1425 2.77971H3.70934ZM3.70934 0.990234C2.18888 0.990234 0.956299 2.22281 0.956299 3.74327V32.2372C0.956299 33.7577 2.18887 34.9902 3.70934 34.9902H24.7701C26.2905 34.9902 27.5231 33.7577 27.5231 32.2372V16.7514C27.5231 8.04673 20.4666 0.990234 11.762 0.990234H3.70934ZM16.2793 3.52611C17.1153 4.61615 17.6122 5.97999 17.6122 7.45987V9.9376C17.6122 10.4698 18.0436 10.9012 18.5757 10.9012H21.0535C22.5333 10.9012 23.8972 11.398 24.9872 12.2341C23.5931 8.15151 20.3618 4.9202 16.2793 3.52611ZM7.15144 11.7959C7.15144 11.3018 7.55202 10.9012 8.04617 10.9012H11.762C12.2561 10.9012 12.6567 11.3018 12.6567 11.7959C12.6567 12.2901 12.2561 12.6906 11.762 12.6906H8.04617C7.55202 12.6906 7.15144 12.2901 7.15144 11.7959ZM7.15063 17.3708C7.15063 16.8767 7.55122 16.4761 8.04537 16.4761H11.7612C12.2553 16.4761 12.6559 16.8767 12.6559 17.3708C12.6559 17.865 12.2553 18.2655 11.7612 18.2655H8.04537C7.55122 18.2655 7.15063 17.865 7.15063 17.3708ZM15.8227 17.3708C15.8227 16.8767 16.2233 16.4761 16.7174 16.4761H20.4332C20.9274 16.4761 21.328 16.8767 21.328 17.3708C21.328 17.865 20.9274 18.2655 20.4332 18.2655H16.7174C16.2233 18.2655 15.8227 17.865 15.8227 17.3708ZM7.15063 22.9457C7.15063 22.4516 7.55122 22.051 8.04537 22.051H20.434C20.9282 22.051 21.3288 22.4516 21.3288 22.9457C21.3288 23.4398 20.9282 23.8404 20.434 23.8404H8.04537C7.55122 23.8404 7.15063 23.4398 7.15063 22.9457ZM15.8227 27.9012C15.8227 27.407 16.2233 27.0064 16.7174 27.0064H20.1402C20.6344 27.0064 21.035 27.407 21.035 27.9012C21.035 28.3953 20.6344 28.7959 20.1402 28.7959H16.7174C16.2233 28.7959 15.8227 28.3953 15.8227 27.9012Z"
                                                                fill="var(--primary-color, #FF3300)"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-1.5 sm:mb-1 md:mb-1.5 lg:mb-2 3xl:mb-2 4xl:mb-3">
                                                <div>
                                                    <h3
                                                        tag="h3"
                                                        variant="heading-3xl"
                                                        className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-lg 2xl:text-xl 3xl:text-3xl 2xl:leading-28 3xl:leading-36">
                                                        {data}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div>
                                                <div>
                                                    <div
                                                        tag="div"
                                                        variant="description-lg"
                                                        className="text-variant text-balance text-blue-800 font-inter text-base md:tracking-tight 3xl:text-lg 3xl:leading-28">
                                                        <p>{getFilteredDescription[index]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    return layout;
};

export default PostLayout;
