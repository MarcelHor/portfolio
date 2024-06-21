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
            <About/>
            <Services/>
            <Education/>
            <Work/>
            <Technologies/>
            <Projects/>
            <Contact/>
        </>
    );
}
