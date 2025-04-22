import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

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
              <a className= "group flex items-center py-3 active" href="#">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Languages </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Experience </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#">
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

          <section className="mb-32">
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



          <section>
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

    <section className="flex flex-col justify-center">
      <div>
        project 1
      </div>

      <div>
        project 2
      </div>

      <div>
        project 3
      </div>

      <div>
        project 4
      </div>
    </section>
    </>
  );
}
