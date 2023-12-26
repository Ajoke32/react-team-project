'use client';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import Homepage from "@/components/Homepage/Homepage";
import Posts from "@/components/Posts/Posts";

export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Homepage />}/>
                    <Route path={"/PostPage"} element={<Posts />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
