import React from 'react'
import Logo1 from "../../../util/style/page1.jpg"
import Logo2 from "../../../util/style/page2.jpg"
import Logo3 from "../../../util/style/page3.jpg"
import "./section1.scss"
const Section1 = () => {
    return (
        <div className='secCon '>
            <div className='secConT'>
                <div className='secTitle '>
                    <h1 className='secH1'>
                        <span className='spanFont'>The Best Eye</span>
                        <span className='spanFonts'>Doctors & Technology</span>
                    </h1>
                    <div className='sec1_buttom'>
                        <div className='sec1_but_div'>
                            <h3 className='sec1_but_h3'>50% Off Frame + Lenses</h3>
                            <span className='sec1_span'>Elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet placerat</span>
                        </div>
                        <img className='sec1_but_img' src={Logo3} alt="" />
                    </div>
                </div>
                <div className='secImgaes'>
                    <div className='secImIn'>
                        <img src={Logo1} className='imgSec1 lg1' alt="" />
                        <img src={Logo2} className='imgSec1 logoSec1' alt="" />
                        <span className='secImSpan'>
                            <h1 className='secImH1'>550+</h1>Successfully Eye Surgery
                        </span>
                    </div>
                    <ul className='secUl'>
                        <li className='secULLi'>40+</li>
                        <li>High Qualified Doctors</li>
                        <li className='secULLi'>99%</li>
                        <li>Positive Feedback</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Section1
