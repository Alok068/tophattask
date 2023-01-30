import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TransactionContext } from "../../lib/use-context";

function Popup() {
    const {dropdowndata,setDropdowndata} = useContext(TransactionContext)
    const [inputValue,setInputValue] = useState()
    const navigate = useNavigate()
    const addOption = () => {
        setDropdowndata([...dropdowndata,{
            name:inputValue,
            value:inputValue
        }])
        navigate("/")
    }
  return (
    // <div className="modal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Role Key</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
                value={inputValue}
                name="inputValue"
                onChange={(e)=>{
                    setInputValue(e.currentTarget.value)
                }}
                type="text"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary"
            onClick={()=>{addOption()}}
            >
              Save changes
            </button>
            <Link to="/"><button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              
            >
              Close
            </button></Link>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Popup;
