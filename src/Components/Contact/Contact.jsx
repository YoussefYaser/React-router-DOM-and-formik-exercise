import { useFormik } from 'formik'
import './Contact.css'


export default function Contact() {


    const formik = useFormik({
        initialValues: {
            userName: '',
            age: '',
            email: '',
            password: ''
        },
        validate: (values) => {
            let errors = {};
            const regex = {
                userName: /^[A-Z][a-z]+$/,
                age: /^[1-9][0-9]$/,
                email: /^.+@.+\.com$/,
                password: /^[A-Z][a-z]+$/
            }
            const valuesKeys = Object.keys(values);
            for (let i = 0; i < valuesKeys.length; i++) {
                if (!values[valuesKeys[i]])
                    errors[valuesKeys[i]] = `${valuesKeys[i]} is required`;
                else if(!regex[valuesKeys[i]].test(values[valuesKeys[i]]))
                    errors[valuesKeys[i]] = `${valuesKeys[i]} is not validated`;
            }


            return errors
        },
        onSubmit: (values) => console.log(values)

    });


    
    


    let { userName, age, email, password } = formik.values;




    return (
        <section className="contact py-5 xy-center">
            <div className="container position-relative z-0">
                <h2 className=' h1 text-center fw-bold  text-uppercase'>contact</h2>
                <span className='special-wrap d-block bg-white text-center position-relative fs-5 mb-3 mx-auto' style={{ width: '70px' }}>
                    <i className="fa-solid fa-star"></i>
                </span>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="form-floating mb-3">
                        <input autoComplete='off' type="text" className="form-control" id="userName" placeholder="name@example.com" value={userName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <label htmlFor="userName">Username</label>
                    </div>
                    {formik.errors.userName && formik.touched.userName?<div className="alert alert-danger" role="alert">
                        {formik.errors.userName}
                    </div>:''}
                    
                    <div className="form-floating mb-3">
                        <input autoComplete='off' type="number" className="form-control" id="age" placeholder="name@example.com" value={age} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <label htmlFor="age">Age</label>
                    </div>
                    {formik.errors.age && formik.touched.age?<div className="alert alert-danger" role="alert">
                        {formik.errors.age}
                    </div>:''}

                    <div className="form-floating mb-3">
                        <input autoComplete='off' type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <label htmlFor="email">Email</label>
                    </div>
                    {formik.errors.email && formik.touched.email?<div className="alert alert-danger" role="alert">
                        {formik.errors.email}
                    </div>:''}

                    <div className="form-floating mb-3">
                        <input autoComplete='off' type="password" className="form-control" id="password" placeholder="name@example.com" value={password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        <label htmlFor="password">Password</label>
                    </div>
                    {formik.errors.password && formik.touched.password?<div className="alert alert-danger" role="alert">
                        {formik.errors.password}
                    </div>:''}

                    <button className=' btn ms-auto d-block mt-4 fs-5' type='submit'>Submit</button>

                </form>

            </div>
        </section>
    )
}
