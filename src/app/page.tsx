"use client"
import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Layout from "@/components/Layout/Layout";
import Homepage from "@/components/Homepage/Homepage";
import Quiz from "@/components/Quiz/Quiz";
import AboutUs from "@/components/AboutUs/AboutUs";
import Support from "@/components/Support/Support";
import {ThemeProvider} from "@emotion/react";

const visionTheme = {
    color:{
        forUsualHuman:"black",
        forDaltonik:"blue"
    },
    background:{
        forUsualHuman:"white",
        forDaltonik:"red"
    }
}

export default function Home() {
    return (
            <>
                <ThemeProvider theme={visionTheme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<Layout/>}>
                                <Route index element={<Homepage />}/>
                                <Route path={"/about"} element={<AboutUs/>}/>
                                <Route path={"/support"} element={<Support/>}/>
                                <Route path={"/quiz"} element={<Quiz topic={"firstaid"}/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </>
            )
}
