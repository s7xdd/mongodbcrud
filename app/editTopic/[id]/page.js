

const { default: EditTopicForm } = require("@/components/EditTopicForm")

const getTopicByID = async (id) => {
    try {
        const res = await fetch(`http://localhost:3005/api/topics/${id}`, {
            cache: "no-store"
        });

        if(!res.ok){
            throw new Error("Failed to fetch");
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
}

const editTopic = async ({ params }) => {
    
    const { id } = params;
    const { topic } = await getTopicByID(id); 
    const { title, description } = topic; 

    return(
        <EditTopicForm id={id} title={title} description={description} />
    );
}

export default editTopic;