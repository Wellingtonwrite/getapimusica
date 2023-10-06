
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import '../pages/style/Login.css'

const LoginPage = () => {

    const { reset, handleSubmit, register } = useForm()
    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        })
    }
    return (
        <div className="login_container">
            <div className='login_element'>
                <img className="login_img" src="/imagenes/Image-login.png" alt="image" />
                <article className='login_auth_component'>
                    <h2 className='login_h2'>Iniciar Sesion</h2>
                    <form className="login_form" onSubmit={handleSubmit(submit)}>
                        <div className='login_data'>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" id="email"/>
                        </div>

                        <div className='login_data'>
                            <label htmlFor="password">Password</label>
                            <input {...register('password')} type="password" id="password" />
                        </div>

                        <button className='login_button'>Submit</button>
                    </form>
                    <p className='login_footer'>
                        ¿Do you have an account?<br></br> 
                        <Link className='login_link_register' to='/auth/register'>Go to register</Link>
                    </p>
                </article>
            </div>
        </div>
    )

}

export default LoginPage
