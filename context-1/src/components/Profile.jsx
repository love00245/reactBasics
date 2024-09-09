import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);
    console.log("holaa", user);
    if (!user?.username) {
        return <div>Please Login</div>
    }
    return <div>Hello {user.username}</div>
}

export default Profile