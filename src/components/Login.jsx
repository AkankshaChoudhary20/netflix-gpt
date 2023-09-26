import React , {useState}from 'react';
import { Box ,Typography} from '@mui/material';
import  Header  from './layouts/Header';

const Login = () => {
 const [isSignInForm,setIsSignInForm] = useState(true);

 const toggleSignInForm = () => {
   setIsSignInForm(!isSignInForm);
 }
  return (
    <Box>
      <Header/>
      <Box className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-bg"></img>
      </Box>
      <form className='absolute bg-black p-10 w-3/12 mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <Typography variant='h4'>{isSignInForm ? "Sign In" : "Sign Up"}</Typography>
        {!isSignInForm && <input type="text" placeholder='name' className='p-4  my-6 rounded-lg w-full bg-gray-500' />}
        <input type="text" placeholder='email address' className='p-4  my-6 rounded-lg w-full bg-gray-500'/>
        <input type="password" placeholder='password' className='p-4  my-6 rounded-lg w-full bg-gray-500' />
        <Box className='bg-red-700 rounded-lg p-4 my-6 w-full text-center'><button type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</button></Box>
        <Typography onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already a member? Sign In Now"}</Typography>
      </form>
    </Box>
  )
}

export default Login