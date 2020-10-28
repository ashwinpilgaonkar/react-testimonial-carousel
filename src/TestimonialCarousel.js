import React, { Fragment, Component } from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import quotes from './images/quotes.svg';

export default function TestimonialCarousel(props) {

// ==================
//  DEFAULT STYLES
// ==================

    var parentContainerStyle = {
        display: "grid",
        gridTemplateColumns: "28% 72%",
        marginLeft: "9.8%",
        marginRight: "9.8%"
    }

    var buttonContainerStyle = {
        display: "grid",
        gridTemplateColumns: "49.5% 1% 49.5%",
        width:"175px",
        height:"63px"
    }

    var carouselButtonLeftStyle = {
        borderRadius:"32px 0 0 32px",
        background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)",
        boxShadow: "0px 3px 6px #0BB7CE34"
    }

    var arrowStyle = {
        color: "#FFFFFF",
        width: "50px",
        height: "50px"
    }

    var carouselButtonRightStyle = {
        borderRadius:"0 32px 32px 0",
        background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)",
        boxShadow: "0px 3px 6px #0BB7CE34"
    }

    var buttonSeparatorOuterStyle = {
        paddingTop: "13.5px",
        paddingBottom:"13.5px",
        background: "transparent linear-gradient(180deg, #2AB7EF 0%, #1EA4E1 100%)"
    }

    var buttonSeparatorInnerStyle = {
        height: "36px",
        width:"0px",
        border: "1px solid #FFFFFF"
    }

    var textContainerStyle = {
        boxShadow: "0px 10px 20px #0BB7CE34",
        borderRadius: "60px",
        background: "#FFFFFF",
        padding: "4.4%",
        paddingRight: "4.4%"
    }

    var mainTextStyle = {
        font:"Poppins",
        fontSize:"30px",
        fontWeight:"400",
        marginTop: "78px"
    }

    var nameTextStyle = {
        font: "Poppins-bold",
        fontSize: "30px",
        fontWeight:"700",
        marginTop: "50px"
    }

    var designationTestStyle = {
        font:"Poppins",
        fontSize:"30px",
        fontWeight:"400",
        color:"#0BB7CE",
        marginTop: "3px"
    }

// ==================
//       PROPS
// ==================

    return (
        <Fragment>
            <div style={parentContainerStyle}>
                <div style={buttonContainerStyle}>
                    <Button variant="link" size="sm" style={carouselButtonLeftStyle}>
                        <BsArrowLeftShort style={arrowStyle}></BsArrowLeftShort>
                    </Button> 
                    <div style={buttonSeparatorOuterStyle}>
                        <div style={buttonSeparatorInnerStyle}></div>
                    </div>
                    <Button variant="link" size="sm" style={carouselButtonRightStyle}>
                        <BsArrowRightShort style={arrowStyle}></BsArrowRightShort>
                    </Button> 
                </div>
                <div style={textContainerStyle}>
                    <img src={quotes} />
                    <h1 style={mainTextStyle}>{props.content.text}</h1>
                    <h1 style={nameTextStyle}>{props.content.name}</h1>
                    <h1 style={designationTestStyle}>{props.content.designation}</h1>
                </div>
            </div>
        </Fragment>
    );
}