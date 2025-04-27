import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import Project from "../components/Project"


const extraProjects = () => {
    return (
        <>
            <a href="/">
            <button><IoArrowBackOutline className='text-white w-12 h-10 m-4 '/></button>
            </a>

            <div className="mx-auto max-w-screen-xl">
                <h1 className="text-white text-6xl font-extrabold text-center tracking-widest drop-shadow-lg mb-14">
                    Extra Projects
                </h1>

                <Project />
            </div>

        </>
    )
}

export default extraProjects