import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Checkbox, Form, Input, Button } from 'semantic-ui-react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import './SearchBar.css';
import suggestionsData from './data/suggestions.json';

const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getSuggestions = (value) => {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') return [];

  const regex = new RegExp('\\b' + escapedValue, 'i');
  return suggestionsData.filter((index) => regex.test(index.text));
};

const getSuggestionValue = (suggestion) => `${suggestion.text}`;

const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = suggestion.text;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className="suggestion-content">
      <span className="name">
        {parts.map((part, i) => {
          const className = part.highlight ? 'highlight' : null;
          return <span className={className} key={i}>{part.text}</span>;
        })}
      </span>
    </span>
  );
};

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const [searchedType, setSearchedType] = useState('');
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate(); 

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (term.trim().length < 2) {
      setError(true);
      return;
    }
  
    setError(false);
  
    onSubmit(term, searchedType);
    console.log(searchedType);
    navigate('/entries'); 
  };

  const handleChange = (event, { newValue }) => {
    setValue(newValue);
    setTerm(newValue);
  };

  const handleSuggestionsFetch = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClear = () => {
    setSuggestions([]);
  };

  const handleClearForm = () => {
    console.log('cleared form');
    setValue('');
    setTerm('');
    inputRef.current?.focus();
  };

  const inputProps = {
    placeholder: 'Search, e.g. head',
    value,
    onChange: handleChange,
    ref: inputRef,
    name: 'searchTerm',
    id: 'searchTerm',
  };

  const renderInputComponent = (inputProps) => (
    <Form.Field>
      <Input transparent fluid action>
        <input {...inputProps} />
        <Button id="cancelsearchterm" type="button" icon onClick={handleClearForm}>
          <Icon className="cancel icon" />
        </Button>
        <Button icon type="submit" color="yellow">
          <Icon className="search icon" />
        </Button>
      </Input>
    </Form.Field>
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Checkbox
            id="mycheckbox"
            label="Search only staff examples."
            onChange={(e, data) => {
              setSearchedType(data.checked ? 'example' : '');
            }}
          />
        </Form.Field>

        {error && (
          <Form.Field>
            <div style={{ color: 'red', fontSize: '0.9em', marginBottom: '0.3em' }}>
              Please enter at least two characters to search.
            </div>
          </Form.Field>
        )}

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={handleSuggestionsFetch}
          onSuggestionsClearRequested={handleSuggestionsClear}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
        />
      </Form>
    </div>
  );
};

export default SearchBar;