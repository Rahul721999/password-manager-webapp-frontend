import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
// import the application
import App from './App';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Router>
        <App />
    </Router>
)
