import React, { Fragment, Component } from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import quotes from './images/quotes.svg';

export default function TestimonialCarousel(props) {

    var carouselButtonLeftStyle = {
        borderRadius:"32px 0 0 32px",
        background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)",
        boxShadow: "0px 3px 6px #0BB7CE34"
    }

    var carouselButtonRightStyle = {
        borderRadius:"0 32px 32px 0",
        background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)",
        boxShadow: "0px 3px 6px #0BB7CE34"
    }

    return (
        <Fragment>
            <div style={{display: "grid", gridTemplateColumns: "28% 72%", marginLeft: "9.8%", marginRight: "9.8%"}}>
                <div style={{ display: "grid", gridTemplateColumns: "49.5% 1% 49.5%", width:"175px", height:"63px"}}>
                    <Button variant="link" size="sm" style={carouselButtonLeftStyle}>
                        <BsArrowLeftShort style={{color: "#FFFFFF", width: "50px", height: "50px"}}></BsArrowLeftShort>
                    </Button> 
                    <div style={{paddingTop: "13.5px", paddingBottom:"13.5px", background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)"}}>
                        <div style={{height: "36px", width:"0px", border: "1px solid #FFFFFF"}}></div>
                    </div>
                    <Button variant="link" size="sm" style={carouselButtonRightStyle}>
                        <BsArrowRightShort style={{color: "#FFFFFF", width: "50px", height: "50px"}}></BsArrowRightShort>
                    </Button> 
                </div>
                <div style={{boxShadow: "0px 10px 20px #0BB7CE34", borderRadius: "60px", background: "#FFFFFF", padding: "4.4%", paddingRight: "4.4%"}}>
                    <img src={quotes} />
                    <h1 style={{font:"Poppins", fontSize:"30px", fontWeight:"400", marginTop: "78px"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et</h1>
                    <h1 style={{font:"Poppins-bold", fontSize:"30px", fontWeight:"700", marginTop: "50px"}}>Mr John Doe</h1>
                    <h1 style={{font:"Poppins", fontSize:"30px", fontWeight:"400", color:"#0BB7CE", marginTop: "3px"}}>Managing director</h1>
                </div>
            </div>
        </Fragment>
    );
}