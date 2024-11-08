/* layout - customer pages */

export const metadata = {
    title: "Customer Title",
    description: "Customer Description",
    openGraph: {
        type: "profile",
        firstName: "Hari",
        lastName: "Sridhar",
    },
    robots: {
        index: false,
    },
};

const CustomersLayout = ({ children }) => {
    return (
        <div>
            {/* <h1>solutions pages layout</h1> */}

            {children}
        </div>
    );
};

export default CustomersLayout;
