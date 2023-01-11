
import './button.css'
type Props = {
  children: JSX.Element | JSX.Element[] | string,
  type: "submit" | "button",
  variant: "elevated" | "filled"|"Tonal"|"Outlined"|"Text"
  onclick?:()=>void

}
function Button(props: Props) {


  return (
  
    <button onClick={props.onclick} className={`btn ${props.variant}`}>
      {props.children}
    </button>
    
    
  
  )
}
export default Button;