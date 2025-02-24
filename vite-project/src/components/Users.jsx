import { useState, useEffect } from "react";
import Heading from "./Heading";
import Userlist from "./Userlist";
import axios from "axios";

export default function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://paymentbackend-git-main-kannans-projects-e56e554a.vercel.app/api/v1/user/bulk")
            .then((response) => {
                setUser(response.data.user);
            });
    }, []);

    return (
        <div className="p-4">
            <Heading heading="Users" />
            <input
                className="w-full rounded px-4 py-2 mt-3 border border-gray-300 text-gray-900"
                type="text"
                placeholder="Search users..."
            />
            <div className="mt-4 space-y-3">
                {user.map((u) => (
                    <Userlist key={u._id} user={u} />
                ))}
            </div>
        </div>
    );
}
