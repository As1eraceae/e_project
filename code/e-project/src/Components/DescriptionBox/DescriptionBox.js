import React from "react";
import './DescriptionBox.css'

const DescriptionBox=()=>{
    return(
        <div className="box">
            <div className="nav">
                <div className="nav-box">Description</div>
                <div className="nav-box-fade">Review (403)</div>
            </div>
            <div className="description">
                <p>COOL</p>
                <p>GOOD</p>
            </div>
        </div>
    )
}
export default DescriptionBox;