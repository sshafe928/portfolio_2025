import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Project from "../components/project"


const extraProjects = () => {
    return (
        <>
            <a href="/">
            <button><IoArrowBackOutline className='text-white w-12 h-10 m-4 '/></button>
            </a>

            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center tracking-widest drop-shadow-lg mb-14">
                    Extra Projects
                </h1>

                <Project />
            </div>


        </>
    )
}

export default extraProjects