import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaSearchPlus } from "react-icons/fa";

const Featurereusable = () => {
    return (
        <div className="flex items-center justify-between w-[150px]">
            <div className="border-[1px] p-[7px] bg-[#EEEFFB] text-[#2F1AC4] rounded-full">
                <IoCartOutline />
            </div>
            <div className="border-[1px] p-[7px] bg-[#EEEFFB] text-[#2F1AC4] rounded-full">
                <FaHeart />
            </div>
            <div className="border-[1px] p-[7px] bg-[#EEEFFB] text-[#2F1AC4] rounded-full">
                <FaSearchPlus />
            </div>
        </div>
    )
}

export default Featurereusable