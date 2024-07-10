import Container from "./Container"
import PageSortBy from "./PageSortBy"
import Bannerreusable from "./reusable/Bannerreusable"
import list from "../assets/listview.png"
import { GoDotFill } from "react-icons/go";

const ShopList = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='Shop List' pname='Shop List' home='Home' page='Pages' />
            <Container>
                <PageSortBy />
                <div className="my-10">
                    <div className="">
                        <img src={list} alt="list" />
                        <div className="">
                            <div className="flex items-center">
                                <h3 className="font-jose font-bold text-[20px] text-[#111C85]">Accumsan tincidunt</h3>
                                <GoDotFill className="text-[#DE9034]" />
                                <GoDotFill className="text-[#EC42A2]" />
                                <GoDotFill className="text-[#8568FF]" />
                            </div>
                            <div className="flex items-center">
                                <p className="font-jose font-normal text-[14px] text-[#151875] pr-3">$26.00</p>
                                <p className="font-jose font-normal text-[14px] text-[#FB2448] line-through">$52.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShopList