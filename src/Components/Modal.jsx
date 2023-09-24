import PropTypes from 'prop-types';

Modal.propTypes ={
    setConfirmDelete: PropTypes.any,
    setDeleteClicked: PropTypes.any,
    removeEntry: PropTypes.any
}

export default function Modal({setConfirmDelete, setDeleteClicked, removeEntry}) {

    //Need a way to pass the key to removeEntry from here
    function confirmationYes(){
        setConfirmDelete(() => true);
        removeEntry();
        setDeleteClicked(() => false);
    }

    function confirmationCancel(){
        setConfirmDelete(() => false);
        setDeleteClicked(() => false);
    }

  return (
    <>
    <div className='main-container'>
        <div className='modal-container'>
            <h4 className="deletion-text">Confirm Deletion?</h4>
            <button onClick={()=> confirmationYes()}>Yes</button>
            <button onClick={()=> confirmationCancel()}>Cancel</button>
        </div>
    </div>
    </>
  )
}
