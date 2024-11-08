"use client";

const useClutteredDataFilter = (arr) => {
    const result = [];

    const recursive = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].content) {
                recursive(data[i].content);
            } else {
                if (data[i].value) {
                    result.push(data[i].value);
                }
            }
        }
    };

    recursive(arr);

    return result;
};

export default useClutteredDataFilter;
