"use client";

import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from "react-icons/hi";


const RemoveBtn = ({ id }) => {
    
    const router = useRouter();

    const removeTopic = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed){
            await fetch(`http://localhost:3005/api/topics?id=${id}`, {
                method: "DELETE",
            });

            router.refresh();
        } 
    };

    return (
        <button onClick={removeTopic}
        ><HiOutlineTrash size={24}/>
        </button>
    );
}

export default RemoveBtn;