import React,{useState,useEffect} from 'react'
import {message} from 'antd';
import 'antd/dist/antd.css';


const Login = () => {

    
    const [isLoged,setIsLoged] = useState(false);
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {

    localStorage.setItem("username1", 'manish');
    localStorage.setItem("password1", '1234');
    localStorage.setItem("username2", 'john');
    localStorage.setItem("password2", '134');

    },[])




    const handleLogin = () => {
        if(userName === (localStorage.getItem('username1')) === true  && (password === localStorage.getItem('password1')) === true || 
        (userName === localStorage.getItem('username2')) === true  && (password === localStorage.getItem('password2')) === true
        )
        {
         
        setIsLoged(true);   
        message.success('login sucessfully');
        }else{
            message.warning("please enter valid user");
            setIsLoged(false);
        }
    }

    const onUserNameChange = e =>{
        //console.log(e.target.value);
        setUserName(e.target.value);
    }

    const onPassChange = e =>{
        //console.log(e.target.value);
        setPassword(e.target.value);
    }
    

        return (
            <div>
                {
                    isLoged === true ? document.location.assign("/profile") : null
                }
                <div className="container" >
                    <div className="signup" >
                        <div className="row" id="divstyle1" >
                            <div className="col-lg-6 col-md-12 col-sm-12 align-middle" id="divstyle2">
                                <h3 >New To Our Shop</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
                                
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 text-center" >
                                <h3>Welcome Again!</h3>
                                <h3>Please Sign In Now </h3>
                            
                                <div className="form-group">
                                  <input type="text" className="form-control"    placeholder="Username" onChange={ onUserNameChange}  />
                                </div>
                                <div className="form-group">
                                  <input type="password" className="form-control"  placeholder="Password"  onChange={onPassChange} />
                                </div>
  
    
                                  <button
                                  style={{margin:"0px auto",marginTop:"30px"}}
                                   onClick={handleLogin} 
                                  type="submit" 
                                  id="fbtn" 
                                  className="btn btn-block mx-auto" 
                                  >
                                      login
                                  </button>
                            
    
    
            </div>
        </div>
    </div>
</div>
            </div>
        )
}   

export default Login;