import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import Comment from './pages/Comment/Comment';
import User from './pages/Account/user_account/user_account';


import Card from './components/Card/Card';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/account' element={<User />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
