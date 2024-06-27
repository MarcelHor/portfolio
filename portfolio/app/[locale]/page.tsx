import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Contact from "@/components/Contact";


export default function Home() {
    return (
        <>
            <LandingPage/>
            <div className="w-full xl:max-w-7xl p-4 space-y-64 my-64">
                <Services/>
                <About/>
                <Work/>
                <Education/>
                <Technologies/>
                <Projects/>
                <Contact/>
            </div>
        </>
    );
}
