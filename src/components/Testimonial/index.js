import "./index.css";
import testimonial from "../../asserts/testimonial.jpg";
import dp from "../../asserts/dp.jpg";


const Testimonial = () => {
  return (
    <div class="testimonial-container">
    <img src={testimonial} className=""test-img alt=""/>
    <div class="testimonial-content">
      <p className="test-heading">We've been using Untitled to kick start every new project and can't imagine working without it.</p>
    </div>
    <div class="testimonial-author">
      <img src={dp} alt="Candice Wu"/>
      <p className="author-p">Candice Wu</p>
      <p>Product Manager, Sisyphus</p>
    </div>
  </div>
  )
}



export default Testimonial;