import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCR_Ek9ZtPZ153VLrmS3e3_ktC-XSX6IRg",
    authDomain: "whatsapp-db99a.firebaseapp.com",
    projectId: "whatsapp-db99a",
    storageBucket: "whatsapp-db99a.appspot.com",
    messagingSenderId: "40125332188",
    appId: "1:40125332188:web:343f31ff2bc272f8905219",
    measurementId: "G-PLZBRWERQX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);






function Table(){
    
    // const [user1Tables,setUser1Tables] = useState("");
    const [classTime,setClassTime] = useState("");
    const [teacher,setTeacher] = useState("");
    const [course,setCourse] = useState("");
    const [batch,setBatch] = useState("");
    const [shedule, setShedule] = useState("");

    useEffect(()=>{

    },[]);

    const savedata = async (e)=>{
        e.preventDefault();

        console.log("user1", classTime);
        console.log("user1", teacher);
        console.log("user1", course);
        console.log("user1", shedule);
        console.log("user1", batch);


        try {
            const docRef = await addDoc(collection(db, "user1Tables"), {
                uclass_time: classTime,
                uteacher: teacher,
                ucourse:  course,
                ushedule: shedule
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
    <div>
        <form onSubmit={savedata}>
            <div>
                <div>
                    <label htmlFor="class-time">Class Timings : </label>
                    <input 
                        type="time" 
                        name="class-time" 
                        onChange={(e)=>{ setClassTime(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="shedule">Shedule of Classes: </label>
                    <select name="shedule" 
                        onChange={(e)=>{ setShedule(e.target.value)}} >
                        <option value="mon,wed,thur">Mon,Wed,Thur</option>
                        <option value="tue,fri,sat">Tue,Fri,Sat</option>
                        <option value="sun">Sun</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="teacher">Teacher : </label>
                    <input type="text" name="teacher" onChange={(e)=>{ setTeacher(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="course">Course Name : </label>
                    <input type="text" name="course" onChange={(e)=>{ setCourse(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="batch">Batch number : </label>
                    <input type="text" name="batch" onChange={(e)=>{ setBatch(e.target.value)}}/>
                </div>
            </div>
            <div><button type="submit">Create Class Attendace Sheet</button></div>
        </form>
        <div>
            <div></div>
        </div>
    </div>

    
    )
}
export default Table;








