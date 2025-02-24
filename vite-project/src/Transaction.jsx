import Heading from "./components/Heading";
import Input from "./components/Input";
import Button from "./components/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Transaction() {
    const [SearchParams] = useSearchParams();
    const id = SearchParams.get("id");
    const name = SearchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-500 p-4">
            <div className="bg-black rounded-lg w-full max-w-md p-6 shadow-lg">
                <div className="mb-4">
                    <Heading heading="Send Money" />
                </div>
                <div className="mb-4">
                    <Input 
                        label={name} 
                        placeholder="Enter the amount in Rs" 
                        id="tran" 
                        onclick={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="flex justify-center">
                    <Button 
                        text="Initiate Transfer" 
                        onclick={async () => {
                            await axios.post(
                                "https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/account/transfer",
                                { to: id, amount },
                                { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
                            );
                            navigate("/Dashboard");
                        }} 
                    />
                </div>
            </div>
        </div>
    );
}
