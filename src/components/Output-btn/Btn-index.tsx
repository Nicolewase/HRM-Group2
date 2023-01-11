
import Button from '../button/button'
import { AddIcon } from '../../assets/icon-img/icons'


function Buttons() {
  const elevatedButtonIsClicked=()=>{
    console.log("elevated")
}


  const filledButtonIsClicked=()=>{
    console.log("filled")
}
const TonalButtonIsClicked=()=>{
  console.log("tonal")
}
const OutlinedButtonIsClicked=()=>{
  console.log("outlined")
}
const TextButtonIsClicked=()=>{
  console.log("Text")
}
  return (
    <div className="App">
      <Button  type="submit"  variant='elevated' onclick={elevatedButtonIsClicked}>
        <AddIcon /> 
       <span className="icons">Elevated</span>
       </Button>
      
      <Button type="submit"  variant='filled'  onclick={filledButtonIsClicked} >Filled</Button>
      
      <Button type="submit"  variant='Tonal'onclick={TonalButtonIsClicked}  >Tonal</Button>
      
      <Button type="submit"  variant='Outlined'onclick={OutlinedButtonIsClicked}  >Outlined</Button>
      
      <Button type="submit" variant='Text'onclick={TextButtonIsClicked}  >Text</Button>


    </div>
  )
}

export default Buttons
