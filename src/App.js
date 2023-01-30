import { Route, Routes } from "react-router-dom";
import Popup from "./features/users/add";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";

function App() {
  return (
    <div className="container" style={{marginTop:"10px"}}>
      
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/add" element={<Popup/>} />
      </Routes>
    </div>
  );
}

export default App;
