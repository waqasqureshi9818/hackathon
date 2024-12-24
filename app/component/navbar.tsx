import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (

        <header className="bg-whitepy shadow-sm border-b mx-auto flex flex-col w-[1440px]">
            <div className="bg-black text-whitepy-800 text-sm flex justify-between items-center px-8 w-full">
                <div className="bg-black text-white text-center flex-1">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!


                    <a href="#" className="underline hover-text-black-300 &nbsp"> Shop Now</a>

                </div>
                <div className="flex item-center gap-[2px]">
                    <div className="text-white text-sm font-normal leadig-[21px]">
                        English
                    </div>
                    <IoIosArrowDropdownCircle className="text-white text-3xl" />

                </div>
            </div>
            {/* navigation */}
            <div className="flex justify-between items-center px-8 py-4">
                <h1 className="text-2xl font-bold text-black">Exclusive</h1>

                <nav className="hidden md:flex space-x-8 items-center ">
                    <a href="#" className="text-slate-600 hover:text-black underline">Home</a>
                    <a href="#" className="text-slate-600 hover:text-black">Contact</a>
                    <a href="#" className="text-slate-600 hover:text-black">About</a>
                    <a href="#" className="text-slate-600 hover:text-black">Signup</a>
                </nav>

                {/* search */}

                <div className="flex items-center space-x-6">
                    <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
                        <input type="text" placeholder="What are you looking for?"
                            className="bg-slate-100 outline-none text-sm"
                        />

                        <CiSearch />

                    </div>
                    <FaRegHeart />
                    
                    <IoCartOutline />

                </div>
            </div>
        </header>

    )
}

export default Navbar

