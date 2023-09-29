import React from "react";
import Header from "@/components/Header/Header";
import TopicsList from "@/components/Lists/TopicsList";
import RootLayout from "@/app/layout";


export default function Home() {
    return (
        <RootLayout>
            <Header titles={[{title:"About as",href:"/about"},{title:"Support",href:'/support'}]}/>
            <TopicsList/>
        </RootLayout>
    )
}
