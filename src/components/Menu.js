import React,{Fragment} from "react";
import { foodItems} from '../constants';
import Text from './Text';
import Brush1 from '../assets/images/Brush_1_.png';

function Menu(){
    return(
        <Fragment>
            <div className="col-sm-12 col-xs-12">
                <section className="want-to-eat">
                    <Text
                        heading="Want to Eat?"
                        imgSrc={Brush1}
                        description="Try our Most Delicious food and it usually take minutes to deliver!"
                    />
                    <div className="col-sm-12 food-items-container">
                        <div className="row">
                            {
                                foodItems.map((item,key) => {
                                    return (
                                    <div className="col-md-2 col-sm-4 col-xs-6" key={key}>
                                        <div className="food-item">
                                        <img src={item.icon} alt="food-icon" />
                                        <span>{item.title}</span>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Menu;