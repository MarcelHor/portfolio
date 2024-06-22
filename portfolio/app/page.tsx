import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function Home() {
    return (
        <>
            <LandingPage/>
            <div className=" max-w-7xl p-4 space-y-24 my-32">
                <Services/>
                <About/>
                <Work/>
                <Education/>
                {/*<Technologies/>*/}
                {/*<Projects/>*/}
            </div>
        </>
    );
}
