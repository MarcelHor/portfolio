import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <LandingPage/>
            <Services/>
            <Technologies/>
            <WhyUs/>
            <Projects/>
        </>
    );
}
