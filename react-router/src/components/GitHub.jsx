import { Link } from "react-router-dom";
import useGitHub from "../hooks/useGitHub";
import RepoList from "./Repo";
export default function GitHubProfile() {
    const all_data = useGitHub();
    if (!all_data || !all_data.repo_data) {
        return <p className="flex justify-center">Loading...</p>; // Optional: You can replace this with a spinner or any other loading UI
    }
    console.log(all_data);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Left Side: Profile Picture and Info */}
                <div className="md:w-1/3 bg-blue-500 flex flex-col items-center justify-center p-8">
                    <img
                        src={all_data.logo}
                        alt="Profile"
                        className="rounded-full w-40 h-40 border-4 border-white mb-4"
                    />
                    <h2 className="text-white text-2xl font-semibold">Lovepreet Singh</h2>
                    <Link to={all_data.profile_url} target="blank">

                        <p className="text-blue-200 text-lg">@{all_data.user_name}</p>
                    </Link>

                    {/* Follower Count Below Username */}

                    <h2 className="text-white mt-2">Followers</h2>
                    <div className="bg-white text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mt-2 shadow-lg hover:bg-slate-600">
                        <p className="text-2xl font-semibold">{all_data.followers || 10}</p>
                    </div>
                </div>

                {/* Right Side: Repositories */}
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-4">

                    <h3 className="text-gray-700 text-xl font-semibold mt-6 ml-2 pl-2">Repositories</h3>
                    <h3 className="text-gray-700 text-xl font-semibold mt-6 ml-2">Last Updated</h3>
                    </div>
                        {all_data.repo_data.map((e, i) => {
                            console.log(i);
                            return <RepoList key={e.id} repo_name={e.full_name} description={e.description || "No description available" } last_updated={e.created_on} />
                        })}
                </div>
            </div>
        </div>
    );
}
