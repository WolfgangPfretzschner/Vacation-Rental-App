import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";

export default class CenterMode extends Component {
    constructor(props){
        super(props)
        this.state={
            picsSrc: this.props.pics
        }
    }
    
    picsMaker = () => 
        this.props.pics !== undefined ? 
        this.props.pics.map(pic => {return (pic.prefix+"height200"+pic.suffix)}) :
        null
        
    // componentDidUpdate() {
        
    //     if(this.props.pics !== this.state.picsSrc){
    //         this.setState({picsSrc: this.props.pics}, //console.log("%cslider did  update","color:pink;font-size:14px",this.props.pics))
    //     }
    // }
    // pics = ["a","b" ,"c", "d"]
    
    render() {
        //console.log("%cnewSlides in MySlider","color:pink;font-size:14px",this.props.pics)
        const pics = this.picsMaker()
        
        const settings = {
            autoplay: true,
            autoplaySpeed: 1000,
            dots: false,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
        };
        return (
        <div>
            {/* <h2>Custom Paging</h2> */}
            <Slider {...settings}>
            <div>
                <img src={pics[0]} alt={"alt"}/>
            </div> 
            <div>
                <img src={pics[1]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[2]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[3]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[4]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[5]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[6]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[7]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[8]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[9]} alt={"alt"}/>
            </div>
            <div>
                <img src={pics[10]} alt={"alt"}/>
            </div>
            </Slider>
        </div>
        );
    }
}
