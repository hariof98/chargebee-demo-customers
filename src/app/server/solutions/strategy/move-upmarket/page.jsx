"use client";

import { lazy, Suspense } from "react";
import useCmsData from "../../../../utils/custom-hooks/useCmsData";

const cmsPageDetails = {
    locale: "en-US",
    space: "commonLayout",
    slug: "/solutions/strategy/move-upmarket/",
};

const Page = async () => {
    const cms = await useCmsData(cmsPageDetails.locale, cmsPageDetails.space, cmsPageDetails.slug);

    const data = {};

    for (let i = 0; i < cms.includes.Entry.length; i++) {
        const componentWithVariant = cms.includes.Entry[i].fields.variant
            ? cms.includes.Entry[i].sys.contentType.sys.id + cms.includes.Entry[i].fields.variant
            : cms.includes.Entry[i].sys.contentType.sys.id;

        data[componentWithVariant] = data[componentWithVariant]
            ? [...data[componentWithVariant], cms.includes.Entry[i].fields]
            : [cms.includes.Entry[i].fields];

        data[componentWithVariant].component = cms.includes.Entry[i].sys.contentType.sys.id;
        data[componentWithVariant].variant = cms.includes.Entry[i].fields.variant;
    }

    //console.log(data);

    const getComponents = Object.keys(data);

    return (
        <div>
            {getComponents.map((component, index) => {
                const getComponent = data[component].component;
                const getVariant = data[component].variant;

                if (component === "heroComponentSplitWithMedia" || component === "featureComponentSimple") {
                    const Component = lazy(() => {
                        return import(`../../../../components/${getComponent}/${getVariant}/${getVariant}.jsx`);
                    });

                    return (
                        <div key={index}>
                            <Suspense>
                                <Component allData={data[component]} />
                            </Suspense>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Page;
