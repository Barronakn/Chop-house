import React from "react";
import { Head as SeoHead, usePage } from "@inertiajs/react";
import Favicon from "@/../images/favicon.png";

const Head = ({ children, title, description = "", keywords = "" }) => {
    const { url } = usePage();
    const { app } = usePage().props;

    return (
        <SeoHead>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" type="image/x-icon" href={Favicon} />

            <meta name="name" content={title} />
            <meta name="image" content={Favicon} />

            {/* Twitter Card data */}
            <meta name="twitter:card" content={app.name} />
            <meta name="twitter:site" content={app.name} />
            <meta name="twitter:creator" content={app.name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:src" content={Favicon} />

            {/* Open Graph data */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={app.url + url} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={app.name} />
            <meta property="og:image" content={Favicon} />

            {children}
        </SeoHead>
    );
};

export default Head;
