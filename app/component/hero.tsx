 import React from "react";
 import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
 export default function Hero (){
    return(
        <div className="flex justify-center items-center pf-10">
            <div className=" max-w-[1440px] gap-6 justify-center">
                <div className="border-r-2 border-neutral-200 p-10 hidden md:block">
                    <ul className=" space-y-4">
                        {[
                            "Womwen's Fashion",
                            "Men's Fashion",
                            "Electronics",
                            "Home & Lifestyle",
                            "Medicine",
                            "Sports & Outdoor",
                            "Baby's & Toys",
                            "Groceries & Pets",
                            "Health & Beauty",
                        ] .map ((item, index) => (
                            <li key={index}
                            className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition -all duration-150"
                            ><span>
                                {item}
                            </span>
                            {index < 2 && (
                                <MdOutlineKeyboardDoubleArrowDown className="text-lg ml-2"/>
                            )}

                            </li>
                        ))}

                    </ul>

                </div>

            </div>
            
        </div>
    )
}
        // <div className="flex justify-center items-center pf-10">
        //     <div className="max-w-[1440px flex gap-6 justify-c enter]">
        //         <div className="border-r-2 border-neutral-200 p-10 hidden md:black">
        //             <ul className="space-y-4">
        //                 {[
        //                     "Womwen's Fashion",
        //                     "Men's Fashion",
        //                     "Electronics",
        //                     "Home & Lifestyle",
        //                     "Medicine",
        //                     "Sports & Outdoor",
        //                     "Baby's & Toys",
        //                     "Groceries & Pets",
        //                     "Health & Beauty",]}
                        // ] .map (( item, index) =>{<li 
                        //     key={index}
                        //     className= "">
                        // </li>
                        // })}
                    // </ul>

        //         </div>

        //     </div>
              
        // </div>

    // )   

// }