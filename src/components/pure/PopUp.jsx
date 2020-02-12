import React from 'react';

const PopUp = ({onChange, onSubmit, closePopUp}) => {
  return ( 
    <div className="modals">
      <div className="modal-content col-sm-5">
        <div className="modals-header">
          <h4 className="modal-title text-center">Create Activity</h4>
          <button type="button" onClick={closePopUp} className="close">&times;</button>
        </div>
        <form className="modals-body" onSubmit={(event) => onSubmit(event)}>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => onChange(event)} id="title" placeholder="Enter title" required />
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Enter</button>
            <button type="button" onClick={closePopUp} className="btn btn-default">Close</button>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default PopUp;
