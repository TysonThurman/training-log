export default function Modal({confirmDelete, setConfirmDelete, setDeleteClicked, setConfirmation, confirmation}) {

    function processConfirmation(e){
        // console.log(e.target.id);

        if(e.target.id === "yes-btn") {
            setConfirmation(true);
        }

        else if(e.target.id === "cancel-btn") {
            setConfirmation(false);
        }

        setDeleteClicked(false);

        //why is this coming up false after yes-btn is clicked?
        console.log(`Modal Confirmation = ${confirmation}`);
    }


  return (
    <>
    <div className='main-container'>
        <div className='modal-container'>
            <h4 className="deletion-text">Confirm Deletion?</h4>
            <button id="yes-btn" onClick={(e)=> processConfirmation(e)}>Yes</button>
            <button id="cancel-btn" onClick={(e)=> processConfirmation(e)}>Cancel</button>
        </div>
    </div>
    </>
  )
}
