import Container from "./Container"
import shop from "../assets/shop.png"
import LatestProreusable from "./reusable/LatestProreusable";
import ShopProNamereusable from "./reusable/ShopProNamereusable";
import Bannerreusable from "./reusable/Bannerreusable";
import PageSortBy from "./PageSortBy";

const ShopGridDefault = ({ name, less, off, headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='Shop Grid Default' pname='Shop Grid Default' home='Home' page='Pages' />
            <Container className=''>
                <PageSortBy />
                <div className="flex flex-wrap justify-between items-center my-7">
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Ultricies condimentum imperdiet' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vitae suspendisse sed' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Sed at fermentum' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                    <div className="group my-[15px]">
                        <div className="relative p-[40px] bg-[#F6F7FB] group-hover:bg-[#EBF4F3] ease-in-out duration-500">
                            <img src={shop} alt="" className="h-[200px] w-[200px]" />
                            <LatestProreusable />
                        </div>
                        <ShopProNamereusable name='Vel elit euismod' less='$26.00' off='$42.00' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShopGridDefault