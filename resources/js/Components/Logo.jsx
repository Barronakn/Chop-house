import { Link } from "@inertiajs/react";
import React from "react";

const Logo = () => {
    return (
        <div className="text-orange-550 text-xl md:text-2xl font-bold uppercase">
            <Link href="/home">Chop House</Link>
        </div>
    );
};

export default Logo;
