import React from "react";

const Card = (props) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card text-center h-100">
                <img src={props.image} className="card-img-top" alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text"> {props.description}</p>
                    <a href="#" className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        </div>
    );
};
export default Card; 