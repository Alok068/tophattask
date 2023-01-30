import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { editUser } from "./userSlice"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { TransactionContext } from "../../lib/use-context";


const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const {dropdowndata,setDropdowndata} = useContext(TransactionContext)

  const existingUser = users.filter(user => user.id === params.id);
  const { name,
  emailid,
  username,
  mobile,
  rolekey,
  password} = existingUser[0];
  const [values, setValues] = useState({
    name,
  emailid,
  username,
  mobile,
  rolekey,
  password
  });

  const handleEditUser = () => {
    setValues({ name: "",
    emailid: "",
    username:"",
    mobile:"",
    rolekey:"",
    password:""});
    dispatch(editUser({
      id:params.id,
      name:values.name,
      emailid:values.emailid,
      username:values.username,
      mobile:values.mobile,
      rolekey:values.rolekey,
      password:values.password
    }));
    navigate('/');
  }

  return (
    <>
      <h1 style={{textAlign:"center"}}>Edit User</h1>
    
    <div className="mt-10 max-w-xl mx-auto">
      <TextField sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Name' }}
      />
      <TextField sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
        label="Email ID"
        value={values.emailid}
        onChange={(e) => setValues({ ...values, emailid: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Email Id' }}
      />
      <TextField sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
        label="User Name"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'User Name' }}
      />
      <TextField sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
        label="Mobile"
        value={values.mobile}
        onChange={(e) => setValues({ ...values, mobile: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Mobile' }}
      />
      <FormControl sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small">
        <InputLabel id="demo-simple-select-label">Role Key</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={values.rolekey}
          label="Rolekey"
          onChange={(e) => setValues({ ...values, rolekey: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Rolekey' }}
        >
        {dropdowndata.map((item,index)=>{
          return<MenuItem key={index} value={item.value}>{item.name}</MenuItem>
        })}
        </Select>
      </FormControl>
      <TextField sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
        label="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Password' }}
      />
      <Button variant="contained" onClick={handleEditUser} style={{margin: "10px"}} >Edit</Button>
    </div>
    </>
  )
}

export default EditUser