import Heading from "./components/TopNavbar/Heading";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import TabDisplay from "./components/TopNavbar/TabDisplay";
import Footer from "./components/TopNavbar/Footer";
import { getUrl } from './utils';
import React, { lazy, Suspense } from "react";

const Screen = () => {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <main className="scroll-smooth min-h-screen subpixel-antialiased align-middle whitespace-normal">
                    <TopNavbar />
                    <Heading />
                    <img
                        className='w-80 shadow-lg rounded-lg my-4 mx-auto'
                        src={getUrl("KADSS PLANE.jpg")}
                        alt="KADSS RC Plane Image"
                    />
                    <TabDisplay />
                    <Footer />
                </main>
            </React.Suspense>
        </div>
    )
}

export default Screen;
