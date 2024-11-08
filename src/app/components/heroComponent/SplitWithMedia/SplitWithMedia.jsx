"use client";

import useDataFilter from "../../../utils/custom-hooks/useDataFilter";
import PostLayout from "../../../layouts/HeroComponentLayout/PostLayout";
import "../heroComponentsStyle.css";

const SplitWithMedia = ({ allData }) => {
    const filteredData = useDataFilter(allData);

    return (
        <div>
            <PostLayout
                type={"split"}
                label={filteredData?.label}
                title={filteredData?.title}
                description={filteredData?.description}
                list={filteredData?.list}
                media={filteredData?.media[0]?.sys?.id}
                theme={filteredData?.theme}
                primaryCta={filteredData?.primaryCta}
                secondaryCta={filteredData?.secondaryCta}
            />
        </div>
    );
};

export default SplitWithMedia;
