import React from 'react'
import { Carousel } from 'antd';
import "./section6.scss"
import Img2 from "../../../util/images/sec6_img1.jpg"

const Section6 = () => {
    return (
        <div className='sec2_block'>
            <div className="">
                <div className="sect6">
                    <div className='sect6__titile'>
                        <div >Our Reviews</div>
                        <div>
                            Dapibus ultrices in iaculis nunc sed. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla
                        </div>
                    </div>
                    <div className='carusel'>
                        <Carousel className='carusel__inner' slidesToShow={3} slickGoTo={1} dots autoplay>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='carusel__inner__div'>
                                <div>Very professional eye exam</div>
                                <div>« The staff and doctors are friendly and knowledgeable they want you to be as healthy and comfortable »</div>
                                <div >
                                    <div> <img className='imges' src={Img2} alt="" /> </div>
                                    <div className='spanInners'>
                                        <span>Kristen L.</span>
                                        <span> Google Reviewer</span>
                                    </div>
                                </div>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
