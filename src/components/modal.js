import { useEffect } from "react";

const Modal = ({message, endMessage}) =>{
    useEffect(()=>{
        setTimeout(()=>{
            endMessage();
        }, 3000)
    })

    return (
        <div className="msg">
            <p>{message}</p>
        </div>
    )

}

export default Modal;