import React from 'react'
import { datajs } from './datajs'
import { ArrowRightOutlined } from "@ant-design/icons"
import { NavLink } from "react-router-dom"
import "./section2.scss"

const Section2 = () => {
    return (
        <div className="sec2_block">
            <div className='container '>
                <div className='sec2_titile'>
                    <span>
                        <span className='sec2_t'>Our Eye </span> <span className='sec2_t sec2_ti'>Care Services </span>
                    </span>
                    <span className='sec2_s'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
                </div>
                <div className='sec2'>
                    {datajs.map((item) => (
                        <div className='sec2__fotoInner' key={item.id}>
                            <div className='sec2__fotoInner__titile'>
                                <div> {item.titile}</div>
                                <div> {item.id}</div>
                            </div>
                            <div> <img className='sec2__fotoInner_img' src={item.img} alt="foto" /> </div>
                            <div> {item.dec} </div>
                            <div>
                                <NavLink className='nav' to={'/'}>Read More <ArrowRightOutlined className='icons' /></NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section2
