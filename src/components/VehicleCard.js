import React from "react";

const VehicleCard = (props) => {
  return (
    props.vehicle ?
      <div className="">
        <img className="" src={props.vehicle.media[0].url} alt="" />
        <div className="">{props.vehicle.id}</div>
        <div className="">{props.vehicle.details ? props.vehicle.details.description : "-"}</div>
        <div className="">{props.vehicle.details ? props.vehicle.details.price : "-"}</div>
      </div >
      : null
  )
}

export default VehicleCard;