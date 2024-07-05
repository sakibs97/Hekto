import Container from "./Container"
import tren1 from "../assets/trending/tren1.png"
import tren2 from "../assets/trending/tren2.png"
import tren3 from "../assets/trending/tren3.png"
import tren4 from "../assets/trending/tren4.png"
import LatestProreusable from "./reusable/LatestProreusable"
import NameTrendingreusable from "./reusable/NameTrendingreusable"

const TreandingPro = ({ name, price, pricex }) => {
    return (
        <section>
            <Container>
                <div className="text-center my-10">
                    <h2 className="font-jose font-bold text-[40px] text-[#1A0B5B]">Trending Products</h2>
                </div>
                <div className="flex justify-around items-center mb-10">
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren1} className="w-[200px] h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren2} className="w-[200px] h-[200px]" alt="tren2" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren3} className="w-[200px] h-[200px]" alt="tren3" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren4} className="w-[200px] h-[200px]" alt="tren4" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>
                    <div className="">
                        <div className="group px-[10px] pt-[10px] pb-[20px] border-[1px]">
                            <div className="relative p-[30px] bg-[#F5F6F8] ease-in-out duration-500">
                                <img src={tren1} className="w-[200px] h-[200px]" alt="tren1" />
                                <LatestProreusable />
                            </div>
                            <NameTrendingreusable name='Cantilever chair' price='$26.00' pricex='$42.00' />
                        </div>
                    </div>

                </div>

            </Container>
        </section>
    )
}

export default TreandingPro