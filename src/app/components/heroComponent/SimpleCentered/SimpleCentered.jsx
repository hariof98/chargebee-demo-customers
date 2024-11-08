"use client";

import useDataFilter from "../../../utils/custom-hooks/useDataFilter";
import PostLayout from "../../../layouts/HeroComponentLayout/PostLayout";
import "../heroComponentsStyle.css";

const SimpleCentered = ({ allData }) => {
    const filteredData = useDataFilter(allData);
    console.log(filteredData);

    return (
        <div>
            <PostLayout
                type={"centered"}
                label={filteredData?.label}
                title={filteredData?.title}
                description={filteredData?.description}
                list={filteredData?.list}
                media={filteredData?.media[0].sys.id}
                hari={filteredData?.hari}
                theme={filteredData?.variant}
                button={[filteredData?.primaryCta, filteredData?.secondaryCta]}
            />
        </div>
    );
};

export default SimpleCentered;
