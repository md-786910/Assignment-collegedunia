import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

// eslint-disable-next-line react/prop-types
function Login({ open = false, handleClose }) {

    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const { data, loading, error, POST } = useAxios()
    const { data: loginData, loading: loginLoading, error: loginError, POST: LOGINPOST } = useAxios()


    const handleRegister = async (e) => {
        e.preventDefault();
        const fullName = e.target['fullName'].value
        const email = e.target['email'].value
        const mobileNo = e.target['mobileNo'].value
        const password = e.target['password'].value
        const confirmPassword = e.target['confirmPassword'].value
        if (!email || !mobileNo || !password || !confirmPassword || !fullName) {
            alert("please fill details properly")
        } else {
            POST("/register", { fullName, email, mobileNo, password, confirmPassword })
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target['email'].value
        const password = e.target['password'].value

        if (!email || !password) {
            alert("please fill details properly")
        } else {
            LOGINPOST("/login", { email, password })
        }
    }


    if (error || loginError) {
        alert(error || loginError)
    }

    useEffect(() => {
        if (data?.status === 201) {
            setRegister(false);
            setLogin(true);
            setForgotPassword(false);
        }
        if (loginData?.status === 200) {
            localStorage.setItem('user:token', JSON.stringify(loginData?.data))
            setTimeout(() => {
                handleClose()
            }, 400)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, loginData])



    return (
        <div style={{ position: 'absolute', top: 0, zIndex: open ? 12 : 0 }}>
            <div className={`modal ${open && 'open'}`} id="modal_login" style={{ display: 'block', }}>
                <div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <a href="#" onClick={() => handleClose()} className="btn-close" >×</a>
                            <div className="modal-left" id="modal-bg-container" style={{ backgroundImage: "url('https://cdn.zoutons.com/images/common/login_bg.png')" }}>
                                <h3>Why Sign up?</h3>
                                <ul>
                                    <li>Exclusive deals</li>
                                    <li>More Savings</li>
                                    <li>Over 50 Stores</li>
                                    <li>Over 100 Categories</li>
                                </ul>
                            </div>
                            <div className="modal-right">
                                <div className="signupTab">
                                    <div className="h2">
                                        <a className="loginBtn" style={{ color: '#f6bb43' }} href="#loginForm" onClick={() => {
                                            setLogin(true)
                                            setRegister(false)
                                            setForgotPassword(false)
                                        }}>LOGIN</a>
                                    </div>
                                    <span className="seperator" style={{ color: '#f6bb43' }}>|</span>
                                    <div className="h2">
                                        <a className="singupBtn" style={{ color: '#f6bb43' }} href="#signupForm" onClick={() => {
                                            setLogin(false)
                                            setRegister(true)
                                            setForgotPassword(false)
                                        }}>SIGNUP</a>
                                    </div>
                                </div>
                                {
                                    login && <div className="login-form" >
                                        <form id="loginForm" className="form-block center-block" onSubmit={(e) => handleLogin(e)}>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" required minLength={3} placeholder="Email" autoComplete="email" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="password" required minLength={3} placeholder="Password" autoComplete="current-password" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    <input type="checkbox" name="remember" /> Remember me
                                                </label>
                                                <span className="right" style={{ color: '#a9a9b6', cursor: 'pointer' }} onClick={() => {
                                                    setLogin(false)
                                                    setRegister(false)
                                                    setForgotPassword(true)
                                                }} >Forgot Your Password?</span>
                                            </div>
                                            <div className="form-group form-loader">
                                                <input type="submit" disabled={loginLoading} className="btn btn-block btn-info btn-raised" name="submit" value="LOGIN" />
                                                {
                                                    loginLoading &&
                                                    <span className="loader" style={{ display: 'block' }}></span>

                                                }
                                            </div>
                                            <p className="message"></p>
                                            <hr style={{ margin: '25px 0', borderColor: '#fff' }} />
                                            <a href="https://appprod.zoutons.com/login/google" className="btn btn-raised" style={{ color: '#898a90', width: '100%', marginBottom: '10px' }}>
                                                <svg width="20px" height="20px" style={{ verticalAlign: 'bottom' }}>
                                                    <use xlinkHref="#icon-google"></use>
                                                </svg> Login with Google
                                            </a>
                                            <br />
                                            <a href="https://appprod.zoutons.com/login/facebook" className="btn btn-raised" style={{ background: '#3b5998', color: '#fff', width: '100%' }}>
                                                <svg width="20px" height="20px" style={{ verticalAlign: 'bottom' }}>
                                                    <use xlinkHref="#icon-facebook-logo"></use>
                                                </svg> Login with Facebook
                                            </a>
                                        </form>
                                        <br />
                                        <span className="signup_msg">SIGN IN AND GET UPDATED !<a href="#login"></a></span>
                                    </div>
                                }

                                {
                                    register && <div className="signup-form" >
                                        <form id="signupForm" className="center-block" onSubmit={(e) => handleRegister(e)}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="fullName" minLength={2} maxLength={30} required placeholder="Full Name" pattern="^[A-Za-z]{2,}((\s[A-Za-z.]+)+)?[\s]*$" title="Please enter a valid name" autoComplete="name" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" required placeholder="Email" autoComplete="email" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="mobileNo" maxLength={10} placeholder="Mobile Number" pattern="[789][0-9]{9}" title="Please enter a valid mobile number" autoComplete="off" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="password" required minLength={6} placeholder="Password" autoComplete="new-password" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="confirmPassword" required placeholder="Confirm Password" autoComplete="current-password" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group form-loader">
                                                <input type="submit" disabled={loading} className="btn btn-info btn-block btn-raised" name="submit" value="REGISTER" />
                                                {
                                                    loading &&
                                                    <span className="loader" style={{ display: 'block' }}></span>

                                                }
                                            </div>
                                            <p className="message"></p>
                                        </form>
                                    </div>
                                }

                                {
                                    forgotPassword && <div className="reset-password-form" >
                                        <form method="post" id="passwordResetForm" className="form-block center-block">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" required minLength={3} placeholder="Email" autoComplete="email" />
                                                <span className="form-error"></span>
                                            </div>
                                            <div className="form-group form-loader">
                                                <input type="submit" className="btn btn-block btn-danger btn-raised" name="submit" value="Send Password Reset Link" />
                                                <span className="loader" style={{ display: 'none' }}></span>
                                            </div>
                                            <p className="message"></p>
                                        </form>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
