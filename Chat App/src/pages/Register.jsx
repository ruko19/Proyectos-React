import React from 'react'

const Register = () => {
    return (
        <section className='formContainer'>
            <div className="formWrapper">
                <p className='logo'>Ruko Chat</p>
                <p className='tittle'>Register</p>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" />
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login </p>
            </div>


        </section>
    )
}

export default Register