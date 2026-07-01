import { useState } from "react"
export default function Login(){
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    return(
        <>
        <div>
            <div>
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="password" name="password" id="password" placeholder="Password"/>
            </div>
        </div>
        </>
    )
};