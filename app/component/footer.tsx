
import React from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="bg-black text-white pt-10 px-20 font-poppins">
            <footer>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10">
                        <div>
                            <h2 className="font-medium text-xl">Exclusive </h2>
                            <p className="mt-4 text-zinc-200 font-light">Subscribe</p>
                            <p className="mt-2 text-zinc-200 font-light">Get 10% off on your first order</p>
                            <div className="mt-4 relative border border-white rounded">
                                <input type="email"
                                    placeholder="enter your e-mail"
                                    className="bg-black text-white p-2 flex-grow outline-none rou w-full" />
                                <button type="submit"
                                    className="mt-1 absolute top-1/5 right-8 transform-translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-slate-800">
                                    <FaArrowAltCircleRight />
                                </button>

                            </div>
                        </div>
                        <div>
                            <h2 className=" font-medium text-xl">Support </h2>
                            <p className="mt-4 text-zinc-200 font-light">Governor House Sindh, Karachi Pakistan</p>
                            <p className="mt-4 text-zinc-200 font-light">Governorsindh@gmail<br />.com</p>
                            <p className="mt-4 text-zinc-200 font-light">021-021021-5</p>

                        </div>

                        <div>
                            <h2 className="font-medium text-xl>Account"> Account</h2>
                            <ul className="mt-4 space-y-3 text-zinc-300 font-light">
                                <li>My Account</li>
                                <li>Login/Register</li>
                                <li>Cart</li>
                                <li>Wishlist</li>
                                <li>Shop</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="font-medium text-xl>Account">Quick Link</h2>
                            <ul className="mt-4 space-y-3 text-zinc-300 font-light">
                                <li>Privacy Policy</li>
                                <li>Term of use</li>
                                <li>Cart</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-medium text-xl">Download App</h2>
                            <p className="mt-4 text-zinc-200 font-light ">Save $3 with App new user only</p>
                        </div>


                    </div>

                </div>

            </footer>
        </div>
    )
}
