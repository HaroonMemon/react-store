import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
    // const productData = useSelector((state) => state.bazar.productData)
    // console.log(productData)
    return (
        <div>
            <img
                className="w-full h-60 object-cover"
                src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cartImg" />
            
            {/* {
                productData.map(())
            } */}
            <div className="max-w-screen-xl mx-auto py-20 flex">
                <CartItem />
                <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                        <h2 className="text-2xl font-medium">Cart Totals</h2>
                        <p className="flex items-center gap-4 text-base">
                            Subtotal{" "}
                            <span className="font-titleFont font-bold text-lg">
                                $ 200
                            </span>
                        </p>
                        <p className="flex items-start gap-4 text-base">
                            Shipping{" "}
                            <span>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ad soluta
                                aliquid.
                            </span>
                        </p>
                    </div>
                    <p className="font-titleFont font-semibold flex justify-between mt-6">
                        {" "}
                        total 
                        <span className="text-xl font-bold">
                            $200
                        </span>
                    </p>
                    <button className="text-base bg-black text-white w-full mt-6 hover:bg-gray-800 duration-300">proceed to checout</button>
                </div>
            </div>
            <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </div>
    )
}
export default Cart; 