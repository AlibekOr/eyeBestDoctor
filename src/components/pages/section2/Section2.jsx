import React from 'react'
import { datajs } from './datajs'
import { ArrowRightOutlined } from "@ant-design/icons"
import "./section2.scss"

const Section2 = () => {
    console.log(datajs);
    return (
        <div className='container'>
            <div className='sec2_titile'>
                <span>
                    <span className='sec2_t'>Our Eye </span> <span className='sec2_t sec2_ti'>Care Services </span>
                </span>
                <span className='sec2_s'>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
            </div>
            <div>
                {datajs.map((item) => (
                    <div key={item.id}>
                        <div>
                            <div> {item.titile}</div>
                            <div> {item.id}</div>
                        </div>
                        <div> <img src={item.img} alt="foto" /> </div>
                        <div> {item.dec} </div>
                        <div>
                            <button>Read More</button>
                            <ArrowRightOutlined />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2
