import React, {Component} from 'react';
import {ASSETS} from "../../constants/paths";
class BannerComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentImage:0,
            images:[
                {
                    image1:"http://localhost:3000/assets/img/slide-img/banner-slide-1.png"
                },
                {
                    image2:"http://localhost:3000/assets/img/slide-img/banner-slide-2.png"
                },
                {
                    image3:"http://localhost:3000/assets/img/slide-img/banner-slide-3.png"
                },
                {
                    image4:"http://localhost:3000/assets/img/slide-img/banner-slide-4.png"
                }
            ]
        }
    }

    // componentDidMount() {
    //     setInterval(this.switchImage,1000);
    // }

    // images=[
    //         {
    //             id:1,
    //             image:"http://localhost:3000/assets/img/slide-img/banner-slide-1.png"
    //         },
    //         {
    //             id:2,
    //             image:"http://localhost:3000/assets/img/slide-img/banner-slide-2.png"
    //         },
    //         {
    //             id:3,
    //             image:"http://localhost:3000/assets/img/slide-img/banner-slide-3.png"
    //         },
    //         {
    //             id:4,
    //             image:"http://localhost:3000/assets/img/slide-img/banner-slide-4.png"
    //         },
    // ]

    render() {
        return (
            <div className="banner-root">
                <div className="banner-container safe-area">
                     <div className="text-block">
                        <h1>Lorem ipsum dose adipiscing.</h1>
                         <p>Lorem ipsum idenatore sit ameite, de cas consecteture and golem piscing elit.
                        Sit mauris volutpate diam eleifend donec pretium ut risus, sed.
                        Urna nisi, tellus un de porttitor et sed  gratdedimato gielething et at mauris.</p>
                         <div className="btn-item">
                             <img src={`${ASSETS}/img/btn-image.png`} alt=""/>
                             <div className="btn-text">
                                 <p className="text-item">Learn More</p>
                             </div>

                         </div>
                    </div>
                            <div className="banner-image-block">
                                <div className="banner-item">
                                    <img src={`${this.}`} alt="banner"/>
                                </div>
                                <div className="icon-block">
                                    <img src={`${ASSETS}/img/icons/arrow-up.png`} onClick={()=>this.slidePrev()} alt=""/>

                                    <img src={`${ASSETS}/img/icons/arrow-down.png`}  onClick={()=>this.slideNext()} alt=""/>
                                </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default BannerComponent;