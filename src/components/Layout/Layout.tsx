'use client';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header titles={[{title:"About as",href:"/About"},{title:"Support",href:'/Support'},{title:"Post",href:'/PostPage'}]}/>
                <main className={"min-h-screen"}>
                    <Outlet/>
                </main>
            <Footer info={[{text:"About as",href:"/About"},{text:"Post",href:"/PostPage"}]}
                    net={[{net:"Facebook",href:"/Facebook"},{net:"Twitter",href:"/Twitter"},{net:"Instagram",href:"/Instagram"}]}></Footer>
        </>
    )
}

export default Layout