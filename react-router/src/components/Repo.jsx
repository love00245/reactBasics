import { Link } from "react-router-dom"

export default function RepoList({ repo_name = "Repo 1", description = "Desc 1", last_updated = new Date(Date.now()).getTime() }) {
    const baseUrl = "https://github.com";

    return (
        <div className="space-y-4 mt-1">
            <div className="ml-3 w-[550px] bg-blue-300 rounded-lg p-4 mb-2 hover:bg-slate-300 cursor-pointer">
                <Link to={`${baseUrl}/${repo_name}`} target="blank"> 

                <h4 className="text-lg font-semibold underline">{repo_name}</h4>
                </Link>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-600">{description}</p>
                    <p className="text-gray-600">{formatDate(last_updated)}</p>
                </div>
            </div>
        </div>
    );
}


function formatDate(last_updated) {
    const date = new Date(last_updated);
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
    const year = date.getFullYear();

    return `${day}-${month}-${year}`; // Format as dd-mm-yyyy
}