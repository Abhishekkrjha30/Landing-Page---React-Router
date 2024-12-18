/* eslint-disable no-undef */
import { useParams } from "react-router-dom"


const User = () => {
    const {userid} = useParams()
  return (
    <div className="text-center font-bold text-3xl text-red-500 p-20">User : {userid}</div>
  )
}

export default User