import Photo1 from "../../../asset/bannerCarousl/1.jpg"
import Photo2 from "../../../asset/bannerCarousl/2.jpg"
import Photo3 from "../../../asset/bannerCarousl/3.jpg"
import Photo4 from "../../../asset/bannerCarousl/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img  src={Photo1} className="w-full h-[500px] rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
       <img src={Photo2} className="w-full h-[500px] rounded-xl"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
           </div>
          </div> 

        <div id="slide3" className="carousel-item relative w-full">
          <img src={Photo3} className="w-full h-[500px] rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Photo4} className="w-full h-[500px] rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;