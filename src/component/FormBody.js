import react, { useState } from 'react';
import ThankYou from './ThankYou';
import './FormBody.css';

const FormBody = () => {
    const [edit, setEdit] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [education, setEducation] = useState("");
    const [bio, setBio] = useState("");
    const [date, setDate] = useState("");
    // const All = [{
    //     firstName, lastName
    // }]
    // const FIRSTNAME = { firstName };
    // const LASTNAME = { lastName };
    // const EMAIL = { email };
    // const EDUCATION = { education };
    // const BIO = { bio };
    // const DATE = { date };
    //  console.log(FIRSTNAME);
    //  console.log(LASTNAME);
    //  console.log(EMAIL);
    //  console.log(EDUCATION);
    //  console.log(BIO);
    //  console.log(DATE);

    const onChangeHandler = (e) => {
        setFirstName(e.target.value);
    }
   

    const onChangelastname = (e) => {
        setLastName(e.target.value);
    }
 

    const onChangeemail = (e) => {
        setEmail(e.target.value);
    }
 

    const onChangeeducation = (e) => {
        setEducation(e.target.value);
    }
 


    const onChangebio = (e) => {
        setBio(e.target.value);
    }
   

    const onChangedate = (e) => {
        setDate(e.target.value);
    }
    

    const submit = (e) => {
        e.preventDefault();
        alert("firstname=" + firstName + " " + " " + "lastname=" + lastName + " " + " " + "email=" + email + " " + " " + "education=" + education + " " + " " + "bio=" + bio + " " + " " + "date=" + date + " " + "");
        setEdit(true);
    }
    return (
        <div>
            {!edit && <form className="form" onSubmit={submit}>
                <div className="divform">
                    <h2>Personal Details </h2>
                    <label>First Name : </label>
                    <input type="text" onChange={onChangeHandler}  required/> <br /><br />

                    <label>Last Name : </label>
                    <input type="text" onChange={onChangelastname}  required/> <br /><br />

                    <label>Email : </label>
                    <input type="text" onChange={onChangeemail}  required/> <br /><br />

                    <label>Education : </label>
                    <input type="text" onChange={onChangeeducation}  required/> <br /><br />

                    <label>Bio : </label>
                    <input type="text" onChange={onChangebio}  required/> <br /><br />

                    <label>Date : </label>
                    <input type="date" onChange={onChangedate} required/> <br /><br />
                </div>

                <button  >Submit</button>
            </form>
            }
            {edit &&
            <div className="thankyou" >
                <ThankYou />
                </div>
            }
        </div>
    )

}
export default FormBody;