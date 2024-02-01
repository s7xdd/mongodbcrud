
const EditTopicForm = () => {
    return(
        <form className="border-slate-800 py-8">
            
            <input 
               className="flex border border-slate-500 px-8 py-2"
               type="text" 
               placeholder="Topic Title"
            />

            <input 
               className="flex border border-slate-500 px-8 py-2 mt-3"
               type="text" 
               placeholder="Topic Description"
            />

            <button 
                className="border bg-green-600 text-white py-2 px-4 mt-3"

            >Update Topic</button>

        </form>
    );
}

export default EditTopicForm;