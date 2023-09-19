/* eslint-disable react/prop-types */
export default function EntryForm({addEntry}) {
    return (
        <form onSubmit={addEntry} className="entry-form">
            <input type="text" placeholder="New Activity" name="activity"></input>
            <label>
            <input type="radio" name="category" value="Strength and Conditioning"/>
            {' '}
            Strength and Conditioning
            </label>
            <label>
            <input type="radio" name="category" value="Jiu-Jitsu"/>
            {' '}
            Jiu-Jitsu
            </label>
            <label>
            <input type="number" name="hours"/>
            Number of Hours
            </label>
            <label>
            <input type="date" name="date"></input>
            Date
            </label>
            <input type="text" placeholder="Notes" name="notes"></input>
            <input type="submit" value="Submit" />
        </form>
    )
  }