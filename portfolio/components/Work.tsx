import React from "react";

const WorkContent = [
    {
        year: "2024 – PRESENT",
        position: "Freelancer",
        company: "Self-employed",
        details: "Working remotely on various projects."
    },
    {
        year: "2023 – 2024",
        position: "Web Developer",
        company: "TriInfo s.r.o.",
        details: "Developing and maintaining websites. Migrating from Vue 2 to Vue 3."
    },
    {
        year: "2017 – 2020",
        position: "Researcher",
        company: "Valeo",
        details: "Contributed to the development of autonomous vehicles. Worked with internal programs, data analysis, and teamwork."
    }
];

export default function Work() {
    return (
        <section>
            <h2 className="md:text-5xl text-4xl uppercase font-bold mb-12 text-primary">Work Experience</h2>
            <div className="space-y-16">
                {WorkContent.map((work, index) => (
                    <WorkItem key={index} {...work} />
                ))}
            </div>
        </section>
    );
}

function WorkItem({year, position, company, details}: {
    year: string
    position: string,
    company: string,
    details: string
}) {
    return (
        <div className="flex flex-col border-l-4 border-white border-opacity-5 pl-4 transform transition-transform duration-300 hover:scale-105">
                <p className="text-xl text-secondary font-bold">{year}</p>
                <p className="text-xl font-bold">{company} - {position}</p>
                <p></p>
                <p className="text-lg text-gray-400">{details}</p>
        </div>
    );
}