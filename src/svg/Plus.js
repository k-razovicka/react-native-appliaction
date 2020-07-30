import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest()
{    
    const plus = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z" fill="#ABB4BD"/>
    </svg>
    `
    
    const PlusSVG = () => <SvgXml xml={plus} />

    return <PlusSVG />;
}
