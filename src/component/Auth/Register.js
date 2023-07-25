import React from'react'

function Register(props){
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Register</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete='off'>
                                <div className="form-group mt-2">
                                    <label htmlFor='user'>UserName</label>
                                    <input type='email' name='user' id='user' className='form-control' required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor='user'>Password</label>
                                    <input type='password' name='pass' id='pass' className='form-control' required/>
                                </div>
                                <div className="form-group-mt-2">
                                    <input type='submit' value='Register' className='btn btn-warning'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register