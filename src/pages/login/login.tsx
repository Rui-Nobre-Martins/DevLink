import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input/input";
import { useState, type FormEvent } from "react";

import { auth } from "../../service/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent){
        e.preventDefault();

        if(email === "" || password === ""){
            alert("Write your email and password")
            return
        }
       
        signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            console.log("Logged sucess")
            navigate("/admin", {replace: true})
        })
        .catch((error)=>{

            console.log(error)
        })
    }

    return(
        <>
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1>
                <Link to="/">
                    <h1 className="mt-11 text-white mb-7 font-bold text-5xl">My 
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent"> Links App</span>
                    </h1>
                </Link>

                <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                    <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />

                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />          

                    <button 
                    type="submit"
                    className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white cursor-pointer">
                        Login
                    </button>
                </form>
            </h1>

        </div>
        </>
    )
}