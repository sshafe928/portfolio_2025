import React from 'react'
import { LuGithub } from "react-icons/lu";
import { LuFolderCode } from "react-icons/lu";

const Project = () =>{
    let projects = [
        {
            id: 1,
            name: "Quiz Application",
            langs: ["React", "Tailwind CSS"],
            desc: "This was my first time using React useState hooks. I built a quiz interface and styled it using Tailwind CSS.",
            gitLink: "https://github.com/sshafe928/quiz_application",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745780827/Screenshot_2025-04-25_195151_n3rmij.png",
            date: "2024"
        },
        {
            id: 2,
            name: "RESTful API",
            langs: ["Node.js", "EJS", "JSON"],
            desc: "This was my first time creating a RESTful API. I used EJS for rendering views and JSON files for data management.",
            gitLink: "https://github.com/sshafe928/RESTful-API",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745780827/Screenshot_2025-04-25_210032_afnatu.png",
            date: "2024"
        },
        {
            id: 3,
            name: "Petals and Pastels",
            langs: ["HTML", "CSS"],
            desc: "This was my very first website built after learning HTML and CSS. It helped me understand the basics of web structure and design.",
            gitLink: "https://github.com/sshafe928/Petals-Pastels",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745780827/Screenshot_2025-04-25_232140_t6nghf.png",
            date: "2023"
        },
        {
            id: 4,
            name: "Shutterscope Studios",
            langs: ["HTML", "SCSS", "CSS", "JavaScript"],
            desc: "This was my first-year capstone project, built with two classmates. We used SCSS for styling and added interactivity with JavaScript.",
            gitLink: "https://github.com/sshafe928/Shutterscope",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745780827/Screenshot_2025-04-25_232515_kgnfhl.png",
            date: "2024"
        },
        {  
            id:5,
            name: "Pokemon Api App",
            langs: ["Next.js", "Tailwind", "API fetching"],
            desc:"This was the first project where I combined API fetching and Next. Its also the first website were I used Next on my own.",
            gitLink: "https://github.com/sshafe928/next_pokemon_apphttps://github.com/sshafe928/pokemon-app",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745781349/Screenshot_2025-04-27_121524_avnlea.png",
            date: "2025"
        },
        {
            id:6,
            name: "Blog App",
            langs: ["React.js", "Tailwind"],
            desc:"This was the first project where I used React.js, and my first time using Tailwind to style. I collaborated with a classmate on this blog project.",
            gitLink: "https://github.com/sshafe928/react_blog",
            img: "https://res.cloudinary.com/dafmz44zh/image/upload/v1745780852/Screenshot_2_od67a4.png",
            date: "2024"
        },
        {
            id: 7,
            name: "File Manipulation",
            langs: ["Python"],
            desc: "This was where I used python and began learning file manipulation",
            gitLink: "https://github.com/sshafe928/File-Manipulation/blob/main/manipulation%20assign/manipulator.py",
            img: "",
            date: "2025"
        },
        {
            id: 8,
            name: "Binary Conversion",
            langs: ["Python"],
            desc: "This was where I used python and created a decimal to binary converter.",
            gitLink: "https://github.com/sshafe928/Python_Conversion_project",
            img: "",
            date: "2023"
        }
    ]
    return (
        <>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
            {projects.map((project) => (
                <div key={project.id} className="group bg-grey/10 px-7 py-8 rounded-md w-full sm:w-[22rem] flex flex-col justify-between min-h-[300px] transition-all duration-300 ease-in-out hover:-translate-y-2 ">
                {/* Top Section */}
                <div>
                    <div className="flex items-center mb-4">
                    <LuFolderCode className="text-blue text-5xl" />
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="ml-auto">
                        <LuGithub className="text-white group-hover:text-blue  transition-colors duration-300 text-xl" />
                    </a>
                    </div>

                    <div className="text-left">
                    <h2 className="text-white text-lg font-bold group-hover:text-blue transition-colors duration-300">
                        {project.name}
                    </h2>
                    <p className="text-grey/50 text-sm mt-2">{project.desc}</p>
                    </div>
                </div>

                {/* Bottom Language Tags */}
                <ul className="mt-6 flex flex-wrap justify-center gap-2">
                    {project.langs.map((lang, index) => (
                    <li key={index} className="font-plexMono bg-blue/10 text-blue text-xs px-2 py-1 rounded-full" >
                        {lang}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>


        </>
    )
}

export default Project