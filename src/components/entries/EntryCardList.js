import React from 'react';
import EntryCard from './EntryCard';

const EntryCardList = (props) => {
    let entries = props.filteredEntries.map((entry, i) => {
        return <EntryCard key={i} id={entry.id} category={entry.category} image={entry.image} outline={entry.outline} outlinerefs={entry.outlinerefs} detail={entry.detail} entrytype={entry.entrytype} />
    })
    
    return(
        <div>
            {props.filteredEntries.length === 0 ? <div><h3>No results found</h3><img className="ui medium image" alt="not found" style={{display:'block',marginRight:'auto' ,marginLeft:'auto'}} src='/img/notfound.svg'></img></div> : <h3>{[...new Set(props.filteredEntries.map(q => q.category))].join(", ")} ({props.filteredEntries.length} entries)</h3>}
            <div className="ui four stackable doubling cards">
                {entries}
            </div>
        </div>
    )
}


export default EntryCardList;

