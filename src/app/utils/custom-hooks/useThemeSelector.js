const useThemeSelector = (data) => {
    let colorPallete = {};

    if (data === "grey-50") {
        colorPallete.background = "grey-50";
        colorPallete.label = "text-blue-900";
        colorPallete.title = "text-blue-900";
        colorPallete.description = "text-blue-800";
        colorPallete.primaryBtnColor =
            "text-white border-blue-900 bg-blue-900 group-hover:bg-lime-500 group-hover:border-lime-500 group-hover:text-blue-900";
        colorPallete.secondaryBtnColor = "text-blue-900 border-blue-900 group-hover:bg-blue-900 group-hover:text-white";
    } else if (data === "blue-900") {
        colorPallete.background = "blue-900";
        colorPallete.label = "text-white";
        colorPallete.title = "text-white";
        colorPallete.description = "text-blue-800";
    }

    return colorPallete;
};

export default useThemeSelector;
