import {useState} from 'react'
import "../styles/components/like_deslike.sass"
import { AiFillDislike } from "react-icons/ai"

const Deslike = () => {
  const [deslike, setDeslike] = useState(0)
  function deslikeClick (){
    setDeslike(deslike+1)
  }

  return(
    <div>
      <span>{deslike}</span>
      <AiFillDislike onClick={deslikeClick} id="deslike"/>
    </div>
  )
}
export default Deslike
