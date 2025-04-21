import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <div className="text-white ">
        <h1>Sabrina Shafer</h1>
        <h3>Coding Student</h3>
        <p>I’m a West-MEC and high school graduate currently pursuing a degree in Computer science.</p>
        <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max text-white">
          <li>
            <a className= "group flex items-center py-3 active" href="#">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> About </span>
            </a>
          </li>
          <li>
            <a className= "group flex items-center py-3 active" href="#">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" ></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"> Languages </span>
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
        </nav>
      </div>
      
      <div>

      </div>
    </div>
    </>
  );
}
