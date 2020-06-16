import React from "react";
import YellowPattern from '../assets/images/Group 1397.png'
import WhitePattern from '../assets/images/Group 1419.png'
import { featureItems } from "../constants";

function Features(){
    return(
        <div className="col-sm-12 pos-relative">
          <section className="feature-container">
            <div>
              <img className="yellow-pattern" src={YellowPattern} alt=''></img>
            </div>
            <div className="col-sm-12 feature">
                <div className="row">
                    {
                    featureItems.map((item,key)=>{
                        return(
                        <div className="col-sm-2 col-md-4 col-lg-4 col-xl-2 col-xs-12" key={key}>
                            <div className="feature-card">
                                <img src={item.img} alt="feature"></img>
                                <p className="m-0">{item.title}</p>
                                <div className="d-flex justify-content-center">
                                    <span className="card-rect"></span>
                                </div>
                                <span>{item.description}</span>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
          </section>
          <img src={WhitePattern} alt="" className="white-pattern-bottom" />
        </div>
        
    )
}

export default Features;