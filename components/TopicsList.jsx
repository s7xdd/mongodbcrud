import RemoveBtn from '@/components/RemoveBtn'
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const TopicsList = () => {
    return(
        <>
            <div className="flex p-4 border border-slate-300 justify-between px-6 
            py-4 my-3 items-start">
              
              <div>
                 <h2 className="font-bold text-2xl">Topic Tile</h2>
                 <div>Topic Description</div>
              </div>
            
              <div className="flex gap-2">
                <RemoveBtn />
                <Link href="/editTopic/123"> 
                    <HiPencilAlt size={24}/>  
                </Link>
              </div>



            </div>
        
        
        </>
    );
}

export default TopicsList;