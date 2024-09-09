import useGitHub from "../hooks/useGitHub";
export default function About() {

    const all_data =  useGitHub();
    console.log(all_data);
    
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img className="rounded-full"
                            src={all_data.logo}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 md:text-4xl">
                            <strong className="text-7xl">Love</strong> Preet
                        </h2>
                        <p className="mt-6 text-gray-600">
                        {all_data.bio}
                        </p>
                        <p className="mt-4 text-gray-600">
                        A passionate and highly skilled backend developer, I bring extensive expertise in JavaScript, Node.js, and MySQL to the table, driving the success of dynamic organizations with scalable, efficient, and reliable backend solutions. My commitment to excellence and innovation ensures that I consistently exceed project goals. Eager to solve complex challenges, I thrive in collaborative environments, always delivering high-impact results.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}