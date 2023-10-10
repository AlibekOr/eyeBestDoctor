import React from 'react'
import Logo from "../../../util/images/sec2_png/sec5.jpg"
import { DownCircleFilled, UpCircleFilled } from "@ant-design/icons"
import "./section5.scss"
const Section5 = () => {
    const [act, setAct] = React.useState({
        one: '',
        two: '',
        three: '',
    })
    const clickOne = () => {
        if (act.one === "") {
            setAct({
                one: 'active',
                two: '',
                three: '',
            })
        } else {
            setAct({
                one: '',
                two: '',
                three: '',
            })
        }
    }
    const clickTow = () => {
        if (act.two === "") {
            setAct({
                one: '',
                two: 'active',
                three: '',
            })
        } else {
            setAct({
                one: '',
                two: '',
                three: '',
            })
        }
    }
    const clickThree = () => {
        if (act.three === "") {
            setAct({
                one: '',
                two: '',
                three: 'active',
            })
        } else {
            setAct({
                one: '',
                two: '',
                three: '',
            })
        }
    }
    return (
        <div className='sec2_block'>
            <div className="container">
                <div className="sect5">
                    <div className="sect5__left">
                        <img src={Logo} alt="section5 images" />
                        <div className='sect5__left__div'>
                            <div>25K+</div>
                            <div>Consultations</div>
                        </div>
                    </div>
                    <div className="sect5__right">
                        <div className="sect5__right__top">
                            <p>Providing You With </p>
                            <p>Quality Eye Care</p>
                        </div>
                        <div className="sect5__right__buttom">
                            <div className='sect5__right__buttom__div'>
                                <div onClick={clickOne} className='sect5__right__buttom__div__titile'>
                                    <p>About Eye Care Center</p>
                                    <button > {act.one === 'active' ? <UpCircleFilled /> : <DownCircleFilled />}  </button>
                                </div>
                                <div className={`${act.one}`}>
                                    The eye doctors at eyecarecenter are here to help you with all of your eye care needs. Our highly trained eye care professionals focus on maintaining.
                                </div>
                            </div>
                            <div className='sect5__right__buttom__div'>
                                <div onClick={clickTow} className='sect5__right__buttom__div__titile'>
                                    <p>Our Eyecare Mission</p>
                                    <button onClick={clickTow}> {act.two === 'active' ? <UpCircleFilled /> : <DownCircleFilled />}  </button>
                                </div>
                                <div className={`${act.two}`}>
                                    eyecarecenter is on the leading edge of eye care and patient technology. We provide advanced diagnostic techniques, telemedicine.
                                </div>
                            </div>
                            <div className='sect5__right__buttom__div'>
                                <div onClick={clickThree} className='sect5__right__buttom__div__titile'>
                                    <p>Technologies in Opto</p>
                                    <button > {act.three === 'active' ? <UpCircleFilled /> : <DownCircleFilled />}  </button>
                                </div>
                                <div className={`show ${act.three}`}>
                                    Enjoy truly customized lenses optimized exclusively for your eyes by our eyecarecenter optical specialists. Our lenses are produced in a state-of-the-art laborator
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
