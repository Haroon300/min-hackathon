import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginhandler = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            console.log("login compelet", user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("login error", errorMessage, errorCode);
        });




        // e.reset();
    }

    return(
        <div>
            <h2>login</h2>
            <form onSubmit={loginhandler}>

                <label htmlFor="email">Email: </label>
                
                <input 
                    type="text" 
                    name="email"
                    placeholder="YourEmail@gmail.com" 
                    autoComplete="email"
                    onChange={(e)=>{setEmail(e.target.value)}} 
                />
                
                <br />
                
                <label htmlFor="password">Password: </label>
                
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={(e)=>{setPassword(e.target.value)}} 
                />
                
                <br />
                
                <button type="submit">Login</button>
            
            </form>
        </div>
    )
}

export default Login;