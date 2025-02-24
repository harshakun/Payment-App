import Heading from "./Heading";
import Img from "./user.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Nav({ username }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-black p-4 md:p-2 shadow-lg">
            <Heading heading="Payment App" />
            <div className="flex items-center gap-3 mt-2 md:mt-0">
                <div className="text-white text-sm md:text-lg">Hello, {username}</div>
                <img className="w-8 h-8 rounded-full" src={Img} alt="User" />
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
                <Button text="Signin" onclick={() => navigate("/Signin")} />
                <Button text="Signup" onclick={() => navigate("/Signup")} />
            </div>
        </div>
    );
}
