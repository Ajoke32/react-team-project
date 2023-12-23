import React from 'react';
import {HeaderTitle} from "@/types/headerTypes";
import {Link} from "react-router-dom";


interface HeaderProps{
    titles:HeaderTitle[]
}

const Header = ({titles}:HeaderProps) => {
    return (
        <header className="bg-slate-800 text-white p-2 flex gap-5 items-center">

            <a href="/" className="flex items-center gap-2">
                <img style={{width:"50px",height:"50px"}} src="/images/logo.png" alt=""/>
            </a>

            {titles.map(t=>{
                return <Link to={t.href}>
                    {t.title}
                </Link>
            })}

        </header>
    );
};

export default Header;
