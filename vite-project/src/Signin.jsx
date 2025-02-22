import Input from "./components/Input"
import Heading from "./components/Heading"
import Button from "./components/Button"
import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Signin(){
    const[username,setUsername]=useState("");
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div className="flex justify-center items-center h-screen bg-gray-500">
        <div className="rounded-lg bg-black w-1/4">
        <Heading heading="Sign-In"></Heading>
        <Input label="Name" placeholder="Enter your mail" id="name" onclick={(e)=>{
            setUsername(e.target.value);
        }}></Input>
        <Input label="Firstname" placeholder="Enter your first name" id="fname" onclick={(e)=>{
            setFirstname(e.target.value);
        }}></Input>
        <Input label="Lastname " placeholder="Enter your last name" id="lname" onclick={(e)=>{
            setLastname(e.target.value);
        }}></Input>
        <Input label="Password" placeholder="Enter your password" id="pass" onclick={(e)=>{
            setPassword(e.target.value);
        }}></Input>
        <Button text="Signin" onclick={async()=>{
            const response=await axios.post("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/user/signup",{
                username,
                firstname,
                lastname,
                password
            });
            localStorage.setItem("token",response.data.token);
            navigate("/Signup");
        }}></Button>
        <Button text="Signup" onclick={
            navigate("/Signup")
        }></Button>    
        </div>
    </div>
}
