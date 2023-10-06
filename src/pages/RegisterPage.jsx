
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import '../pages/style/Register.css'

const RegisterPage = () => {

    const { reset, handleSubmit, register } = useForm()

    const { registerUser } = useAuth()

    const submit = data => {
        registerUser(data)
        reset({
            name: '',
            email: '',
            password: ''
        })

    }


    return (
        <div className="register_container">
            <div className='register_element'>
                <img className='register_img' src="/imagenes/image-register.png" alt="" />
                <article className='register_auth_component'>
                    <form className="register_form" onSubmit={handleSubmit(submit)}>
                        <div className='register_data'>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" id="email" />
                        </div>
                        <div className='register_data'>
                            <label htmlFor="name">Name</label>
                            <input {...register('name')} type="text" id="name" />
                        </div>
                        <div className='register_data'>
                            <label htmlFor="password">Password</label>
                            <input{...register('password')} type="password" id="password" />
                        </div>
                        <button className='register_button'>Submit</button>
                    </form>
                    <p className='register_footer'>Are you register? <br></br>
                        <Link className='register_link_login' to='/auth/login'>Go to login</Link></p>
                </article>
            </div>
        </div>
    )
}

export default RegisterPage
