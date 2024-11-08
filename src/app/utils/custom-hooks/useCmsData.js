import { createClient } from "contentful";

export const SPACE_ID = "a7hvy8sclsq6";

export const ACCESS_TOKEN = "U-NzRsrBNstwLZ9uYBEZcINmitwfL8sAMNkPnJFx0No";

export const DEFAULT_TYPE = "commonLayout";

export const DEFAULT_LOCALE = "en-US";

const useCmsDatas = async (locale = DEFAULT_LOCALE, contentType = DEFAULT_TYPE, slug = "") => {
    const BASE_API = `https://cdn.contentful.com/spaces/a7hvy8sclsq6/entries?content_type=${contentType}&access_token=${ACCESS_TOKEN}&fields.slug=${slug}&locale=${locale}&include=2`;

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    try {
        const request = await fetch(BASE_API, { headers });

        if (request.status === 200 && request.ok) {
            const response = await request.json();

            return response;
        } else {
            throw new Error(request.status);
        }
    } catch (err) {
        console.error(err);
    }
};

const useCmsData = async (locale = DEFAULT_LOCALE, contentType = DEFAULT_TYPE, slug = "") => {
    let request = createClient({
        space: SPACE_ID,
        accessToken: ACCESS_TOKEN,
    });

    const response = await request
        .getEntries({
            content_type: contentType,
            locale: locale,
            include: 10,
        })

        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error(error);
        });

    return response;
};

export default useCmsData;
