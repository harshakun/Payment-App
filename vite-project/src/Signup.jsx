import Input from "./components/Input"
import Heading from "./components/Heading"
import Button from "./components/Button"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Signup(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div className="flex justify-center items-center h-screen bg-gray-500">
    <div className="rounded-lg bg-black w-1/4">
    <Heading heading="Sign-Up"></Heading>
    <Input label="Name" placeholder="Enter your mail" id="name" onclick={(e)=>{
            setUsername(e.target.value);
        }}></Input>
    <Input label="Password" placeholder="Enter your password" id="pass" onclick={(e)=>{
            setPassword(e.target.value);
        }}></Input>
    <Button text="Signup" onclick={async()=>{
            const response=await axios.post("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/user/signin",{
                username,
                password
            });
            localStorage.setItem("token",response.data.token);
            navigate("/Dashboard?username="+response.data.username);
        }}></Button>
    </div>
</div>
}