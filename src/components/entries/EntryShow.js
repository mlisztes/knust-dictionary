import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/entries.json';
import EntryShowItem from './EntryShowItem';

const EntryShow = ({ entries }) => {
    const { id } = useParams();
    const selectedEntry = entries.filter((entry) => {
      return entry.id.toString() === id.toLowerCase();
    });
  
    return (
      <div>
        <EntryShowItem selectedEntry={selectedEntry} />
      </div>
    );
  };
  

export default EntryShow;
