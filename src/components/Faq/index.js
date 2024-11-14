import "./index.css"
import { CiCirclePlus } from "react-icons/ci";
import getintouchAv from "../../asserts/getintouchAv.jpg"
import { CiCircleMinus } from "react-icons/ci";
const Faq = () => {
  return( 
    <div class="faq-container">
        <div class="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about the product and billing.</p>
        </div>
    
        <div className="faq-question">
            <div className="faq-content"> 
            <h2>Can I change y plan later?</h2>
            <CiCircleMinus size={20}/>
            </div>
            <p>Yes, you can try us for free for 30 days, if you want, we'll provide you with a free, presonalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>

        <div className="faq-question">
            <div className="faq-content"> 
            <h2>What is your cancellation policy?</h2>
            <CiCirclePlus size={20}/>
            </div>
            <p></p>
        </div>

        <div className="faq-question">
            <div className="faq-content"> 
            <h2>Can other info be added to an invoice?</h2>
            <CiCirclePlus size={20}/>
            </div>
            <p></p>
        </div>

        <div className="faq-question">
            <div className="faq-content"> 
            <h2>How does billing work?</h2>
            <CiCirclePlus size={20}/>
            </div>
            <p></p>
        </div>

        <div className="faq-question">
            <div className="faq-content"> 
            <h2>How do i change my account email?</h2>
            <CiCirclePlus size={20}/>
            </div>
            <p></p>
        </div>


        <div className="get-intouch-section">
            <img src={getintouchAv} className="get-intouch-img" alt=""/>
            <h2>Still have Questions?</h2>
            <p>Can't find the answer your're looking for? People chat to our friend team.</p>
            <button type="button">Get in touch</button>
        </div>
            

       
</div>

)
}

export default Faq

