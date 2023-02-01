import Button from "../../components/button/button"
import "./index.css"
export const VerficationCode = () => {
    
    const filledButtonIsClicked=()=>{
        console.log("filled")
    }

    return <div className="verfication-page">
        <form action="" className="verfication-form">
            <h1>Verfication</h1>
            <div className="spans">
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
                <input type="text" className="span-nbr"/>
            
            </div>
            <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >Submit</Button>
        </form>
    </div>
    
}