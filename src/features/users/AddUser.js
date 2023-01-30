import { useContext, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addUser } from "./userSlice"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { TransactionContext } from "../../lib/use-context";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {dropdowndata,setDropdowndata} = useContext(TransactionContext)

  const [values, setValues] = useState({
   name: "",
   emailid: "",
   username:"",
   mobile:"",
   rolekey:"",
   password:""
  });
  const handleAddUser = () => {
    setValues({
      name: "",
   emailid: "",
   username:"",
   mobile:"",
   rolekey:"",
   password:"" });
    dispatch(addUser({
      id: uuidv4(),
      name:values.name,
      emailid: values.emailid,
      username: values.username,
      mobile:values.mobile,
      rolekey:values.rolekey,
      password:values.password
    }));
    navigate('/');
  }


  return (<>

  
    <h1 style={{textAlign:"center"}}>Add User</h1>
    <div className="col">
      <TextField
      sx={{ m: 1, minWidth: 120 }} style={{margin: "10px"}} size="small"
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
     type="password"
        label="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Password' }}
      />
      
      
    <Button variant="contained" onClick={handleAddUser}style={{margin: "10px"}} >Submit</Button>
    
    </div>
    </>)
}

export default AddUser