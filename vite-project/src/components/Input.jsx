import '../App.css'
export default function Input({label,placeholder,id,onclick}){
    return <div className='p-2 m-2'>
        <div className="text-center text-white p-1">
        <label htmlFor={id}>{label}</label>
        </div>
        <div className='flex justify-center w-full'>
        <input className="text-center rounded-lg w-full p-1"type="text" id={id} placeholder={placeholder} onChange={onclick}/>
        </div>
    </div>
}