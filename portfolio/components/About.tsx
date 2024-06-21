import React from 'react';

function About() {
    return (
        <section className="w-2/3 flex flex-col mx-auto space-y-4">
            <h2 className="xl:text-5xl text-3xl font-bold uppercase">
                Learn About <span className="text-primary drop-shadow-xl">My journey</span>
            </h2>

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
            </p>
        </section>
    );
}

export default About;
