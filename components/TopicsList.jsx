import RemoveBtn from '@/components/RemoveBtn'
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';


const getTopics = async() => {
  try {
    const res = await fetch("http://localhost:3005/api/topics", { cache: "no-store" }
    );

    if(!res.ok){
      throw new Error("Failed to fetch topics");
    }

    return res.json();

  } catch (error) {
    console.log("Error loading topics", error);
  }
}


const TopicsList = async () => {

    const { topics } = await getTopics();

    return(
        <>
          { topics.map(t => (
            <div className="flex p-4 border border-slate-300 justify-between px-6 
            py-4 my-3 items-start">
              
              <div>
                 <h2 className="font-bold text-2xl">{ t.title }</h2>
                 <div>{ t.description }</div>
              </div>
            
              <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}> 
                    <HiPencilAlt size={24}/>  
                </Link>
              </div>

            </div>
          ))}
        </>
    );
}

export default TopicsList;