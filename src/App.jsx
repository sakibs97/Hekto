import Banner from "./components/Banner"
import DiscountItem from "./components/DiscountItem"
import FeaturedPro from "./components/FeaturedPro"
import Footer from "./components/Footer"
import GetUpdate from "./components/GetUpdate"
import Header from "./components/Header"
import LatestProduct from "./components/LatestProduct"
import LeatestBlog from "./components/LeatestBlog"
import Navbar from "./components/Navbar"
import Shopex from "./components/Shopex"
import TopCategories from "./components/TopCategories"
import TreandingPro from "./components/TreandingPro"


function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <FeaturedPro />
      <LatestProduct />
      <Shopex />
      <TreandingPro />
      <DiscountItem />
      <TopCategories />
      <GetUpdate />
      <LeatestBlog />
      <Footer />
    </>
  )
}

export default App
