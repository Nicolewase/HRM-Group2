import { Textfield } from "../../components/Inputs";
import "./employee.css";

const AddEmployees=()=>{
    return(
        <div className="emplo">
            <form action=" " className="formm">
            <h1>Add Employees</h1>

                <div className="m-field">
            <Textfield name="Names" type="number"  variant="three" label="Employees ID" helperText=""/>
            <Textfield name="Names" type="text" variant="three" label="Department" helperText=""/>
            </div>

            <div className="m-field">
            <Textfield name="Names" type="text" variant="three" label="First name" helperText=""/>
            <Textfield name="Names" type="text" variant="three" label="Last name" helperText=""/>
            </div>
            <div className="m-field">
            <Textfield name="Names" type="email" variant="three" label="Email" helperText=""/>
            <Textfield name="Names" type="text" variant="three" label="Qualification" helperText=""/>
            </div>
            <div className="m-field1">
            <Textfield name="Names" type="text" variant="three" label="Address" helperText=""/>
            </div>

            <div className="m-field1">
            <Textfield name="Names" type="text" variant="three" label="City" helperText=""/>
            </div>
            <div className="m-field">
            <Textfield name="Names" type="number" variant="three" label="Joining salary" helperText=""/>
            <Textfield name="Names" type="number" variant="three" label="Mobile number" helperText=""/>
            </div>
            <div className="m-field1">
            <Textfield name="Names"  type="date" variant="three" label="Date of birth" helperText=""/>
            </div>
            <button className="bton no-border-radius">Submit</button>
            <div className="radio">
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>
            

            </form>
        </div>

    )
}
export default AddEmployees;