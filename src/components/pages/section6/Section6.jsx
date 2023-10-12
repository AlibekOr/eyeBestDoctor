import React from 'react'
import { Carousel } from 'antd';
import "./section6.scss"
const Section6 = () => {
    return (
        <div className='sec2_block'>
            <div className="container ">
                <div className="sect6">
                    <div className='sect6__titile'>
                        <div >Our Reviews</div>
                        <div>
                            Dapibus ultrices in iaculis nunc sed. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla
                        </div>
                    </div>
                    <div className='carusel'>
                        <Carousel className='carusel__inner' slidesPerRow={1} slidesToShow={3} dots autoplay>
                            <div className='carusel__inner__div'>
                                hello world 1
                            </div>
                            <div className='carusel__inner__div'>
                                hello world 2
                            </div>
                            <div className='carusel__inner__div'>
                                hello world 3
                            </div>
                            <div className='carusel__inner__div'>
                                hello world   4
                            </div>
                            <div className='carusel__inner__div'>
                                hello world 5
                            </div>
                            <div className='carusel__inner__div'>
                                hello world 7
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6
