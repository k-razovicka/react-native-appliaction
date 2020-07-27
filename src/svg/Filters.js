import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest()
{    
    const filters = `<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M7 18H11V16H7V18ZM0 6V8H18V6H0ZM3 13H15V11H3V13Z" fill="#F7F7F7"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="24" height="24" fill="white" transform="translate(-2)"/>
    </clipPath>
    </defs>
    </svg>
    `
    
    const FiltersSVG = () => <SvgXml xml={filters} />

    return <FiltersSVG />;
}