import { getAuth, signOut } from "firebase/auth";
import Table from "./table";






function Home(){
    
const logouthandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign-out successful");
    }).catch((error) => {
      // An error happened.
      console.log("An error happened")
    });
  }
  
    return(
        <div>
            <div>
                <div>
                    <ul>
                        <li><button onClick={logouthandler}>Logout</button></li>
                    </ul>
                </div>  
                <h2>Welcom to Student Portal</h2>
            </div>
            <div>
                <Table/>
            </div>
        </div>
    )
}

export default Home;
