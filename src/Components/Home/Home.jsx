
import logo from '../../assets/avataaars.svg'
import './Home.css'

export default function Home() {
    return (
        <section className="home bg-green-color xy-center">
            <div className=' py-5'>
                <div className="container xy-center">
                    <div className="home-caption text-white text-center text-white position-relative z-0">
                        <img src={logo} className=' mb-3' alt="smiling boy"/>
                        <h2 className=' h1 fw-bold text-uppercase'>start framework</h2>
                        <span className='special-wrap d-inline-block bg-green-color position-relative fs-5 mb-3' style={{width : '70px'}}>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
