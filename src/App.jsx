import {React, useState} from 'react';
import { LoginPage, SignUp } from './components';
const App = () =>{
    const [currForm, setCurrForm] = useState('login');

    const toggleForm = (formName) =>{
        setCurrForm(formName)
    }
    return (
        <div className="App">
            {
                currForm === 'login' ? <LoginPage onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>
            }
        </div>
    )
}

export default App;