import React from 'react';
import EntryShowItemDetail from './EntryShowItemDetail';

const EntryShowItem = (props) => {
    let entry = props.selectedEntry.map((entry, i) => {
    return <EntryShowItemDetail key={i} id={entry.id} category={entry.category} image={entry.image} outline={entry.outline} outlinerefs={entry.outlinerefs} detail={entry.detail}/>
    })
    
    return(
        <div>
            {entry}
        </div>
    )
}


export default EntryShowItem;