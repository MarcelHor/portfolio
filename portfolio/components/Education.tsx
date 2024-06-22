import React from "react";

const EducationContent = [
    {
        year: "2024 – PRESENT",
        institution: "Liberec Technical University",
        details: "Master's Degree in Information Technology"
    },
    {
        year: "2021 – 2024",
        institution: "Liberec Technical University",
        details: "Bachelor's Degree in Information Technology"
    },
    {
        year: "2017 – 2021",
        institution: "Gymnázium Dr. Václava Šmejkala",
        details: "High School with focus on Programming and Mathematics"
    }
]

export default function Education() {
    return (
        <section>
            <h2 className="md:text-5xl text-4xl uppercase font-bold mb-6 text-primary">My Education</h2>
            <div className={"flex flex-col md:flex-row items-center justify-between space-x-0 space-y-8 md:space-y-8 md:space-x-8"}>
                <div className="flex flex-col md:w-1/2">
                    <div className="flex flex-col space-y-16">
                        {EducationContent.map((education, index) => (
                            <EducationItem key={index} {...education} />
                        ))}
                    </div>
                </div>
                <figure className="md:w-1/2 flex flex-col items-center">
                    <img
                        src="https://www.tul.cz/wp-content/uploads/2021/03/Sni%CC%81mek-obrazovky-2021-03-24-v-18.36.37-1024x676.png"
                        alt="University of Liberec" width="450px"
                        className="object-contain rounded shadow-md"
                    />
                    <figcaption className="mt-2 italic">University of Liberec</figcaption>
                </figure>
            </div>

        </section>
    );
}

function EducationItem({year, institution, details}: { year: string, institution: string, details: string }) {
    return (
        <div className="flex flex-col border-l-4 border-white border-opacity-5 pl-4 transform transition-transform duration-200 hover:scale-105">
            <p className="text-xl font-bold text-secondary">{year}</p>
                <p className="text-xl font-bold">{institution}</p>
                <p className="text-lg text-gray-400">{details}</p>
        </div>
    );
}
