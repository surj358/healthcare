import { Header } from "../components/header";
import { Special } from "../components/special";
import { Story } from "../components/story";
import { Services } from "../components/services";
import { ChooseUs } from "../components/chooseus";
import { Specialist } from "../components/specialist";
import { About } from "./About";
import { Footer } from "../components/footer";
import { useState } from "react";

export function Home() {
    return (
        <div>
           
            <Header />
            <Special />
            <Story />
            <Services />
            <ChooseUs />
            <Specialist />
            <Footer />
        </div>
    )
}