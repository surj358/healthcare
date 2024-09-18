import { useState } from "react";
import { Header } from "../components/header";
import { Special } from "../components/special";
import { Story } from "../components/story";
import { Services } from "../components/services";
import { ChooseUs } from "../components/chooseus";
import { Specialist } from "../components/specialist";
import { About } from "./About";
import { Footer } from "../components/footer";

export function Home() {
    return (
        <div className="border-2 border-red-500 w-full">
           
            <Header />
            <Special />
            <Story />
            <Services />
            <ChooseUs />
            <Specialist />
            <About />
            <Footer />
        </div>
    )
}