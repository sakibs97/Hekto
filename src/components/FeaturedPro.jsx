import Container from "./Container"
import chair from "../assets/Feature/chair.png"
import chair2 from "../assets/Feature/chair2.png"
import chair3 from "../assets/Feature/chair3.png"
import chair4 from "../assets/Feature/chair4.png"
import Featurereusable from "./reusable/Featurereusable"
import FeatureButtonreusable from "./reusable/FeatureButtonreusable"
import Slider from "react-slick";

const FeaturedPro = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="my-8">
            <Container className=''>
                <div className="text-center my-10">
                    <h2 className="font-jose font-bold text-[40px] text-[#1A0B5B]">Featured Products</h2>
                </div>
                <Slider {...settings}>
                    <div className="">
                        <div className="group  w-[270px]">
                            <div className="relative">
                                <img src={chair} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <button className="absolute bottom-[5px] left-[50%] translate-x-[-50%] py-[10px] px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 ease-in-out duration-500">View Details</button>
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ease-in-out duration-500">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px]">
                            <div className="relative">
                                <img src={chair} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <button className="absolute bottom-[5px] left-[50%] translate-x-[-50%] py-[10px] px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 ease-in-out duration-500">View Details</button>
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ease-in-out duration-500">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px]">
                            <div className="relative">
                                <img src={chair2} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <button className="absolute bottom-[5px] left-[50%] translate-x-[-50%] py-[10px] px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 ease-in-out duration-500">View Details</button>
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ease-in-out duration-500">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="group  w-[270px]">
                            <div className="relative">
                                <img src={chair3} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <button className="absolute bottom-[5px] left-[50%] translate-x-[-50%] py-[10px] px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 ease-in-out duration-500">View Details</button>
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ease-in-out duration-500">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                    <div className="w-[270px]">
                        <div className="group ">
                            <div className="relative">
                                <img src={chair4} className="w-[270px] h-[270px] bg-[#F6F7FB] group-hover:bg-[#F7F7F7]" alt="" />
                                <button className="absolute bottom-[5px] left-[50%] translate-x-[-50%] py-[10px] px-[13px] bg-[#08D15F] font-jose font-medium text-[12px] text-[#FFFFFF] opacity-0 group-hover:opacity-100 ease-in-out duration-500">View Details</button>
                                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 ease-in-out duration-700">
                                    <Featurereusable />
                                </div>
                            </div>
                            <div className=" ease-in-out duration-500">
                                <FeatureButtonreusable />
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </section>
    )
}

export default FeaturedPro