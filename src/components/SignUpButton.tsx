import { Link } from 'react-router-dom'
import './signUpButton.css'

const SignUpButton = () => {
  return (
    <Link className='signUpButton' to="/account/create">Join Now</Link>
  )
}
export default SignUpButton