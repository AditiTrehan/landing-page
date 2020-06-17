import React,{Fragment} from "react";
import Header from './Header';
import WhitePattern from '../assets/images/Group 1390.png';

function Jumbotron(){
    return(
        <Fragment>
            <div className="jumbotron">
                <Header/>
                <div className="jumbotron-text">
                    <div className="col-sm-6 col-sm-offset-2 col-md-6 col-md-offset-1 col-lg-4">
                    <p className="party-time">Party Time!</p>
                    <div className="offer-text">
                        <p>Buy any 2 burgers and get 1.5L Pepsi Free</p>
                    </div>
                    <button className="order-now-btn">
                        Order now
                        <span><i className="fa fa-arrow-right right-arrow" aria-hidden="true"></i></span>
                    </button>
                    </div>
                </div>
            </div>
            <div>
                <img className="white-pattern" src={WhitePattern} alt=''></img>
            </div>
        </Fragment>
    )
}

export default Jumbotron;