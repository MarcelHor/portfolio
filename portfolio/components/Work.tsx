import React from "react";

const WorkContent = [
    {
        year: ["2024", "PRESENT"],
        position: "Freelancer",
        company: "Self-employed",
        details: "Working remotely on various projects."
    },
    {
        year: ["2023", "2024"],
        position: "Web Developer",
        company: "TriInfo s.r.o.",
        details: "Developing and maintaining websites. Migrating from Vue 2 to Vue 3. Skills used: React, Wordpress, Node.js."
    },
    {
        year: ["2017", "2020"],
        position: "Researcher",
        company: "Valeo",
        details: "Contributed to the development of autonomous vehicles. Worked with internal programs, data analysis, and teamwork."
    }
];

export default function Work() {
    return (
        <section className="w-2/3 my-32">
            <h2 className="text-5xl uppercase font-bold mb-12 text-primary">Work Experience</h2>
            <div className="space-y-16">
                {WorkContent.map((work, index) => (
                    <WorkItem key={index} {...work} />
                ))}
            </div>
        </section>
    );
}

function WorkItem({year, position, company, details}: {
    year: string[]
    position: string,
    company: string,
    details: string
}) {
    return (
        <div className="flex flex-row items-center space-x-8 border-l-4 border-white border-opacity-5 pl-4">
            <p className="w-1/6 text-3xl font-semibold text-secondary">{year[1]}<br/>{year[0]}</p>
            <div className="flex flex-col">
                <p className="text-2xl font-semibold">{position}</p>
                <p className="text-gray-600">{company}</p>
                <p className="text-gray-400">{details}</p>
            </div>
        </div>
    );
}
