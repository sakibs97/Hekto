import Hekto from "../assets/Hekto.png"
import Container from "./Container"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <section className="my-[15px]">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[10%]">
                        <img src={Hekto} alt="Hekto" />
                    </div>
                    <div className="flex justify-between items-center w-[80%]">
                        <ul className="flex justify-between items-center w-[50%]">
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Home</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Pages</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Products</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Blog</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Shop</li>
                            <li className="font-lato font-normal text-[#0D0E43] text-[16px] hover:active:text-[#FB2E86]">Contact</li>
                        </ul>
                        <div className="">
                            <div className="relative">
                                <input type="search" className='border-[1px] border-[#D9D9D9] outline-none w-[260px] h-[38px] p-2 mr-[38px] bg-[#D9D9D9]' placeholder="Search Products" />
                                <div className="absolute top-[50%] translate-y-[-50%] right-[0px] border-[1px] border-[#FB2E86] bg-[#FB2E86] p-[10px]">
                                    <FaSearch className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar