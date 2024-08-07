import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import './Portfolio.css'


export default function Portfolio() {
    return (
        <section className="portfolio py-5">
            <div className="container position-relative z-0">
                <h2 className=' h1 text-center fw-bold  text-uppercase'>portfolio</h2>
                <span className='special-wrap d-block bg-white text-center position-relative fs-5 mb-3 mx-auto' style={{width : '70px'}}>
                            <i className="fa-solid fa-star"></i>
                </span>
                <div className="row g-4 mt-0">
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port1} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port2} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port3} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port1} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port2} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="inner position-relative rounded overflow-hidden">
                            <img src={port3} className=' w-100' alt="" />
                            <div className="overlay position-absolute top-0 start-0 w-100 h-100 xy-center text-white">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
