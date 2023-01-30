import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { deleteUser } from "./userSlice";
import Table from 'react-bootstrap/Table';
import { useContext, useState } from "react";
import Popup from "./add";
import { TransactionContext } from "../../lib/use-context";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const [popup,setPopup] = useState(false)
const {dropdowndata,setDropdowndata} = useContext(TransactionContext)
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }
console.log(dropdowndata)
  const renderCard = () =>(
    <>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Id</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Role key</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      {
        users.map(user =>(
          <>
          <tbody key={user.id} >
        <tr>
          <td>{user.name}</td>
          <td>{user.emailid}</td>
          <td>{user.username}</td>
          <td>{user.mobile}</td>
          <td>{user.rolekey}</td>
          <td>{user.password}</td>
          <td><div className="flex gap-4">
         <Link to={`edit-user/${user.id}`}>
         <Button variant="contained" style={{margin: "10px"}} >Edit</Button>
         </Link>
        
         <Button onClick={() => handleRemoveUser(user.id)} variant="contained" style={{margin: "10px"}} >Delete</Button>
       </div></td>
        </tr>
      </tbody>
          </>
        )
        )
      }
      
    </Table>
    </>
  )
  return (
    <>
    {popup? <Popup setDropdowndata={setDropdowndata} />:null}
    <div>
      <Link to="/add-user"><Button variant="contained" style={{margin: "10px"}} >Add User</Button></Link>
      <Link to="/add"><Button variant="contained" style={{margin: "10px"}} >Add Role Key</Button></Link>
      <div className="grid gap-5 md:grid-cols-2" style={{display: "flex"}}>
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
      </div>
    </div>
    </>
  )
}

export default UserList