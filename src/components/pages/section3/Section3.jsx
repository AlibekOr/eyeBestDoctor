import React from 'react'
import { CheckCircleFilled, PlayCircleFilled } from "@ant-design/icons"
import "./section3.scss"
import ImgSect3 from "../../../util/images/sec2_png/sec3.jpg"
import { NavLink } from 'react-router-dom'
const Section3 = () => {
    return (
        <div className='sec2_block'>
            <div className="container">
                <div className="sect3">
                    <div className="sect3__left">
                        <div>
                            <span>Getting Better</span>
                            <span>Visual Field Results</span>
                        </div>
                        <div>Quis risus sed vulputate odio ut. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Orci ac auctor augue mauris augue neque gravida. Nisi est sit amet facilisis magna etiam. Enim praesent elementum</div>
                        <div>
                            <ul>
                                <li><CheckCircleFilled className='checkcircle' /> V.EYE.P 360 Exams</li>
                                <li> <CheckCircleFilled className='checkcircle' /> Eye Care at Every Age </li>
                                <li><CheckCircleFilled className='checkcircle' /> Eyeglasses and Contact Lenses</li>
                            </ul>
                        </div>
                        <div>
                            <NavLink className='navSec3' to='#'>Make an Appointment</NavLink>
                        </div>
                    </div>
                    <div className="sect3__right">
                        <img src={ImgSect3} alt="" />
                        <PlayCircleFilled className='pngPlayers' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
