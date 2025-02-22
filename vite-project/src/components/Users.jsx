import { useState,useEffect } from "react"
import Heading from "./Heading"
import Userlist from "./Userlist"
import axios from 'axios'

export default function Users(){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/user/bulk").then((response)=>{
            console.log(response.data.user);
            setUser(response.data.user);
        })
    },[]);
   
    return <div className="mt-4">
        <div className="flex justify-start ml-2 ">
        <Heading heading="Users"></Heading>
        </div>
        <div className="w-full flex justify-center mt-2">
        <input  className="w-full ml-2 mr-2 rounded px-2 py-1" type="text" placeholder="Search"/>
        </div>
        <div className="ml-2 mt-4">
                {user.map((u) => (
                <Userlist  user={u}></Userlist>
                ))
                }
            </div>
    </div>
}