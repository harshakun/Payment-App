import Button from "./Button";
import Img from "./user.png";
import { useNavigate } from "react-router-dom";

export default function Userlist({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg shadow-md w-full">
            <div className="flex items-center space-x-3">
                <img className="w-8 h-8 rounded-full" src={Img} alt="User" />
                <div className="text-white text-sm md:text-lg">{user.firstname}</div>
            </div>
            <div className="ml-auto"> {/* Ensures button stays aligned to the right */}
                <Button
                    text="Send Money"
                    onclick={() => navigate("/Transaction?id=" + user._id + "&name=" + user.firstname)}
                />
            </div>
        </div>
    );
}
