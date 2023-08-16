import MusicPlan from "./MusicPlan/MusicPlan";
import Payment from "./Payment/Payment";
import "./Card.css"
import illustrationHero from "../../images/illustration-hero.svg";

const Card = () => {
    return (
        <div className='Card-Outer'>

            <div className='Card'>
                <img src={illustrationHero} alt='Person dancing to music' className="illustration-hero"/>
                <div className='Container'>

                    <p className="Title"> Order Summary</p>
                    <p className="Summary"> You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                    <MusicPlan/>
                    <Payment/>
                    <p className='Cancel'>Cancel Order</p>
                </div>
            </div>

        </div>
    )
}

export default Card
