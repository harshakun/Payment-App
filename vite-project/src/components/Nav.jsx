import Heading from './Heading';
import Img from './user.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
export default function Nav({username}){
    const navigate=useNavigate();
    return <div className='flex justify-between bg-black p-2'>
        <Heading heading="Payment App"></Heading>
        <div className="flex justify-center items-center h-full">
            <div className="text-white">
                Hello,{username}
            </div>
           
            <div className="w-7 h-7 flex justify-center items-center ml-2">
                <img src={Img} alt="User" />
            </div>
            <div>
                <Button text="Signin" onclick={()=>{
                    navigate("/Signin");
                }}></Button>
            </div>
            <div>
            <Button text="Signup" onclick={()=>{
                    navigate("/Signup");
                }}></Button>
            </div>
        </div>
    </div>
}