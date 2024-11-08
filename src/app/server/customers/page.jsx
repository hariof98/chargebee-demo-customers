// Customers - Server Side

import ClientComponent from "./ClientComponent";
import useCmsData from "../../utils/custom-hooks/useCmsData";

const Page = async () => {
    const cmsPageDetails = {
        locale: "en-US",
        space: "caseStudies",
    };

    const getComponents = await useCmsData(cmsPageDetails.locale, cmsPageDetails.space);
    const getCardsData = getComponents?.items;

    let category = {};

    for (let i = 0; i < getCardsData.length; i++) {
        const getProductCategory = getCardsData[i].fields.productCategory;

        category[getProductCategory] = category[getProductCategory] ? [...category[getProductCategory], getCardsData[i]] : [getCardsData[i]];

        if (getCardsData[i].fields.highlightCasestudy) {
            if (getCardsData[i].fields.highlightCasestudy.includes("Featured story")) {
                category.featured = category.featured ? [...category.featured, getCardsData[i]] : [getCardsData[i]];
            }
        }
    }

    console.log(category);

    return (
        <div>
            {/* passing category to the client-side component */}
            <ClientComponent initialCategory={category} />
        </div>
    );
};

export default Page;
