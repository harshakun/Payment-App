import Heading from "./components/Heading"
import Nav from "./components/Nav"
import Users from "./components/Users"
import axios from "axios"
import { useEffect,useState } from "react"
import { useSearchParams } from "react-router-dom"
export default function Dashboard(){
    const[balance,setBalance]=useState("");
    const [SearchParams]=useSearchParams();
    const username=SearchParams.get("username");
    useEffect(()=>{
        axios.get("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/account/balance",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response)=>{
            setBalance(response.data.balance.toFixed(2));
        })
    },[])
    return <div className="bg-gray-600 h-screen">
        <Nav username={username}></Nav>
        <div className="flex justify-start mt-4 ml-2">
        <Heading heading={`Your Balance: ₹${balance}`}></Heading>
        </div>
        <div className="mt-4">
        <Users></Users>
        </div>

    </div>
}