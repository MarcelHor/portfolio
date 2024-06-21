const projects = [
    {
        title: 'Siprec',
        description: 'This is a project description',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Neznamy-vlastnik.cz',
        description: 'This is a project description',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Tritio Telekonference',
        description: 'This is a project description',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Mapa kriminality Liberec',
        description: 'This is a project description',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Inteligentní systém sledování rostlin',
        description: 'This is a project description',
        image: 'https://via.placeholder.com/150',
    }
];

export default function Projects() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 border-2 border-black">
                        <img src={project.image} alt={project.title}/>
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}