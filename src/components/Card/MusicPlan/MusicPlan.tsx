import React from "react"
import './MusicPlan.css'
import iconMusic from "../../../images/iconMusic";

const MusicPlan = () => {

    return (
        <div className='MusicPlan'>

            {iconMusic()}

            <div className='Text-Container'>
                <p className='Title'>Annual Plan</p>
                <p className='Price'>$59.99/year</p>
            </div>

            <a className='Hyperlink'>Change</a>

        </div>
    )
}

export default MusicPlan
