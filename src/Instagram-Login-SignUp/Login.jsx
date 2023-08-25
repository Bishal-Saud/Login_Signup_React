import { useState } from 'react';
import '../Instagram-Login-SignUp/Login.css'
function Login({InpnameValue,InpPasswordValue,instaLogo,InpEmailValue}){
    const [login,setlogin]=useState(true)

    const loginSwitch = () => {
      setlogin(!login)
    }

    return(
        <>
        <div className="box-center">
            <img id='insta-logo' src={instaLogo} alt="Logo" />
<input type="text" className='inp inp-name' placeholder={InpnameValue} />
{
    login?
'': <input type="text" className='inp inp-email'placeholder={'ab@example.com'} /> 
}


<input type="text" className='inp inp-password' placeholder={InpPasswordValue} />
<button id='btn'>{login?"Sign in":"Sign up"}</button>
<p className='para'>{login?"Don't have account?":"have an account?"}<span id='p-spn-name' onClick={loginSwitch}>{login?"Sign up":"Log in"}</span></p>
        </div>
        </>
    )
}

export default Login;