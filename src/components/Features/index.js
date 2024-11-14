import "./index.css"
import share from "../../asserts/share.jpg";
import connect from "../../asserts/connect.jpg";
import answers from "../../asserts/answers.jpg";
import report from "../../asserts/report.jpg";
import people from "../../asserts/people.jpg";
import tools from "../../asserts/tools.jpg";

const Features = () => {
  return (
    <div className="container">
        <div className="header">
            <h2>Features</h2>
            <h1>Analytics that feels like it's from the future</h1>
            <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>

        <div className="feature-section"> 

            <div className="feature-card">
                <img src={share}  className="card-img" alt="Share Team Inboxes"/>
                <h3>Share team inboxes</h3>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            </div>

            <div className="feature-card">
                <img src={answers} alt="Deliver Instant Answers" className="card-img"/>
                <h3>Deliver instant answers</h3>
                <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            </div>

            <div className="feature-card">
                <img src={report} alt="Manage Your Team with Reports" className="card-img"/>
                <h3>Manage your team with reports</h3>
                <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in   
    a couple clicks.</p>
            </div>

            <div className="feature-card">
                <img src={connect}alt="Connect with Customers" className="card-img"/>
                <h3>Connect with customers</h3>
                <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email   
                    without confusion.</p>
            </div>

            <div className="feature-card">
                <img src={tools} alt="Connect the Tools You Already Use" className="card-img"/>
                <h3>Connect the tools you already use</h3>
                <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
            </div>

            <div className="feature-card">
                <img src={people} alt="Our People Make the Difference" className="card-img"/>
                <h3>Our people make the difference</h3>
                <p>We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
            </div>
        </div>
    </div> 
    
  )
}

export default Features
