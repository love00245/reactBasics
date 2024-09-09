import { NavLink, Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:mt-0 mt-50 space-y-7 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Hi, I'm <span className="text-6xl sm:text-7xl text-red-500">Love</span>preet Singh 👋
                            <span className="hidden sm:block text-2xl"></span>
                        </h2>

                        <p className="text-left w-[500px] ml-[140px]">
                            I'm a Full Stack Developer with a passion for coding and a love for all things tech. With Node.js and SQL as my go-to tools, I build dynamic web apps and efficient backends that bring ideas to life. I thrive on solving problems, optimizing code, and constantly learning new technologies. If you're looking for a developer who's as excited about your project as you are, let's connect and create something awesome together!

                        </p>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lets Code</h1>
        </div>
    );
}
