import React, { Fragment } from "react";
import Text from './Text';
import Brush1 from '../assets/images/Brush_1_.png';
import Quote from '../assets/images/Group 1346.png';
import TestimonialImage from '../assets/images/testimonial-image.png';

function Testimonials(){
    return(
        <Fragment>
          <div className="col-sm-12 col-xs-12">
            <section className="want-to-eat">
              <Text
                heading="Client Testimonials"
                imgSrc={Brush1}
                description="Try our Most Delicious food and it usually take minutes to deliver!"
              />
            </section>
          </div>
          <div className="col-sm-12">
            <div className="testimonial-container">
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-sm-offset-1 col-md-9 col-md-offset-3 col-lg-4 col-lg-offset-1 pos-relative" >
                  <div>
                    <div className="testimonial-bg"></div>
                    <img className="testimonial-image" src={TestimonialImage} alt="" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-9 col-md-offset-1 col-lg-6">
                  <div className="testimonial">
                    <img width={50} height={42} src={Quote} alt="" />
                    <p className="comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <p className="author pos-relative"><span>Nina Margaret</span></p>
                    <p className="author-detail">CEO, Abc Company</p>
                  </div>              
                </div>
              </div>
            </div>
          </div>
        </Fragment> 
    )
}

export default Testimonials;