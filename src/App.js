import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import StartUp from './components/pages/StartUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Login from './components/pages/Login';
import Chat from './components/chat/Chat';
import UserId from './components/pages/UserId';
import Asim from './components/commonChat/Asim';
import PMAS from './components/commonChat/PMAS';
import Sodager from './components/commonChat/Sodager';
import Status from './components/pages/Status';
import Calls from './components/pages/Calls';
import ShowStatus from './components/pages/ShowStatus';
import Haseeb from './components/commonChat/Haseeb';
import Jawad from './components/commonChat/Jawad';
import Ali from './components/commonChat/Ali';
import Qadeer from './components/commonChat/Qadeer';
import Ahemd from './components/commonChat/Ahemd';
import Afaq from './components/commonChat/Afaq';
function App() {
  return (
   <>
<Routes>
        <Route exact path="/" element={<StartUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route exact path="/userid" element={<UserId/>} />
        <Route exact path="/pmas" element={<PMAS/>} />
        <Route exact path="/jawad" element={<Jawad/>} />
        <Route exact path="/haseeb" element={<Haseeb/>} />
        <Route exact path="/asim" element={<Asim/>} />
        <Route exact path="/afaq" element={<Afaq/>} />
        <Route exact path="/ali" element={<Ali/>} />
        <Route exact path="/qadeer" element={<Qadeer/>} />
        <Route exact path="/ahmed" element={<Ahemd/>} />
        <Route exact path="/sodager" element={<Sodager/>} />
        <Route exact path="/status" element={<Status/>} />
        <Route exact path="/calls/history" element={<Calls/>} />
        {/* <Route exact path="/status/veiw" element={<ShowStatus/>} /> */}
        <Route exact path="/*" element={<Navigate to="/"/>} />
      </Routes>

   </>
  );
}

export default App;
