import "./index.css"
import design from "../../asserts/img2.jpg"
import dp from "../../asserts/dp.jpg";
import product from "../../asserts/img1.jpg";
import se from "../../asserts/img3.jpg";

import { RiArrowRightUpLine } from "react-icons/ri";



const OurBlogs = () => {
  return( 
  <div className="ourblogs-container">
    <div className="ourblogs-headers">
        <div className="ourblogs-content">
            <span>Our blog</span>
            <h2>Latest blog posts</h2>
            <p>tool and strategise modern teams need to help their companies grow.</p>
        </div>
        <button type="button">View all posts</button>
    </div>
    <div className="ourbolg-cards">
        <div className="ourblog-card">
            <img src={design} className="ourblog-card-img" alt=""/>
            <h3>Design</h3>
            <div className="blog-sub">
                <h2>UX review presentations</h2>
                <RiArrowRightUpLine size={25}/>
            </div>
            <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

            <div className="ourblog-dp">
                <img src={dp} className="ourblog-dp-img" alt=""/>
                <div>
                    <h2>Olivia Rhya</h2>
                    <p>20 jan 2024</p>
                </div>
            </div>
           
        </div>

        <div className="ourblog-card">
            <img src={product} className="ourblog-card-img" alt=""/>
            <h3>Product</h3>
            <div className="blog-sub">
                <h2>Migrating to Linear 101</h2>
                <RiArrowRightUpLine size={25}/>
            </div>
            <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>

            <div className="ourblog-dp">
                <img src={dp} className="ourblog-dp-img" alt=""/>
                <div>
                    <h2>Phonenix Baker</h2>
                    <p>19 jan 2024</p>
                </div>
            </div>
           
        </div>

        <div className="ourblog-card">
            <img src={se} className="ourblog-card-img" alt=""/>
            <h3>Software Engineering</h3>
            <div className="blog-sub">
                <h2>Building your API stack</h2>
                <RiArrowRightUpLine size={25}/>
            </div>
            <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>

            <div className="ourblog-dp">
                <img src={dp} className="ourblog-dp-img" alt=""/>
                <div>
                    <h2>Lana Steiner</h2>
                    <p>18 jan 2024</p>
                </div>
            </div>
           
        </div>

    </div>

  </div>
  )

}

export default OurBlogs;
