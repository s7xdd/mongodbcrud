"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"

const EditTopicForm = ({id, title, description}) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3005/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if(!res.ok){
                throw new Error("Could not update topic");
            }

            router.push('/');
            router.refresh();

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="border-slate-800 py-8">
            
            <input 
               onChange={(e) => setNewTitle(e.target.value)}
               value={newTitle}
               className="flex border border-slate-500 px-8 py-2"
               type="text" 
               placeholder="Topic Title"
            />

            <input 
               onChange={(e) => setNewDescription(e.target.value)}
               value={newDescription}
               className="flex border border-slate-500 px-8 py-2 mt-3"
               type="text" 
               placeholder="Topic Description"
            />

            <button 
                type="submit"
                className="border bg-green-600 text-white py-2 px-4 mt-3 ml-20"
            >Update Topic</button>

        </form>
        </div>
    );
}

export default EditTopicForm;