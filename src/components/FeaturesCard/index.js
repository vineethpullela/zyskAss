import "./index.css";
import content from "../../asserts/Content.jpg";
import share from "../../asserts/share.jpg";
import answers from "../../asserts/answers.jpg";
import report from "../../asserts/report.jpg";

const FeaturesCard = () => {
  return (
    <div className="fc-container">
        <div className="fc-header">
            <h2>Features</h2>
            <h1>Cutting-edge features for advanced analytics</h1>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <img src={content} alt="" className="fc-main-img"/>
        </div>

        

    <div className="fc-section">

        <div className="fc">
            <img src={share} alt="Share Team Inboxes" className="fc-img"/>
            <h3>Share team inboxes</h3>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>   
           
        </div>

        <div className="fc">
            <img src={answers} alt="Deliver Instant Answers" className="fc-img" />
            <h3>Deliver instant answers</h3>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>   
            
        </div>

        <div className="fc">
            <img src={report} alt="Manage Your Team with Reports" className="fc-img"/>
            <h3>Manage your team with reports</h3>
            <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            
        </div>

        
  </div>
  </div>
  )
}



export default FeaturesCard


/*<a >Learn more →</a>*/