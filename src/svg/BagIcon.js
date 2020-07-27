import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgTest()
{    
    const bag = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.4558 24.5187L26.4583 24.542L26.4629 24.565C26.4867 24.6823 26.5 24.796 26.5 24.9091C26.5 25.8094 25.8081 26.5 25 26.5H15H5C4.19186 26.5 3.5 25.8094 3.5 24.9091C3.5 24.796 3.51331 24.6823 3.53706 24.565L3.54172 24.542L3.5442 24.5187L5.4972 6.14375L5.5 6.11741V6.09091C5.5 5.19065 6.19186 4.5 7 4.5H15H23C23.8081 4.5 24.5 5.19065 24.5 6.09091V6.11741L24.5028 6.14375L26.4558 24.5187ZM20.5 10.2727V9.44368C21.1009 9.08516 21.5 8.41815 21.5 7.65909C21.5 6.53849 20.6249 5.59091 19.5 5.59091C18.3751 5.59091 17.5 6.53849 17.5 7.65909V10.2727C17.5 11.7469 16.3571 12.9091 15 12.9091C13.6429 12.9091 12.5 11.7469 12.5 10.2727V7.65909C12.5 6.53849 11.6249 5.59091 10.5 5.59091C9.37514 5.59091 8.5 6.53849 8.5 7.65909C8.5 8.41815 8.89908 9.08516 9.5 9.44368V10.2727C9.5 13.41 11.9461 16 15 16C18.0539 16 20.5 13.41 20.5 10.2727Z" stroke="#ABB4BD"/>
    </svg>
    `
    
    const BagSVG = () => <SvgXml xml={bag} />

    return <BagSVG />;
}