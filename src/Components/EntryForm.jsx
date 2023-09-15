export default function EntryForm() {

    function addEntry() {
        //create the new entry
        //save it to the data.js file
    }

    return (
        <form onSubmit={addEntry} className="entry-form">
            <input type="text" placeholder="New Activity" id="activity"></input>
            <label>
            <input type="radio" name="category"/>
            {' '}
            Strength and Conditioning
            </label>
            <label>
            <input type="radio" name="category"/>
            {' '}
            Jiu-Jitsu
            </label>
            <label>
            <input type="number"/>
            Number of Hours
            </label>
            <label>
            <input type="date"></input>
            Date
            </label>
            <input type="text" placeholder="Notes" id="notes"></input>
            <input type="submit" value="Submit" />
        </form>
    )
  }