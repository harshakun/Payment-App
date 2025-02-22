import Button from './Button'
import Img from './user.png'
import { useNavigate } from 'react-router-dom'
export default function Userlist({user}){
    const navigate=useNavigate();
    
    return <div className="flex justify-between">
        <div className='flex justify-center items-center'>
            <div className="w-7 h-7 flex justify-center items-center ml-2">
                <img src={Img} alt="User" />
            </div>
            <div className="text-center text-white m-2">
                {user.firstname}
            </div>
        </div>
        <div>
            <Button text="Send Money" onclick={(e)=>{
                navigate("/Transaction?id="+user._id+"&name="+user.firstname);
            }}></Button>
        </div>
    </div>
}