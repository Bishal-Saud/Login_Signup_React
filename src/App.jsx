
import './App.css'
import Login from './Instagram-Login-SignUp/Login.jsx'
import Logo from './Instagram-Login-SignUp/instaLogo.png'


function App() {

  return (
    <>
  <Login instaLogo={Logo} InpnameValue={'your name'} InpPasswordValue={'your password'} />

  
       
    </>
  )
}

export default App
