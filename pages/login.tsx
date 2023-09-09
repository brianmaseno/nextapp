import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (  
        <>
        <div className="container forms">
            <div className="form login">
              <div className="form-content">
                    <header>Login</header>
                    <form action="#">
                    <div className="field input-field">
                        <input type="email" placeholder="Email" className="input"></input>
                    </div>

                    <div className="field input-field">
                        <input type="password" placeholder="Password" className="password"></input>
                        <i className='bx bx-hide eye-icon' ></i>
                    </div>

                    <div className="form-link">
                        <a href="#" className="forgot-pass">Forgot password?</a>
                    </div>

                    <div className="field button-field">
                        <button>Login</button>
                    </div>
                    </form>

                    <div className="form-link">
                    <span>Don't have an account?  <a href="#" className="link signup-link">Signup</a></span>
                    </div>
                </div>
                <div className="line"></div>

                <div className="media-options">
                <a href="#" className="field facebook">
                    <i className='bx bxl-facebook facebook-icon'></i>
                    <span>Login With facebook</span>
                </a>
                </div>

                <div className="media-options">
                <a href="#" className="field google">
                    <img src="\media\images\googl-img.png" alt="" className="google-img"></img>
                    <span>Login With Google</span>
                </a>
                </div> 


            </div>
           
            <div className="form signup">
                <div className="form-content">
                    <header>Sign Up</header>
                    <form >

                    <div className="field input-field">
                        <input type="text" placeholder="Full name" className="input"></input>
                    </div>

                    <div className="field input-field">
                        <input type="email" placeholder="Email" className="input"></input>
                    </div>
                    
                    <div className="field input-field">
                        <input type="password" placeholder="Password" className="password"></input>
                    </div>

                    <div className="field input-field">
                        <input type="password" placeholder="Password" className="password"></input>
                        <i className='bx bx-hide eye-icon' ></i>
                    </div>

                    <div className="field button-field">
                        <button>Signup</button>
                    </div>
                    </form>

                    <div className="form-link">
                    <span>Already have an account?  <a href="#" className="link login-link">Login</a></span>
                    </div>
                </div> 

                <div className="line"></div>

                <div className="media-options">
                    <a href="#" className="field facebook">
                    <i className='bx bxl-facebook facebook-icon'></i>
                    <span>Login With facebook</span>
                    </a>
                </div>

                <div className="media-options">
                    <a href="#" className="field google">
                    {/* <img src="\media\images\googl-img.png" alt="" className="google-img"></img> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-google" size="xs" /> */}
                    <FontAwesomeIcon icon={faGoogle} size="xs" className='google-img' />
                    <span>Login With Google</span>
                    </a>
                </div>
                </div>
                </div>



        
        </>
    );
}
 
export default Login;