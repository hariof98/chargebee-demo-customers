"use client";

import useClutteredDataFilter from "../../utils/custom-hooks/useClutteredDataFilter";
import useThemeSelector from "../../utils/custom-hooks/useThemeSelector";

const PostLayout = (props) => {
    const { label, title, description, media, list, primaryCta, secondaryCta, theme, type } = props;

    const getFilteredList = useClutteredDataFilter(list);
    const getFilteredDescription = useClutteredDataFilter(description);
    const getThemeData = useThemeSelector(...theme);

    const layout = (
        <div>
            <div className={getThemeData.background}>
                <div className="grid md:grid md:grid-cols-2 xl:grid-cols-2">
                    <div>
                        {/* label fragment */}
                        {label && (
                            <div data-animate="delay" className="mb-3 lg:mb-4 xl:mb-5 3xl:mb-6">
                                <div
                                    tag="div"
                                    className={`${getThemeData.label} font-sora font-semibold tracking-wide uppercase text-xxs lg:text-xs lg:font-normal 3xl:text-sm 3xl:font-medium`}>
                                    {label}
                                </div>
                            </div>
                        )}

                        {/* title fragment */}
                        {title && (
                            <div data-animate="delay" className="mb-2.5 md:mb-3 lg:mb-4 xl:mb-3.5 2xl:mb-5">
                                <div>
                                    <h1
                                        tag="h1"
                                        variant="heading-7xl"
                                        className={`${getThemeData.title} text-variant text-balance font-sora font-semibold tracking-tighter text-5xl lg:text-7xl 2xl:text-9xl 2xl:leading-60 3xl:text-11xl 3xl:leading-68`}>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                        )}

                        {/* description fragment */}
                        {description &&
                            getFilteredDescription.length > 0 &&
                            getFilteredDescription.map((data, index) => {
                                return (
                                    <div data-animate="delay" className="max-w-3xl" key={index}>
                                        <div>
                                            <div
                                                tag="div"
                                                variant="description-lg"
                                                className={`${getThemeData.description} text-variant text-balance font-inter text-base md:tracking-tight 3xl:text-lg 3xl:leading-28`}>
                                                <p>{data}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        {/* list fragment */}
                        {list && getFilteredList.length > 0 && (
                            <div data-animate="delay" className="mt-4 sm:mt-3.5 md:mt-3 lg:mt-4 xl:mt-6">
                                <div
                                    className={`${getThemeData.description} relative max-w-max list-none font-inter font-normal tracking-tight text-base 3xl:text-lg 3xl:leading-28 list`}>
                                    <div>
                                        <ul>
                                            {getFilteredList.map((data, index) => {
                                                return (
                                                    <div key={index}>
                                                        <li>
                                                            <p>{data}</p>
                                                        </li>
                                                    </div>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* button fragment */}
                        <div className="mt-7 lg:mt-8 2xl:mt-10">
                            <div className="flex flex-col sm:flex-row md:flex-col gap-4 xl:gap-6 3xl:gap-8 4xl:gap-8 lg:flex-row sm:justify-start">
                                {primaryCta && (
                                    <div className="w-full sm:w-fit">
                                        <a href={primaryCta[0].split("|")[1]} title="Get a Demo" variant="button-filled">
                                            <div
                                                className={`${getThemeData.primaryBtnColor} group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none inline-flex w-full justify-center items-center text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]`}>
                                                <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                    {primaryCta[0].split("|")[0]}
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                )}

                                {secondaryCta && (
                                    <div className="w-full sm:w-fit">
                                        <a href={secondaryCta[0].split("|")[1]} title="Get a Demo" variant="button-filled">
                                            <div
                                                className={`${getThemeData.secondaryBtnColor} group relative transition-colors duration-100 button lg:w-auto font-sora focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-grey-50 font-semibold rounded-none inline-flex w-full justify-center items-center text-base leading-20 3xl:text-xl 3xl:leading-25 py-3.5 pl-[30px] pr-[52px] 3xl:py-[18px] 3xl:pl-[34px] 3xl:pr-[60px]`}>
                                                <span className="relative before:block before:absolute before:border-solid before:transition-[0.3s] before:border-l-2 before:border-b-2 before:w-0.5 before:h-0.5 before:opacity-0 after:block after:absolute after:border-solid after:transition-[0.3s] after:border-l-2 after:border-b-2 after:-rotate-[135deg] after:-mt-[3px] focus:before:w-2.5 focus:before:opacity-100 group-hover:before:w-3 group-hover:before:opacity-100 before:-right-[17px] after:-right-[16px] focus:before:-right-[20px] group-hover:before:-right-[20px] group-hover:after:-right-[21px] focus:after:-right-[21px] before:top-[48%] after:top-[46%] after:w-[9px] after:h-[9px]">
                                                    {secondaryCta[0].split("|")[0]}
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* media fragment */}
                        {media && (
                            <div className="hero-image self-center h-full pb-14 md:py-14 md:pl-2.5 lg:pl-6 lg:py-10 xl:py-10 xl:pl-10 3xl:py-16 3xl:pl-16 4xl:py-16 4xl:pl-16 w-full">
                                <div className="relative grid grid-cols-1 h-full justify-center items-center">
                                    <object
                                        type="image/svg+xml"
                                        data={`//images.ctfassets.net/a7hvy8sclsq6/${media}/29fe5687459ddc1eb3524ec429a05a69/Move_Upmarket.svg`}
                                        className="max-w-full"></object>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return layout;
};

export default PostLayout;
