
import './About.css'

export default function About() {
    return (
        <section className='about bg-green-color py-5 xy-center'>
            <div className="container d-flex justify-content-center py-5">
                <div className="about-caption text-white position-relative z-0 text-center py-5">
                    <h2 className=' text-uppercase fw-bold'>about component</h2>
                    <span className='special-wrap d-inline-block bg-green-color position-relative fs-5 mb-3 text-center' style={{ width: '70px' }}>
                        <i className="fa-solid fa-star"></i>
                    </span>
                    <div className="row m-0 g-4  text-md-start text-center w-50 mx-auto">
                        <div className="col-md-6">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                        <div className="col-md-6">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
