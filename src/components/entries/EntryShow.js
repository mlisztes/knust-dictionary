import React from 'react';
import data from '../data/entries.json';
import EntryShowItem from './EntryShowItem';

class EntryShow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            entries: data,
            selectedEntry: this.props.match.params.id
        }
    }

    render(){
        let selectedEntry = this.state.entries.filter((entry) => {
            return entry.id.toString() === this.state.selectedEntry.toLowerCase()
        })

        return(
            <div>
                <EntryShowItem selectedEntry={selectedEntry}/>
            </div>
        );
    }
};

export default EntryShow;