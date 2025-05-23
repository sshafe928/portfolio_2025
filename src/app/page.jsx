
'use client'
import { MdArrowOutward } from "react-icons/md";
import { LuGithub } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  //Scroll trigger setup
  const elementRef = useRef(null);
  const scrollTriggerRef = useRef(null); 

  useGSAP(() => {
    const setupScrollTrigger = () => {

      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const width = window.innerWidth;
      if (width >= 1024) {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: elementRef.current,
          pin: elementRef.current,
          start: 'top top',
          end: '+=2800',
          scrub: true,

        });
      }
    };

    setupScrollTrigger(); 

    const handleResize = () => {
      setupScrollTrigger();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    };
  }, { scope: elementRef });

//EmailJs setup
const form = useRef();
const [success, setSuccess] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_5kn0n68', 'template_1nzoldd', form.current, {
      publicKey: '3Nv6zlnRyJ7Hzudmf',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset(); // Clears the form
        setSuccess(true);     // Triggers success message
        setTimeout(() => setSuccess(false), 5000); 
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};



  return (
    <>
    <div className="mx-auto min-h-16 max-w-screen-2xl px-4 py-2 font-sans md:px-12 md:py-16 lg:py-0">
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div ref={elementRef} className="text-white lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:py-24 px-2 md:px-6">
        
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold font-jaro tracking-wider text-center lg:text-left mt-8 lg:mt-0">SABRINA SHAFER</h1>
          <h3 className="mt-3 text-2xl font-medium font-jersey tracking-wide text-center lg:text-left">Coding Student</h3>
          <p className="mt-4 max-w-xs leading-normal text-grey/80 font-plexMono text-md text-center lg:text-left mx-auto lg:mx-0">I'm a West-MEC and high school graduate currently pursuing a degree in Computer science.</p>
          
          {/* Mobile navigation menu */}
          <div className="lg:hidden flex flex-wrap justify-center gap-4 mt-6 mb-6">
            <a href="#" className="text-md font-bold uppercase tracking-widest text-slate-400 hover:text-slate-200">About</a>
            <a href="#languages" className="text-md font-bold uppercase tracking-widest text-slate-400 hover:text-slate-200">Languages</a>
            <a href="#experience" className="text-md font-bold uppercase tracking-widest text-slate-400 hover:text-slate-200">Experience</a>
            <a href="#projects" className="text-md font-bold uppercase tracking-widest text-slate-400 hover:text-slate-200">Projects</a>
          </div>
          
          <ul className="mt-16 w-max hidden lg:block">
            <li>
              <a className= "group flex items-center py-3 active" href="#">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 font-jaro "> About </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#languages">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 font-jaro"> Languages </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#experience">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 font-jaro"> Experience </span>
              </a>
            </li>
            <li>
              <a className= "group flex items-center py-3 active" href="#projects">
                <span className=" mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
                <span className=" text-md font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 font-jaro"> Projects </span>
              </a>
            </li>
          </ul>

          <nav className="flex gap-4 justify-center lg:justify-start mt-10 lg:mt-36">
            <a href="www.linkedin.com/in/sabrina" aria-label="LinkedIn">
              <CiLinkedin className="text-white/80 hover:text-blue/70 transition-all duration-300 text-3xl hover:-translate-y-2"/>
            </a>
            <a href="https://www.credly.com/users/sabrina-shafer" aria-label="Credly">
              <SiCredly className="pb-1 text-white/80 hover:text-blue/70 transition-all duration-300 text-5xl hover:-translate-y-2"/>
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white/80 hover:text-blue/70 transition-all duration-300 text-3xl hover:-translate-y-2"/>
            </a>
            <div className="absolute bottom-8 right-28 lg:block hidden  z-20">
              <img src="/images/character/pillow.png" alt="Chibi 2" className="w-32 h-32" />
            </div>
          </nav>
        </div>
        
        <div className="text-white pt-12 lg:pt-24 px-4 md:px-8 lg:w-[52%] lg:py-24">
        
          <section className="mb-24 md:mb-32 text-lg">
            <p className="mb-4 text-grey/80 font-plexMono">I'm a motivated and detail-oriented student with a strong academic background, maintaining an A average across all subjects. I thrive in leadership roles, having taken on responsibilities through school athletics and West-MEC activities, where I've developed teamwork, communication, and organizational skills.</p>
            <p className="mb-4 text-grey/80 font-plexMono">My passion lies in computer science and web development, where I enjoy blending logical problem-solving with thoughtful design. I've built a solid foundation in UX principles and front-end technologies including JavaScript, CSS, HTML, Python, React.js, and MongoDB, and I'm always eager to expand that knowledge.</p>
            <p className="mb-4 text-grey/80 font-plexMono">I'm currently exploring opportunities to apply what I've learned in the classroom to real-world challenges. Whether I'm managing projects or diving into code, I take pride in delivering high-quality work and approaching each task with curiosity, efficiency, and a willingness to learn.</p>
            <p className="mb-4 text-grey/80 font-plexMono">Outside of academics, I'm constantly learning—whether that's picking up new coding concepts, collaborating on group projects, or exploring creative problem-solving techniques. I'm passionate about continued growth and excited to contribute to environments where I can learn, build, and make a meaningful impact.</p>
            
            <div id="languages"></div>
          </section>

          <section className="text-white mb-24 md:mb-32 group">
            <h2 className="text-2xl font-jaro mb-6 text-center lg:text-left">Languages</h2>
            <div className="m-3 mb-12 md:mb-20">
              <ul className="space-y-4">
                {[
                  { lang: "English", percent: 100, flag: "/images/english-flag.png" },
                  { lang: "German", percent: 95, flag: "/images/german-flag.png" },
                  { lang: "Japanese", percent: 15, flag: "/images/japan-flag.png" },
                  { lang: "Spanish", percent: 5, flag: "/images/spanish-flag.png" },
                ].map(({ lang, percent, flag }) => (
                  <li key={lang} className="flex items-center space-x-4 px-4 py-2 rounded-lg transition-all duration-300 group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                    {/* Flag on the left */}
                    <img src={flag} alt={`${lang} flag`} width={45} height={35} />

                    {/* Text and progress stack */}
                    <div className="flex-1">
                      {/* Title row */}
                      <div className="flex justify-between items-center">
                        <h1 className="text-lg font-semibold tracking-widest font-jaro ">{lang}</h1>
                        <span className="text-sm font-medium tracking-wide font-jaro">{percent}%</span>
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

            <h2 className="text-2xl font-jaro mb-6 text-center lg:text-left">Technical Skills</h2>
            <div className="m-3">
            <ul className="space-y-4">
                {[
                  { lang: "HTML", percent: 100, flag: "/images/html.png" },
                  { lang: "CSS", percent: 95, flag: "/images/css.png" },
                  { lang: "JavaScript", percent: 90, flag: "/images/javascript.png" },
                  { lang: "Tailwind", percent: 85, flag: "/images/tailwind.png" },
                  { lang: "React.js", percent: 85, flag: "/images/react.png" },
                  { lang: "Next.js", percent: 65, flag: "/images/next.png" },
                  { lang: "Node.js", percent: 85, flag: "/images/node.png" },
                  { lang: "TypeScript", percent: 20, flag: "/images/typescript.png" },
                  { lang: "MongoDB", percent: 90, flag: "/images/mongodb.png" },
                ].map(({ lang, percent, flag }) => (
                  <li key={lang} className="flex items-center space-x-4 px-4 py-2 rounded-lg transition-all group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                    {/* icon on the left */}
                    <img src={flag} alt={`${lang} icon`} width={40} height={30} />

                    {/* Text and progress stack */}
                    <div className="flex-1">
                      {/* Title row */}
                      <div className="flex justify-between items-center">
                        <h1 className="text-lg font-semibold tracking-wide font-jaro">{lang}</h1>
                        <span className="text-sm font-medium tracking-wide font-jaro">{percent}%</span>
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
            <div id="experience" ></div>
          </section>
          
          
          <section className="text-white">
            <h2 className="text-2xl font-jaro mb-6 text-center lg:text-left">Experience</h2>
            <div className="group">
              <ol>
                <li className="mb-8 md:mb-11 px-4 py-4 rounded-lg transition-all group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                  <div className="flex flex-col md:flex-row gap-x-6">
                    <header className="text-sm text-grey/80 flex justify-center md:justify-start gap-x-2 font-plexMono mt-1 mb-2 md:mb-0">2024<span className="h-4 w-px bg-white mx-2 inline-block"></span>Present</header>                    
                    <div>
                      <a href="https://www.texasroadhouse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue focus-visible:text-blue group/link">
                        <h3 className="flex items-center text-xl md:text-2xl font-jaro tracking-wide justify-center md:justify-start">
                          Hostess, Texas Roadhouse
                          <GoArrowUpRight className="ml-2 md:ml-4" />
                        </h3>
                      </a>
                      <p className="text-grey/80 mt-2 text-center md:text-left">As a hostess at Texas Roadhouse, I developed strong customer service skills, efficiently managing guest call aheads and ensuring a positive dining experience. I also honed my ability to multitask in a fast-paced environment while maintaining professionalism and a welcoming atmosphere.</p>
                      <ul className="mt-2 flex flex-wrap justify-center md:justify-start">
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue ">Multi-tasking</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue ">Communication</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue ">Customer Service</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-8 md:mb-11 px-4 py-4 rounded-lg transition-all group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                
                  <div className="flex flex-col md:flex-row gap-x-6">
                    <header className="text-sm text-grey/80 flex justify-center md:justify-start gap-x-2 font-plexMono mt-1 mb-2 md:mb-0">2021<span className="h-4 w-px bg-white mx-2 inline-block"></span>2024</header>                    
                    <div>
                      <a href="https://ridgelineacademy.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue focus-visible:text-blue group/link">
                        <h3 className="flex text-xl md:text-2xl items-center font-jaro tracking-wide justify-center md:justify-start">
                          Student, Ridgeline Academy
                          <GoArrowUpRight className="ml-2 md:ml-4"/>
                        </h3>
                      </a>
                      <p className="text-grey/80 mt-2 text-center md:text-left">I graduated early from Ridgeline Academy, a charter school, by accelerating my coursework and earning extra credits. During my time there, I was recognized for academic excellence, leadership, and community involvement, gaining a strong, versatile foundation for future pursuits.</p>
                      <ul className="mt-2 flex flex-wrap justify-center md:justify-start">
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">General Education</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">Diploma</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">NHS</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-8 md:mb-11 px-4 py-4 rounded-lg transition-all group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                  <div className="flex flex-col md:flex-row gap-x-6">
                    <header className="text-sm text-grey/80 flex justify-center md:justify-start gap-x-2 font-plexMono mt-1 mb-2 md:mb-0">2023<span className="h-4 w-px bg-white mx-2 inline-block"></span>2025</header>                    
                    <div>
                      <a href="https://www.west-mec.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-blue focus-visible:text-blue group/link">
                        <h3 className="flex text-xl md:text-2xl items-center font-jaro tracking-wide justify-center md:justify-start">
                          Student, West-MEC Coding Program 
                          <GoArrowUpRight className="ml-2 md:ml-4"/>
                        </h3>
                      </a>
                      <p className="text-grey/80 mt-2 text-center md:text-left">As a West-MEC student in the coding program, I learned multiple programming languages, website development, and database fundamentals. I was also actively involved in FBLA for two years, attending events and serving as a chapter officer.</p>
                      <ul className="mt-2 flex flex-wrap justify-center md:justify-start">
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">Certifications</div></li>
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">HTML</div></li>
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">CSS</div></li>
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">Python</div></li>
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">JS</div></li>
                        <li className="mr-1 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono "><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">TS</div></li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="mb-8 md:mb-11 px-4 py-4 rounded-lg transition-all group-hover:opacity-50 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100 hover:bg-grey/5 hover:backdrop-blur-md">
                  <div className="flex flex-col md:flex-row gap-x-6">
                    <header className="text-sm text-grey/80 text-nowrap flex justify-center md:justify-start font-plexMono mt-1 mb-2 md:mb-0">2025</header>
                    <div>
                      <a href="#scout-project" className="hover:text-blue focus-visible:text-blue group/link">
                        <h3 className="flex text-xl md:text-2xl items-center font-jaro tracking-wide justify-center md:justify-start">
                          Scrum Master, Work Based Learning 
                          <GoArrowUpRight className="ml-2 md:ml-4" />
                        </h3>
                      </a>
                      <p className="text-grey/80 mt-2 text-center md:text-left">As part of the West-MEC coding program, I led a work-based learning project as Scrum Master, where my team built and launched a website from the ground up for Boy Scout Troop 747. We integrated it with MongoDB and successfully deployed it on a hosting platform.</p>
                      <ul className="mt-2 flex flex-wrap justify-center md:justify-start">
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono"><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue ">SCRUM</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono"><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">React.js</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono"><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">Node.js</div></li>
                        <li className="mr-2 mt-2 px-2 py-1 rounded-full bg-blue/10 font-plexMono"><div className="flex items-center rounded-full px-1 py-1 text-xs font-medium leading-5 text-blue">Tailwind</div></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex justify-center lg:justify-start mt-8">
              <a href="/files/resume.png" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                <div className="flex items-center space-x-2">
                  <h1 className="text-base font-medium font-plexMono text-jaro">View Full Resume</h1>
                  <MdArrowOutward className="w-5 h-5" />
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
      
      <div id="projects"></div>
    </div>

    <div className="flex items-center justify-center my-16 md:my-24">
      
      <hr className="h-px w-12 md:w-24 bg-white mr-2 md:mr-4" />

      <h1 className="text-3xl md:text-5xl text-white text-center font-jaro">PROJECTS</h1>
      <hr className="h-px w-12 md:w-24 bg-white ml-2 md:ml-4" />
    </div>


    <div className="absolute hidden lg:block mt-[800px] right-24 z-20">
      <img src="/images/character/hanging.png" alt="Chibi 3" className="w-56 h-56" />
    </div>

    <section className="text-white flex flex-col mx-auto min-h-screen max-w-screen-xl px-4 md:px-6 py-8 md:py-12 font-sans lg:py-0">
                
      {/* FBLA Project */}
      <div className="flex flex-col-reverse lg:flex-row items-center mb-16 md:mb-24 space-y-8 lg:space-y-0 lg:space-x-5">
        <div data-aos="fade-left" className="text-center lg:text-right w-full lg:w-1/2 px-2">
          <h3 className="text-blue font-plexMono text-sm mb-2">Student Project</h3>
          <div className="flex justify-between items-center">
            <a href="https://github.com/sshafe928/cash-compass" target="_blank" rel="noopener noreferrer" >
              <LuGithub className="text-xl ml-3 hover:-translate-y-2 hover:text-blue/70 transition-all" />
            </a>
            <h1 className="text-xl md:text-2xl font-jaro">FBLA CODING & PROGRAMMING</h1>
          </div>
          <p className="bg-grey2 text-white text-lg z-10 p-4 md:p-6 font-plexMono mt-3 rounded-lg">A web app for competing in FBLA State 2024. View your finances with budgets, graphs, savings, and goals. This is a financing web application to help college students get in control of their debts and spending habits.</p>
          <ul className="flex flex-wrap justify-center lg:justify-end gap-2 mt-3 text-lg">
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">React.js</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">Node.js</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">Tailwind</li>
          </ul>
        </div>
        
        <img data-aos="fade-right" src="/images/FBLA.png" alt="FBLA Project" className="w-full lg:w-1/2 max-w-md rounded-lg shadow-lg" />
      </div>

      {/* Scout Project */}
      <div className="flex flex-col lg:flex-row items-center mb-16 md:mb-24 space-y-8 lg:space-y-0 lg:space-x-5">
        <img data-aos="fade-left" src="/images/scout.png" alt="Scout Project" className="w-full lg:w-1/2 max-w-md rounded-lg shadow-lg" />
        <div data-aos="fade-right" className="text-center lg:text-left w-full lg:w-1/2 px-2">
          <h3 className="text-blue font-plexMono text-sm mb-2">Work based Learning Project</h3>
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-jaro">BOY SCOUT TROOP 747</h1>
            <a href="https://github.com/sshafe928/wbla_boyscout" target="_blank" rel="noopener noreferrer" >
              <LuGithub className="text-xl mr-3 hover:-translate-y-2 hover:text-blue/70 transition-all" />
            </a>
          </div>
          <p className="bg-grey2 text-white text-lg z-10 p-4 md:p-6 font-plexMono mt-3 rounded-lg">A web app remake for a boy scout troop. Revamping the entirety of the website and allowing for easy user navigation.</p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3 text-lg">
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">React.js</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">Node.js</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">Tailwind</li>
          </ul>
        </div>
      </div>

      {/* Pet Adoption */}
      <div className="flex flex-col-reverse lg:flex-row items-center mb-16 md:mb-24 space-y-8 lg:space-y-0 lg:space-x-5">
        <div data-aos="fade-left" className="text-center lg:text-right w-full lg:w-1/2 px-2">
          <h3 className="text-blue font-plexMono text-sm mb-2">Student Project</h3>
          <div className="flex justify-between items-center">
            <a href="https://github.com/Diego-Esquivias/Pet-Adoption-Platform" target="_blank" rel="noopener noreferrer" >
              <LuGithub className="text-xl ml-3 hover:-translate-y-2 hover:text-blue/70 transition-all" />
            </a>
            <h1 className="text-xl md:text-2xl font-jaro">PET ADOPTION WEBSITE</h1>
          </div>
          <p className="bg-grey2 text-white text-lg z-10 p-4 md:p-6 font-plexMono mt-3 rounded-lg">A web app for viewing and adopting pets. You can submit and add pets to the adoption list. When searching for pets you can use a search bar to filter though all pets.</p>
          <ul className="flex flex-wrap justify-center lg:justify-end gap-2 mt-3 text-lg">
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">EJS</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">CSS</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">JavaScript</li>
          </ul>
        </div>
        <img data-aos="fade-right" src="/images/pet.png" alt="Pet Adoption" className="w-full lg:w-1/2 max-w-md rounded-lg shadow-lg" />
      </div>


      {/* Cipher Game */}
      <div className="flex flex-col lg:flex-row items-center mb-16 md:mb-24 space-y-8 lg:space-y-0 lg:space-x-5">
        <img data-aos="fade-left" src="/images/Cipher.png" alt="Cipher Project" className="w-full lg:w-1/2 max-w-md rounded-lg shadow-lg" />
        <div data-aos="fade-right" className="text-center lg:text-left w-full lg:w-1/2 px-2">
          <h3 className="text-blue font-plexMono text-sm mb-2">Student Project</h3>
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-jaro">CIPHER PROJECT</h1>
            <a href="https://github.com/sshafe928/cipher-project" target="_blank" rel="noopener noreferrer" >
              <LuGithub className="text-xl mr-3 hover:-translate-y-2 hover:text-blue/70 transition-all" />
            </a>
          </div>
          <p className="bg-grey2 text-white text-lg z-10 p-4 md:p-6 font-plexMono mt-3 rounded-lg">The Cipher Game is a word puzzle game where players solve scrambled words using a transposition cipher. The game features different levels with varying grid sizes and difficulty.</p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3 text-lg">
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">JavaScript</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">HTML</li>
            <li className="px-4 py-1 text-blue rounded-full bg-blue/10 font-jersey tracking-wide">CSS</li>
          </ul>
        </div>
      </div>

      {/* Extra Projects Button */}
      <div className="flex justify-center">
        <a href="/projects">
          <button className="font-jersey text-xl group relative inline-flex text-white h-12 items-center my-8 justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 shadow-lg active:translate-x-[3px] active:translate-y-[3px]">
            Extra Projects
          </button>
        </a>
      </div>

    </section>


    <div  className="flex items-center justify-center my-24">
      <hr className="h-px w-24 bg-white mr-4" />
      <h1 className="text-5xl text-white text-center font-jaro z-1">CONTACT ME</h1>
      <hr className="h-px w-24 bg-white ml-4" />
    </div>

    <section data-aos="zoom-in-up" id="contact" className=" text-white  justify-items-center flex flex-col mx-auto  min-h-20 my-20 max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="max-w-4xl mx-4 p-6 bg-opacity-20 bg-grey rounded-lg shadow-lg text-blue-200">
        <form className="space-y-4 " ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <label htmlFor="title" className="text-blue block text-lg mb-2">Subject:</label>
              <input id="title" type="text" name="title" className="w-full p-2 rounded  bg-grey bg-opacity-20 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" />
            </div>
            
            <div className="w-full md:w-1/2">
              <label htmlFor="user_email" className="text-blue block text-lg mb-2">Email:</label>
              <input  id="email" type="email" name="user_email"className="w-full p-2 rounded  bg-grey bg-opacity-20 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className=" text-blue block text-lg mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 rounded bg-grey bg-opacity-20 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button type="submit"  value="Send" className="px-12 py-2 bg-blue-600 hover:bg-blue-700 border border-white text-white font-semibold rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" > Send
            </button>
          </div>
          {success && (
            <div className="mb-4 text-green-500 text-center font-semibold transition-all">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>


    </>
  );
}
