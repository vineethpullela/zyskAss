import "./index.css"
import { GoArrowRight } from "react-icons/go";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import conatiner from "../../asserts/Container.jpg";
import boltshift from "../../asserts/boltshift.jpg";
import lightbox from "../../asserts/lightbox.jpg";
import featherdev from "../../asserts/featherdev.jpg";
import spherule from "../../asserts/spherule.jpg";
import globalbank from "../../asserts/globalbank.jpg";
import nietzsche from "../../asserts/nietzsche.jpg";


const Home=()=> {
  return (
    <div className="home-container">
        <div className="new-feature-container">
            <button type="button" className="new-btn">New feature</button>
            <p className="new-p">Check out the team dashboard </p>
            <GoArrowRight size={25} className="arrow"/>
        </div>
        <p className="home-heading">Beautiful analytics to grow smarter</p>
        <p className="home-par">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users, Trusted by over 4,000 startups.</p>
        <div className="home-btn-container">
            <button className="demo-btn"><MdOutlineSlowMotionVideo size={15}/>Demo</button>
            <button className="sign-btn">Sign up</button>
        </div>
        <img src={conatiner} className="demo-img" alt=""/>
        <p>Join 4,00+ companies already growing</p>

        <div className="social-container">
            <img src={boltshift} className="social-img" alt=""/>
            <img src={lightbox} className="social-img" alt=""/>
            <img src={featherdev} className="social-img" alt=""/>
            <img src={spherule} className="social-img" alt=""/>
            <img src={globalbank} className="social-img" alt=""/>
            <img src={nietzsche} className="social-img" alt=""/>
        </div>
    </div>
  )
}

export default Home
