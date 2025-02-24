import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Users from "./components/Users";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Dashboard() {
    const [balance, setBalance] = useState("");
    const [SearchParams] = useSearchParams();
    const username = SearchParams.get("username");

    useEffect(() => {
        axios.get("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then((response) => {
            setBalance(response.data.balance.toFixed(2));
        });
    }, []);

    return (
        <div className="bg-gray-600 min-h-screen">
            <Nav username={username} />
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 px-4">
                <Heading heading={`Your Balance: ₹${balance}`} />
            </div>
            <div className="mt-6 px-4">
                <Users />
            </div>
        </div>
    );
}
