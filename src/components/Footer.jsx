import React from "react";
import { ImGithub } from "react-icons/im"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome, } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logolight, master, unionpay, visa, western } from "../assets";

const Footer = () => {
    return (
        <div className="bg-black text-[#949494] py-20 font-titleFont">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                {/* ================== LogoIcon Start Here  ================== */}
                <div className="flex flex-col gap-7">
                    <h1 className="text-2xl font-semibold text-white mb-4">Bazar</h1>
                    {/* <img className="w-28" src={logolight} alt="logo" /> */}
                    <div className="flex flex-row gap-7">
                        <img className="w-7 h-7" src={visa} alt="" />
                        <img className="w-7 h-7" src={western} alt="" />
                        <img className="w-7 h-7" src={unionpay} alt="" />
                        <img className="w-7 h-7" src={master} alt="" />
                    </div>
                    <p className="text-white text-sm tracking-wide">memonharoon839@gmail.com</p>
                    {/* <img className="w-28" src={admin} alt="" /> */}
                    <div className=" flex gap-5 text-lg text-gray-400">
                        <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaHome className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                {/* ================== LogoIcon End Here  ================== */}
                {/* ================== LocateUs Start Here  ================== */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>Hyderabad, Sindh, Pakistan</p>
                        <p>Mobile: 03033******</p>
                        <p>Phone: 03033******</p>
                        <p>e-mail: bazar@gmail.com</p>
                    </div>
                </div>
                {/* ================== LocateUs End Here  ================== */}
                {/* ================== Profile Start Here  ================== */}
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                    <div className="flex flex-col gap-2 text-base">
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPersonFill />
                            </span>
                            My account
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <BsPaypal />
                            </span>
                            Checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <FaHome />
                            </span>
                            Order Tracking
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                            <span>
                                <MdLocationOn />
                            </span>
                            Help & Support
                        </p>
                    </div>
                </div>
                {/* ================== Profile End Here  ================== */}
                {/* ================== Subscribe Start Here  ================== */}
                <div className="flex flex-col justify-center ">
                    <input className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder="e-mail" name="" id="" />
                    <button className="text-sm border text-white bottom-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
                </div>
                {/* ================== Subscribe End Here  ================== */}
            </div>
        </div>
    )
}
export default Footer