import React from "react";

const VehicleCard = (props) => {
  return (
    props.vehicle ?
      <div className="vehicle-card">
        <img className="vehicle-card--image" src={props.vehicle.media[0].url} alt={props.vehicle.id} />
        <div className="vehicle-card--body">
          <div className="title">{props.vehicle.id}</div>
          <div className="price">From {props.vehicle.details ? props.vehicle.details.price : "-"}</div>
          <div className="description">{props.vehicle.details ? props.vehicle.details.description : "-"}</div>
        </div>
      </div >
      : null
  )
}

export default VehicleCard;
