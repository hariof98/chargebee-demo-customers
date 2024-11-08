const CardsLayout = ({ link, heading, title, image }) => {
    return (
        <div className="bg-white">
            <a href={link} target="_blank" className="duration-200 hover:-translate-y-2">
                <div
                    cust-records="fadeInUp"
                    className="flex h-full flex-col justify-between rounded shadow-md hover:shadow-2xl revealCardsOnScroll cust-animate fadeInUp">
                    <div>
                        <picture>
                            <source srcSet={image + "?w=300&fm=webp"}></source>

                            <img
                                src={image + "?w=300&fm=webp"}
                                alt={title}
                                role="presentation"
                                className="object-cover object-top h-44 lg:h-60 w-full"
                            />
                        </picture>
                    </div>

                    <div className="flex h-full flex-col justify-between p-5 md:p-7 lg:p-8">
                        <div>
                            <div className="mb-3">
                                <p
                                    tag="p"
                                    className="text-blue-900 font-sora font-semibold tracking-wide uppercase text-xxs lg:text-xs lg:font-normal 3xl:text-sm 3xl:font-medium">
                                    {heading}
                                </p>
                            </div>

                            <div className="mb-4 sm:mb-2 md:mb-1.5 lg:mb-2 4xl:mb-3.5">
                                <div>
                                    <h3
                                        tag="h3"
                                        variant="heading-3xl"
                                        className="text-variant text-balance text-blue-900 font-sora font-semibold tracking-tighter text-lg 2xl:text-xl 3xl:text-3xl 2xl:leading-28 3xl:leading-36">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-4 sm:mt-8 md:mt-7 lg:mt-8 3xl:mt-8 max-h-20 max-w-[220px]">
                            <div>
                                <div className="cb-storybook-img__typeform--regular--left">
                                    <svg className="parent" width="100%" height="100%" viewBox="0 0 248 80" fill="none">
                                        <svg
                                            className="svgPosition"
                                            preserveAspectRatio="xMinYMin"
                                            width="100%"
                                            height="100%"
                                            viewBox="0 0 178 80"
                                            fill="none">
                                            <path
                                                d="M114.739 47.6078C111.067 47.6078 109.181 44.5844 109.181 40.8708C109.181 37.1574 111.033 34.2982 114.739 34.2982C118.51 34.2982 120.297 37.2888 120.297 40.8708C120.264 44.6501 118.378 47.6078 114.739 47.6078ZM78.8106 34.2982C80.9605 34.2982 81.854 35.5471 81.854 36.6315C81.854 39.2606 79.1742 40.4108 73.5834 40.5751C73.5834 37.3217 75.436 34.2982 78.8106 34.2982ZM54.9904 47.6078C51.5167 47.6078 50.061 44.7816 50.061 40.8708C50.061 36.9931 51.5497 34.2982 54.9904 34.2982C58.4972 34.2982 60.1515 37.0916 60.1515 40.8708C60.1515 44.8144 58.4311 47.6078 54.9904 47.6078ZM25.6125 30.4533H20.1868L29.1855 51.0913C27.4652 54.9034 26.5388 55.8564 25.3478 55.8564C24.0907 55.8564 22.8997 54.8377 22.0395 53.9504L19.6575 57.1053C21.2786 58.8141 23.4952 59.8 25.7779 59.8C28.6231 59.8 30.8066 58.1568 32.0637 55.1992L42.4519 30.4204H37.1255L31.6999 45.2088L25.6125 30.4533ZM169.326 34.2982C171.973 34.2982 172.502 36.1057 172.502 40.3451V51.4857H177.2V37.4202C177.2 32.3594 173.726 30.1575 170.517 30.1575C167.672 30.1575 165.059 31.9321 163.603 35.2184C162.776 32.0636 160.129 30.1575 157.052 30.1575C154.372 30.1575 151.693 31.8664 150.237 35.0541V30.4533H145.539V51.4527H150.237V42.4812C150.237 37.9461 152.619 34.2982 155.861 34.2982C158.508 34.2982 159.004 36.1057 159.004 40.3451V51.4857H163.702L163.669 42.4812C163.669 37.9461 166.084 34.2982 169.326 34.2982ZM134.158 30.4533H129.461V51.4527H134.158V43.4013C134.158 38.3076 136.408 34.8569 139.75 34.8569C140.61 34.8569 141.338 34.8898 142.132 35.2184L142.86 30.2561C142.264 30.1904 141.735 30.1246 141.205 30.1246C137.897 30.1246 135.515 32.3922 134.125 35.317V30.4533H134.158ZM114.739 30.1246C108.519 30.1246 104.317 34.8569 104.317 40.838C104.317 47.0492 108.585 51.6828 114.739 51.6828C120.992 51.6828 125.259 46.9177 125.259 40.838C125.226 34.8241 120.892 30.1246 114.739 30.1246ZM79.0748 47.6078C76.6268 47.6078 74.8074 46.359 74.0464 43.8285C80.2657 43.5657 86.3533 42.0539 86.3533 36.5658C86.3533 33.4109 83.2436 30.1575 78.7775 30.1575C72.7561 30.1575 68.6869 35.0541 68.6869 40.8708C68.6869 46.9505 72.69 51.7157 78.6781 51.7157C82.8462 51.7157 85.4929 50.0397 87.5773 47.6078L85.2949 44.5186C82.8793 46.9834 81.3911 47.6078 79.0748 47.6078ZM55.9168 30.1246C53.5348 30.1246 51.1527 31.5049 50.2265 33.6739V30.4533H45.5286V59.7014H50.2265V49.2509C51.219 50.7626 53.5017 51.7485 55.5198 51.7485C61.7725 51.7485 65.0809 47.1148 65.0809 40.8708C65.0477 34.6926 61.8056 30.1246 55.9168 30.1246ZM22.9658 22.0403H0.800049V26.6083H9.46784V51.4527H14.3972V26.6083H22.9658V22.0403ZM92.8045 30.4533H89.9922V34.6598H92.8045V51.4527H97.5025V34.6598H102.068V30.4533H97.5025V27.167C97.5025 25.0637 98.3629 24.3407 100.315 24.3407C101.042 24.3407 101.704 24.5379 102.597 24.8337L103.656 20.8901C102.796 20.3972 101.075 20.2 99.9505 20.2C95.4512 20.2 92.8045 22.8948 92.8045 27.5613V30.4533Z"
                                                fill="var(--primary-color, #131313)"></path>
                                        </svg>
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CardsLayout;
