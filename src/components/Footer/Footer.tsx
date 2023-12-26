import React from 'react';
import {FooterInfo, SocialNetworks} from "@/types/footerTypes";
import {Link} from "react-router-dom";

interface FooterProps{
    info:FooterInfo[];
    net:SocialNetworks[]
}

const Footer = ({info,net}:FooterProps) => {

    return (
        <footer className="flex justify-between bg-slate-800 text-white p-2">
            <div className="flex gap-4 items-start">
                {info.map(t=>{
                    return <Link to={t.href}>
                        {t.text}
                    </Link>
                })}
            </div>
            <div className="flex gap-4 items-end">
                {net.map(t=>{
                    return <Link to={t.href}>
                        {t.net}
                    </Link>
                })}
            </div>
        </footer>
    );
};

export default Footer;

