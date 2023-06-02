import {React} from 'react';
import {Dashboard, LoginPage, SignUp} from './components';
import './App.css';
import {Route, Routes} from 'react-router-dom';
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LoginPage/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </div>
    )
}

export default App;
