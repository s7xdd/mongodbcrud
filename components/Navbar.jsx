const { default: Link } = require("next/link");

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-6
        py-6 ">
           <Link
              className="text-white font-bold"
              href={"/"}
           >Make A List</Link>

            <Link 
               className="bg-white p-2"
               href={"/AddTopic"}
            >Add Topic</Link>
        </nav>
    );
}

export default Navbar;