import FadeIn from "@/components/FadeIn";

export default function About() {
    return (
        <section className="flex flex-col">
            <FadeIn as={"h2"} className="md:text-5xl text-4xl mb-8 font-bold uppercase">
                Learn About <span className="text-primary drop-shadow-xl">My journey</span>
            </FadeIn>

            <FadeIn className={"space-y-4"} delay={0.1}>
                <p>
                    Hi, my name is Marcel Horváth. I am from the Czech Republic, specifically from the city of Ústí
                    nad Labem.
                </p>
                <p>
                    My journey in programming began in high school, where I developed an interest in programming and
                    creating websites. Now, I am studying at the Technical University of Liberec, where I am fully
                    dedicated to this field.
                </p>
                <p>
                    Programming is not only a job for me but also a hobby. I love creating websites and applications
                    the most, but I can do much more and I am able to learn new things quickly.
                </p></FadeIn>
        </section>
    );
}
