import React from 'react'
import "./../../sass/main.scss";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';

function PropertyCard({title, description, src, price, bed, bath, finance, property, permit}) {
    return (
            <div className="card">
                <FavoriteBorderIcon className="card__likes"/>
                <img src={src} alt={title} />
                <div className="card__info">
                    <h3>{price}</h3>
                    <div className="card__info--room">
                        <div className="card__info--room-bed">
                            <SingleBedIcon/>
                            <span>{bed}</span>
                        </div>
                        <div className="card__info--room-bath">
                            <BathtubIcon />
                            <span>{bath}</span>
                        </div>
                    </div>
                    <h4>{description}</h4> 
                    <div className="card__status">
                        <h4 className="card__status--finance">
                            Finance Status<br/><span>{finance}</span>
                        </h4>
                        <h4 className="card__status--prop">
                            Property Status<br/><span>{property}</span>
                        </h4>
                    </div>
                    <div className="card__check">
                        {/* <div className="card__check--title">
                            <h4>Property title</h4>
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                             <span>{prop_title}</span>
                        </div> */}
                        <div className="form-group">
                            <div className="form-check card__check--title">
                                <label className="form-check-label" for="gridCheck">
                                    Property title
                                </label>
                                <input className="form-check-input card__input" type="checkbox" id="gridCheck" disabled/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check card__check--title">
                                <label className="form-check-label" for="gridCheck">
                                    Building Permit
                                </label>
                                <input className="form-check-input card__input" type="checkbox" id="gridCheck" checked/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PropertyCard
