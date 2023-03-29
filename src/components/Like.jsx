import {useState} from "react";
import { AiFillLike } from "react-icons/ai";
import "../styles/components/like_deslike.sass"
const Like = () =>{
    const[like, setLike] = useState(0)
    function likeClick(){
        setLike(like+1)
    }
    return(
        <div>
            <span>{like}</span>
            <AiFillLike onClick={likeClick} id="like"/>
        </div>
    )
}

export default Like