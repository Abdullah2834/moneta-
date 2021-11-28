import React, {Component} from "react";
import HeaderComponent from "../components/home/headerComponent";
import BannerComponent from "../components/home/bannerComponent";


class HomePageComponent extends Component{
    render() {
        return (
            <>
                <HeaderComponent/>
                <BannerComponent/>
            </>
        );
    }
}

export default HomePageComponent;