"use client";

const useDataFilter = (data) => {
    let dataSet = {};

    for (let i = 0; i < data.length; i++) {
        let obj = data[i];

        let keys = Object.keys(obj);

        for (let j = 0; j < keys.length; j++) {
            let prefix = keys[j].match(/^[a-zA-Z]+/)[0];

            dataSet[prefix] = dataSet[prefix] || [];

            dataSet[prefix].push(obj[keys[j]]);
        }
    }

    return dataSet;
};

export default useDataFilter;
