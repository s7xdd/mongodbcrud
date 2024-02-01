"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTopic = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( !title || !description ){
            alert("Title and Description are required!");
            return;
        }

        try {

            const res = await fetch("http://localhost:3005/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if(res.ok){
                router.push('/');
                router.refresh();
            } else {
                throw new Error ("Failed to create a new topic. ")
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="border-slate-800 py-8">
            
            <input 
               onChange={(e) => setTitle(e.target.value)}
               value={title}
               className="flex border border-slate-500 px-8 py-2"
               type="text" 
               placeholder="Topic Title"
            />

            <input 
               onChange={(e) => setDescription(e.target.value)}
               value={description}
               className="flex border border-slate-500 px-8 py-2 mt-3"
               type="text" 
               placeholder="Topic Description"
            />

            <button 
                type="submit"
                className="border bg-green-600 text-white py-2 px-4 mt-3"
            >Add Topic</button>

        </form>
    );
}

export default AddTopic;