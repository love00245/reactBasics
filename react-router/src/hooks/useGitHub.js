import { useEffect, useState } from "react";

export default function useGitHub() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = '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';

                const userResponse = await fetch("https://api.github.com/users/love00245", {
                    headers: {
                        'Authorization': `token ${token}`
                    }
                });
                const userJson = await userResponse.json();

                const repoResponse = await fetch("https://api.github.com/users/love00245/repos", {
                    headers: {
                        'Authorization': `token ${token}`
                    }
                });
                const repoJson = await repoResponse.json();
                console.log(userJson);

                // Update state immutably
                const { bio, email = "honey32195@gmail.com", git_hub_url: url, followers, location, name, company, blog, updated_at: last_active_on, linkedin = "https://www.linkedin.com/in/lovepreet-singh-71a21516a/", avatar_url: avatar_url , html_url : profile_url , login : user_name } = userJson;
                setUserData({
                    bio,
                    email,
                    url,
                    repo_data: repoJson.sort(e => !e.created_at).map(e => { return { full_name: e.full_name, created_on: e.created_at, id: e.id, description: e.description } }).splice(0, 4),
                    followers,
                    last_active_on,
                    location,
                    name,
                    company,
                    blog,
                    linkedin,
                    logo: avatar_url,
                    profile_url,
                    user_name
                });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array to run effect only once

    return userData;
}
