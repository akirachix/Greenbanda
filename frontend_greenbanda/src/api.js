import { useHistory } from 'react-router-dom';
import axios from 'axios';


let history = useHistory();

  
 
  const addNewUser = async () => {
    let item = (FirstName, LastName, password, Cpassword, Location, PhoneNumber)
    console.warn(item )


    let formField = new FormData()
    formField.append('first_name',FirstName)
    formField.append('last_name',LastName)
    formField.append('phone_number',PhoneNumber)
    formField.append('password',password)

    if(password !== null) {
      formField.append('password', password)
    }

    await axios({
      method: 'post',
      url:'https://boiling-citadel-73149.herokuapp.com/Bandapp/',
      data: formField
    }).then(response=>{
      console.log(response.data);
      history.push('/')
    })
}

<button onClick={addNewUser} disabled={!Cpassword} className='btn-signup'>Sign Up</button>