/* layout - solutions pages */

export const metadata = {
    title: "Server Title",
    description: "Server Description",
    openGraph: {
        type: "profile",
        firstName: "Hari",
        lastName: "Sridhar",
    },
    robots: {
        index: false,
    },
};

const SolutionsLayout = ({ children }) => {
    return (
        <div>
            {/* <h1>solutions pages layout</h1> */}

            {children}
        </div>
    );
};

export default SolutionsLayout;
