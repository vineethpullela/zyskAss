import "./index.css"
import Logomark from "../../asserts/Logomark.jpg";


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="products">

        
        <div className="product">
            <h1>Product</h1>
            <ul className="product-ls">
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
            </ul>
        </div>
        <div className="product">
            <h1>Company</h1>
            <ul className="product-ls">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Media Kit</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="product">
            <h1>Resources</h1>
            <ul className="product-ls">
                <li>Blog</li>
                <li>Newsletter</li>
                <li>Events</li>
                <li>Help centre</li>
                <li>Tutorials</li>
                <li>Support</li>
            </ul>
        </div>
        <div className="product">
            <h1>Use cases</h1>
            <ul className="product-ls">
                <li>Startups</li>
                <li>Enterprise</li>
                <li>Government</li>
                <li>saaS centre</li>
                <li>Marketplaces</li>
                <li>Ecommerce</li>
            </ul>
        </div>
        <div className="product">
            <h1>Social</h1>
            <ul className="product-ls">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribbble</li>
            </ul>
        </div>
        <div className="product">
            <h1>Legal</h1>
            <ul className="product-ls">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
        <div className="ft-container">
        <div className="logo-container">
            <img src={Logomark} className="logo" alt=""/>
            <p className="logo-name">Untitled UI</p>
        </div>
        <p>© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </div>)
}

export default Footer;


