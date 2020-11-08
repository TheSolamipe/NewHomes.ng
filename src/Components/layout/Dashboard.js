import React, {useEffect, useRef} from 'react'
import {connect} from "react-redux";
import PropTypes from"prop-types";
import {getProperties} from "../../actions/propertyActions";

import Navbar from "./Navbar";
import PropertyCard from "./../common/PropertyCard";
import Loading from "./../common/Loading";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import "./../../sass/main.scss";

function Dashboard(props) {

    //pulling information from newHomes using its API
    useEffect(props.getProperties, []);
    // console.log(props.property.profiles);

    
    const { properties, loading } = props.property;
        let propertyItems;

    if (properties === null || loading) {
      propertyItems = <Loading />;
    } else {
      if (properties.length > 0) {
        propertyItems = properties.map((property) => (
            <PropertyCard 
                src={property.property_image}
                title={property.property_neighborhood}
                price={property.property_price_raw}
                bed={property.property_bedrooms}
                bath={property.property_bathrooms}
                finance={property.title_docs}
                property={property.property_status}
                prop_title={property.property_has_mortgage}
                permit={property.property_has_permit}
                key={property.id}
                address={property.property_full_address}
            /> 
            ));
      } else {
        propertyItems = <h4>No property found...</h4>;
      }
    }
    
    const navRef = useRef(null);

    //This function handles the scrolling by incrementing or decrementing the scrollLeft property
    function handleClick(direction) {
      if(direction === "left"){
        if(navRef){navRef.current.scrollLeft -= 400} ;
      }else{
        if(navRef){navRef.current.scrollLeft += 400};
      }
    }


    return (
        <div className="dashboard">
            <Navbar />
            <h4 className="dashboard__header">Featured Properties</h4>
            <ArrowBackIosIcon className="dashboard__arrow-b dashboard__arrow" onClick={() => handleClick("left")}/>
            <ArrowForwardIosIcon className="dashboard__arrow-f dashboard__arrow" onClick={() => handleClick("right")}/>
            <div className="dashboard__row" ref={navRef}>
            {propertyItems}
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    property: PropTypes.object.isRequired,
    getProperties: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    property: state.property,
  });
  
  export default connect(mapStateToProps, { getProperties})(Dashboard);
