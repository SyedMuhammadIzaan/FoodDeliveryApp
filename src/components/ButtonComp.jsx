import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const ButtonComp = ({text,redirectTo}) => {
    console.log("Redirect",redirectTo)
    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate(redirectTo);
    }
  return (
    <>
    <Button onClick={()=>{handleNavigate}}>{text}</Button>
    </>
  )
}

export default ButtonComp