export default function Button({text,onclick}){
    return <div className="w-full flex justify-center p-2">
        <button type="button" onClick={onclick} className="text-white bg-gray-800 hover:bg-gray-600 hover:underline focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{text}</button>
    </div>
}