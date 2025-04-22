import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineExport } from "react-icons/ai";
import { LuGithub } from "react-icons/lu";


export default function Home() {
  return (
    <>
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div className=" lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Sabrina Shafer</h1>
          <h3 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Coding Student</h3>
          <p className="mt-4 max-w-xs leading-normal">I’m a West-MEC and high school graduate currently pursuing a degree in Computer science.</p>
          <ul className="mt-16 w-max">
            <li>
              <a className= "group flex items-center py-3 active" href="#">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> About </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#languages">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Languages </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Experience </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Projects </span>
              </a>
            </li>
          </ul>
        </div>
        
        <div className= "pt-24 lg:w-[52%] lg:py-24">
          <section className="mb-16">
            <p className="mb-4">I'm a motivated and detail-oriented student with a strong academic background, maintaining an A average across all subjects. I thrive in leadership roles, having taken on responsibilities through school athletics and West-MEC activities, where I’ve developed teamwork, communication, and organizational skills.</p>
            <p className="mb-4">My passion lies in computer science and web development, where I enjoy blending logical problem-solving with thoughtful design. I’ve built a solid foundation in UX principles and front-end technologies including JavaScript, CSS, HTML, Python, React.js, and MongoDB, and I’m always eager to expand that knowledge.</p>
            <p className="mb-4">I’m currently exploring opportunities to apply what I’ve learned in the classroom to real-world challenges. Whether I’m managing projects or diving into code, I take pride in delivering high-quality work and approaching each task with curiosity, efficiency, and a willingness to learn.</p>
            <p className="mb-4">Outside of academics, I’m constantly learning—whether that’s picking up new coding concepts, collaborating on group projects, or exploring creative problem-solving techniques. I'm passionate about continued growth and excited to contribute to environments where I can learn, build, and make a meaningful impact.</p>
          </section>

          <section id="languages" className="mb-32">
            <div className="m-3 mb-20">
              <ul className="space-y-4">
                {[
                  { lang: "English", percent: 100, flag: "/images/english-flag.png" },
                  { lang: "German", percent: 95, flag: "/images/german-flag.png" },
                  { lang: "Japanese", percent: 15, flag: "/images/japan-flag.png" },
                  { lang: "Spanish", percent: 5, flag: "/images/spanish-flag.png" },
                ].map(({ lang, percent, flag }) => (
                  <li key={lang} className="flex items-center space-x-4">
                    {/* Flag on the left */}
                    <img src={flag} alt={`${lang} flag`} width={45} height={35} />

                    {/* Text and progress stack */}
                    <div className="flex-1">
                      {/* Title row */}
                      <div className="flex justify-between items-center">
                        <h1 className="text-lg font-semibold">{lang}</h1>
                        <span className="text-sm font-medium">{percent}%</span>
                      </div>

                      {/* Progress bar */}
                      <progress
                        className="progress progress-info w-full h-3"
                        value={percent}
                        max="100"
                      ></progress>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-3">
            <ul className="space-y-4">
                {[
                  { lang: "HTML", percent: 100, flag: "/images/html.png" },
                  { lang: "CSS", percent: 95, flag: "/images/css.png" },
                  { lang: "JavaScript", percent: 15, flag: "/images/javascript.png" },
                  { lang: "Tailwind", percent: 5, flag: "/images/tailwind.png" },
                  { lang: "React.js", percent: 5, flag: "/images/react.png" },
                  { lang: "Next.js", percent: 5, flag: "/images/next.png" },
                  { lang: "Node.js", percent: 5, flag: "/images/node.png" },
                  { lang: "TypeScript", percent: 5, flag: "/images/typescript.png" },
                  { lang: "MongoDB", percent: 5, flag: "/images/mongodb.png" },
                ].map(({ lang, percent, flag }) => (
                  <li key={lang} className="flex items-center space-x-4">
                    {/* icon on the left */}
                    <img src={flag} alt={`${lang} flag`} width={40} height={30} />

                    {/* Text and progress stack */}
                    <div className="flex-1">
                      {/* Title row */}
                      <div className="flex justify-between items-center">
                        <h1 className="text-lg font-semibold">{lang}</h1>
                        <span className="text-sm font-medium">{percent}%</span>
                      </div>

                      {/* Progress bar */}
                      <progress
                        className="progress progress-info w-full h-3"
                        value={percent}
                        max="100"
                      ></progress>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>



          <section id="experience">
            <div>
              <ol>
                <li className="mb-11">
                  <div className="flex flex-row gap-x-6">
                    <header>2025</header>
                    <div>
                      <h3>Texas Roadhouse</h3>
                      <p>As a hostess at Texas Roadhouse, I developed strong customer service skills, efficiently managing guest call aheads and ensuring a positive dining experience. I also honed my ability to multitask in a fast-paced environment while maintaining professionalism and a welcoming atmosphere.</p>
                      <ul className="mt-2 flex flex-wrap">

                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Multi-tasking</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Communication</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Customer Service</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-11">
                  <div className="flex flex-row gap-x-6">
                    <header>2025</header>
                    <div>
                      <h3>Texas Roadhouse</h3>
                      <p>As a hostess at Texas Roadhouse, I developed strong customer service skills, efficiently managing guest call aheads and ensuring a positive dining experience. I also honed my ability to multitask in a fast-paced environment while maintaining professionalism and a welcoming atmosphere.</p>
                      <ul className="mt-2 flex flex-wrap">

                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Multi-tasking</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Communication</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Customer Service</div></li>
                      </ul>
                    </div>
                  </div>
                </li>


                <li className="mb-11">
                  <div className="flex flex-row gap-x-6">
                    <header>2025</header>
                    <div>
                      <h3>Texas Roadhouse</h3>
                      <p>As a hostess at Texas Roadhouse, I developed strong customer service skills, efficiently managing guest call aheads and ensuring a positive dining experience. I also honed my ability to multitask in a fast-paced environment while maintaining professionalism and a welcoming atmosphere.</p>
                      <ul className="mt-2 flex flex-wrap">

                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Multi-tasking</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Communication</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Customer Service</div></li>
                      </ul>
                    </div>
                  </div>
                </li>


                <li className="mb-11">
                  <div className="flex flex-row gap-x-6">
                    <header>2025</header>
                    <div>
                      <h3>Texas Roadhouse</h3>
                      <p>As a hostess at Texas Roadhouse, I developed strong customer service skills, efficiently managing guest call aheads and ensuring a positive dining experience. I also honed my ability to multitask in a fast-paced environment while maintaining professionalism and a welcoming atmosphere.</p>
                      <ul className="mt-2 flex flex-wrap">

                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Multi-tasking</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Communication</div></li>
                        <li className="mr-2 mt-2"><div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ">Customer Service</div></li>
                      </ul>

                    
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <a href="/files/resume.png" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            <div className="flex items-center space-x-2">
                <h1 className="text-base font-medium">View Full Resume</h1>
                <MdArrowOutward className="w-5 h-5" />
            </div>
            </a>


          </section>
        </div>
      </div>
    </div>


        <h1 className="text-5xl  text-center mx-auto my-24 ">---- PROJECTS ----</h1>


    <section id="projects" className="flex flex-col mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0  ">



    <div className="flex items-center mb-24">
    <img src="/images/FBLA.png" alt={`image`} width={650} height={35} />

      <div className="justify-items-end align-center space-y-2">
        <h3>Student Project</h3>
        <h1 className="text-2xl">FBLA CODING & PROGRAMMING</h1>
        <p className='bg-grey2 text-white text-lg z-10 p-8 -ml-28 text-right'>A web app for competing in FBLA State 2024. View your finances with budgets, graphs, savings, and goals. This is a financing web application to help college students get in control of their debts and spending habits.</p>
        <ul className="flex felx-row space-x-6">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Tailwind</li>
        </ul>
        <div className="flex flex-row space-x-4"><LuGithub /><AiOutlineExport /></div>
      </div>
    </div>


    <div className="flex items-center mb-24">

      <div className="justify-items-start align-center space-y-2">
        <h3>Work based Learning Project</h3>
        <h1 className="text-2xl" >BOY SCOUT TROOP 747</h1>
        <p className='bg-grey2 text-white text-lg z-10 p-8 -mr-28 text-left'>A web app remake for a boy scout troop. Revamping the entirety of the website and allowing for easy user navigation. </p>
        <ul className="flex felx-row space-x-6">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Tailwind</li>
        </ul>
        <div className="flex flex-row space-x-4"><LuGithub /><AiOutlineExport /></div>
      </div>

      <img src="/images/FBLA.png" alt={`image`} width={650} height={35} className=" -z-10"/>

    </div>


    <div className="flex items-center mb-24">
    <img src="/images/pet.png" alt={`image`} width={650} height={35} />

      <div className="justify-items-end align-center space-y-2">
        <h3>Student Project</h3>
        <h1 className="text-2xl">PET ADOPTION WEBSITE</h1>
        <p className='bg-grey2 text-white text-lg z-10 p-8 -ml-28 text-right'>A web app for viewing and adopting pets. You can submit and add pets to the adoption list. When searching for pets you can use a search bar to filter though all pets.</p>
        <ul className="flex felx-row space-x-6">
          <li>EJSs</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <div className="flex flex-row space-x-4"><LuGithub /><AiOutlineExport /></div>
      </div>
    </div>


    <div className="flex items-center mb-24">

      <div className="justify-items-start align-center space-y-2">
        <h3>Student Project</h3>
        <h1 className="text-2xl" >CIPHER PROJECT</h1>
        <p className='bg-grey2 text-white text-lg z-10 p-8 -mr-28 text-left'>The Cipher Game is a word puzzle game where players solve scrambled words using a transposition cipher. The game features different levels with varying grid sizes and difficulty. Players can also track their progress, earn scores, and challenge themselves to complete the game in less time.</p>
        <ul className="flex felx-row space-x-6">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div className="flex flex-row space-x-4"><LuGithub /><AiOutlineExport /></div>
      </div>

      <img src="/images/Cipher.png" alt={`image`} width={650} height={35} className=""/>
      

    </div>

    <div className="flex justify-center">
      <button className="group relative inline-flex h-12 items-center my-8 justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-3 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] w-auto">
        Extra Projects
      </button>
    </div>


    </section>

    <h1 className="text-5xl  text-center mx-auto my-24 ">---- CONTACT ME ----</h1>

    <section id="contact" className="backdrop-opacity-20 bg-grey flex flex-col mx-auto min-h-20 my-20 max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div>

        </div>
    </section>

    </>
  );
}
