import React from 'react'
import { ArrowRightOutlined } from "@ant-design/icons"
import Sec4 from "../../../util/images/sec2_png/sec4.jpg"
import "./section4.scss"
const Section4 = () => {
    return (
        <div className='container'>
            <div className="sec4">
                <div className="sec4__top">
                    <span>Book an Eye Care</span>
                    <span>Appointment Today</span>
                </div>
                <div className="sec4__bottom">
                    <div >
                        <div className='sec4_title'>
                            <div className='sec4_title__top'>Cataract Surgery</div>
                            <div className='sec4_title__p'> Adipiscing elit pellentesque habitant morbi tristique senectus et. Gravida arcu ac tortor dignissim convallis</div>
                            <div>
                                Read More  <ArrowRightOutlined className='' />
                            </div>
                        </div>
                        <div className='sec4_title'>
                            <div className='sec4_title__top'>Cataract Surgery</div>
                            <div className='sec4_title__p'> Adipiscing elit pellentesque habitant morbi tristique senectus et. Gravida arcu ac tortor dignissim convallis</div>
                            <div>
                                Read More  <ArrowRightOutlined className='' />
                            </div>
                        </div>
                    </div>
                    <div className='imgSec2'> <img src={Sec4} alt="" /> </div>
                    <div >
                        <div className='sec4_title'>
                            <div className='sec4_title__top'>Cataract Surgery</div>
                            <div className='sec4_title__p'> Adipiscing elit pellentesque habitant morbi tristique senectus et. Gravida arcu ac tortor dignissim convallis</div>
                            <div>
                                Read More  <ArrowRightOutlined className='' />
                            </div>
                        </div>
                        <div className='sec4_title'>
                            <div className='sec4_title__top'>Cataract Surgery</div>
                            <div className='sec4_title__p'> Adipiscing elit pellentesque habitant morbi tristique senectus et. Gravida arcu ac tortor dignissim convallis</div>
                            <div>
                                Read More  <ArrowRightOutlined className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
