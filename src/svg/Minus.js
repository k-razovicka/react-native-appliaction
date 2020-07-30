
import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest()
{    
    const minus = `<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="14" height="2" fill="#ABB4BD"/>
    </svg>
    `
    
    const MinusSVG = () => <SvgXml xml={minus} />

    return <MinusSVG />;
}