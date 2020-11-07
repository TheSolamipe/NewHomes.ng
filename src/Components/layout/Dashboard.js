import React from 'react'
import Navbar from "./Navbar";
import PropertyCard from "./../common/PropertyCard";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import $ from 'jquery';

import "./../../sass/main.scss";

function Dashboard(props) {
    var view = $(".dashboard__row");
    var move = "100px";
    var sliderLimit = -750;

    $("dashboard__arrow-b").on("click", function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

    });

    $("dashboard__arrow-f").on("click", function(){

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400});

    });


    return (
        <div className="dashboard">
            <Navbar />
            <h4 className="dashboard__header">Featured Properties</h4>
            <ArrowBackIosIcon className="dashboard__arrow-b dashboard__arrow"/>
            <ArrowForwardIosIcon className="dashboard__arrow-f dashboard__arrow"/>
            <div className="dashboard__row">
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="$130/night"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                /> 
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="#35,000,000"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                /> 
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="#35,000,000"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                /> 
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="#35,000,000"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                />
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="#35,000,000"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                /> 
                <PropertyCard 
                    src="./../../image.jpg"
                    title="nice one"
                    description="Superhot with a stunning view of the beachside in Sunny Bournemouth."
                    price="#35,000,000"
                    bed="4bed"
                    bath="3-4ba"
                    finance="Not Available"
                    property="Under Construction"
                    prop_title="23"
                    permit="54"
                />
            </div>
            
        </div>
    )
}

export default Dashboard
