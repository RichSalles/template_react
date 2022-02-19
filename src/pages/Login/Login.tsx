import React from 'react';

import './Login.scss';



function Login() {

    const onSubmit = (e: any)  => {
        e.preventDefault();
        window.location.href = window.location.origin + '/dashboard';
    };

    return (
        <div className="container-fluid container-login p-0">
            <div className="split-screen">
                <div className="col-12 col-sm-12 col-md-6 bg-white valign left">
                    <div className="inner">
                        <div className="login-brand d-flex align-items-center justify-content-center">
                            <img src="" alt="Logo" className="float-left" style={{ width: '250px' }} />
                        </div>
                        <div className="text-center">
                            <h1 className="h4 mb-4 mt-4">Bem vindos!</h1>
                        </div>

                        <form className="user" name="login_form" onSubmit={(e) => onSubmit(e)}>
                            
                            <div className="form-group">
                                <input type ="email" name="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Login..." />
                            </div>
                            <div className="form-group">
                                <input type ="password" name="cust_pass" className="form-control" id="exampleInputPassword" placeholder="Senha" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type ="checkbox" name="remember" className="custom-control-input" value="1" id="customCheck" />
                                    <label className="custom-control-label" htmlFor="customCheck">Lembrar-me</label>
                                </div>
                            </div>
                            <input type ="submit" value="Entrar" className="btn btn-primary btn-block" />
                            <hr />
                        </form>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 valign right bg-login-image" id="random" 
                // style={{backgroundImage: `url(${})`}}
                >
        
                 </div>
            </div>
        </div>
                );
}

                export default Login;