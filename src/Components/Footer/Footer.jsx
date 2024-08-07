import { useEffect, useState } from 'react'
import './Footer.css'


export default function Footer() {

    const [showRow, setShowRow] = useState('');
    
    useEffect(()=>{
        window.scroll(0, 5);
    }, []);


    window.addEventListener('scroll', function(){
        if(this.scrollY)
            setShowRow('show-row');
    })

    return (
        <footer className="footer">
            <div className='bg-blue-color text-white py-5'>
                <div className="container">
                    <div className={`row gy-5 ${showRow}`}>
                        <div className="col-lg-4  text-center">
                            <h2 className=' text-uppercase fw-bold'>location</h2>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-lg-4  text-center">
                            <h2 className=' text-uppercase fw-bold mb-3'>around the web</h2>
                            <ul className=' list-unstyled d-flex justify-content-center'>
                                <li className='  rounded-circle border border-1 border-white xy-center mx-1' style={{width : '40px', height : '40px'}}>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className='  rounded-circle border border-1 border-white xy-center mx-1' style={{width : '40px', height : '40px'}}>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </li>
                                <li className='  rounded-circle border border-1 border-white xy-center mx-1' style={{width : '40px', height : '40px'}}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </li>
                                <li className='  rounded-circle border border-1 border-white xy-center mx-1' style={{width : '40px', height : '40px'}}>
                                    <i className="fa-solid fa-globe"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4  text-center">
                            <h2 className=' text-uppercase fw-bold'>location</h2>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                    </div>
                </div>
            </div>
            <div  className=' py-3'>
                <div className="container-fluid">
                    <p className=' text-center text-white mb-0'>Copyright ©Yousef Yasser 2024</p>
                </div>
            </div>
        </footer>
    )
}
