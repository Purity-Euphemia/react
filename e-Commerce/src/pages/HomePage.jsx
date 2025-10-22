import React from "react";
import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const HomePage = () => {
    return(
   <div>
        <Header/>
        <div>
            <SideBar/>
            <AllProducts/>
        </div>
        <Footer/>
   </div>
    )
}
export default HomePage;