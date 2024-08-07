import error404 from '../../assets/404.png'
import './NotFound.css'


export default function Notfound() {
    return (
        <div className=' py-5'>
            <img src={error404} alt="" className='error404 w-100' />
        </div>
    )
}
