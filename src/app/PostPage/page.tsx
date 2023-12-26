import RootLayout from "@/app/layout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Posts from "@/components/Posts/Posts";
import React from "react";


export default function PostPage() {
    return (
        <RootLayout>
            <Header titles={[{title:"About as",href:"/About"},{title:"Support",href:'/Support'},{title:"Post",href:'/PostPage'}]}/>
            <Posts/>
            <Footer info={[{text:"About as",href:"/About"},{text:"Post",href:"/PostPage"}]}
                    net={[{net:"Facebook",href:"/Facebook"},{net:"Twitter",href:"/Twitter"},{net:"Instagram",href:"/Instagram"}]}/>
        </RootLayout>
    )
}