import React, {useState} from'react'
import Fireapp from '../../Config/firebaseConfig'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function Register(props){

    const[reg,setReg] = useState({
        name:"",
        user:"",
        pass:""
    })
    const navigate = useNavigate()//navigate to another component

    const readValue = (event) => {
        const{name,value} =event.target
        setReg({...reg,[name]:value})
    }
    const submitHandler = async  (event) => {
        event.preventDefault()
        console.log(`new register =`,reg);
        await Fireapp.auth().createUserWithEmailAndPassword(reg.user,reg.pass)
           .then(res=>{
            let ref = Fireapp.database().ref().child('users')
            const data ={
                id:res.uid,
                name:reg.name,
                email:reg.user,
                image:res.user.photoURL
            };
            ref.child(res.uid).set(data)
              .then(out=>{
                toast.success('user registered successfully')
                navigate(`/login`)
              }).catch(err => toast.err(err.message))
           }).catch(err =>{
            let errCode = err.code;
            let errMsg = err.message;

            if(errCode === 'auth/weak-password'){
                toast.warning(`the password is to weak`);
            }else if(errCode === 'auth/email-already-in-use'){
                toast.warning(`this ${reg.user} is already registered`)
            }else{
                toast.warning(errMsg)
            }
        })
    }

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
                            <form autoComplete='off' onSubmit={submitHandler}>
                                <div className='form-group mt-2'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' name='name' value={reg.name} onChange={readValue} id='name' className='form-control' required></input>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor='user'>UserName</label>
                                    <input type='email' name='user' value={reg.user} onChange={readValue} id='user' className='form-control' required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor='user'>Password</label>
                                    <input type='password' name='pass' value={reg.pass} onChange={readValue} id='pass' className='form-control' required/>
                                </div>
                                <div className="form-group mt-2">
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