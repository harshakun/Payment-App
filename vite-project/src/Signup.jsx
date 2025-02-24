import Input from "./components/Input";
import Heading from "./components/Heading";
import Button from "./components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-500 px-4">
            <div className="rounded-lg bg-black w-full max-w-sm p-6 md:p-8 shadow-lg">
                <Heading heading="Sign-Up" />

                <Input 
                    label="Name" 
                    placeholder="Enter your mail" 
                    id="name" 
                    onclick={(e) => setUsername(e.target.value)}
                />
                <Input 
                    label="Password" 
                    placeholder="Enter your password" 
                    id="pass" 
                    onclick={(e) => setPassword(e.target.value)}
                />

                <div className="flex flex-col gap-3 mt-4">
                    <Button 
                        text="Signup" 
                        onclick={async () => {
                            const response = await axios.post(
                                "https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/user/signin",
                                { username, password }
                            );
                            localStorage.setItem("token", response.data.token);
                            navigate("/Dashboard?username=" + response.data.username);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
