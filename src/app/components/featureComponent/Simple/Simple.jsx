"use client";

import useDataFilter from "../../../utils/custom-hooks/useDataFilter";
import PostLayout from "../../../layouts/FeatureComponentLayout/PostLayout.jsx";

const SplitWithMedia = ({ allData }) => {
    const filteredData = useDataFilter(allData);
    console.log(filteredData);

    return (
        <div>
            <PostLayout
                type={"split"}
                title={filteredData?.title}
                heading={filteredData?.heading}
                description={filteredData?.description}
                subHeading={filteredData?.subHeading}
                list={filteredData?.list}
                theme={filteredData?.theme}
            />
        </div>
    );
};

export default SplitWithMedia;
