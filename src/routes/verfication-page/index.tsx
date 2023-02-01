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
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <Button type="submit" variant='filled' onclick={filledButtonIsClicked}  >Submit</Button>
        </form>
    </div>
    
}