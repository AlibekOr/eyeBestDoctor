import React from 'react'
import "./section2.scss"
const data = [
    { id: '01', titile: 'Eye Exams', img: 'ds', dec: 'Quis risus sed vulputate odio ut. Vitae elementum curabitur vitae nunc velit' },
    { id: '02', titile: 'Retina Repair', img: 'ds', dec: 'Tortor id aliquet lectus proin nibh nisl condimentum gravida rutrum quisque' },
    { id: '03', titile: 'Dry Eye Surgery', img: 'ds', dec: 'Faucibus turpis in eu mi bibendum neque egestas congue in dictum non consectetur' },
    { id: '04', titile: 'Laser Eye Surgery', img: 'ds', dec: 'Dapibus ultrices in iaculis nunc sed. Non diam phasellus vestibulum lorem sed risus ultricies' },
    { id: '05', titile: 'Optical Service', img: 'ds', dec: 'Ultrices neque ornare aenean euismod elementum. Integer feugiat scelerisque varius' },
    { id: '06', titile: 'Surgical Procedure', img: 'ds', dec: 'Massa enim nec dui nunc mattis enim ut tellus. Adipiscing diam donec adipiscing tristique' },
]
const Section2 = () => {
    return (
        <div className='container'>
            <div className='sec2_titile'>
                <span>
                    <span>Our Eye </span> <span>Care Services</span>
                </span>
                <span>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <div>
                            <div> {item.titile}</div>
                            <div> {item.id}</div>
                        </div>
                        <div> <img src={item.img} alt="foto" /> </div>
                        <div> {item.dec} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Section2
