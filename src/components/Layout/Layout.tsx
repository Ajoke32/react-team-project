import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TopicsList from "@/components/Lists/TopicsList";
import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header titles={[{title:"About as", href:"/about"},{title:"Support",href:'/support'},{title:"Quiz", href:"/quiz"}]}/>
            <main className={"min-h-screen"}>
                <Outlet/>
            </main>
            <Footer> </Footer>
        </>
    )
}

export default Layout