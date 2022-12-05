import React from 'react';
import {withRouter} from 'react-router-dom';
import { Icon, Checkbox, Form, Input, Button } from 'semantic-ui-react';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
import './SearchBar.css';
import suggestions from './data/suggestions.json';  

const indices = suggestions;

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('\\b' + escapedValue, 'i');
  
  return indices.filter(index => regex.test(getSuggestionValue(index)));
}

function getSuggestionValue(suggestion) {
    return `${suggestion.text}`;
  }

function renderSuggestion(suggestion, { query }) {
  const suggestionText = `${suggestion.text}`;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);

  return (
    <span className={'suggestion-content '}>
      <span className="name">
        {
          parts.map((part, i) => {
            const className = part.highlight ? 'highlight' : null;

            return (
              <span className={className} key={i}>{part.text}</span>
            );
          })
        }
      </span>
    </span>
  );
}

class SearchBar extends React.Component{

    state = {
        term: '',
        searchedType: '',
        value: '',
        suggestions: []
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term, this.state.searchedType);
        console.log(this.state.searchedType);
        this.props.history.push("/entries");        
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
          value: newValue,
          term: newValue
        });
      };
      
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };

    onFormClear = () => {
      console.log("cleared form")
      this.setState({
        value: '',
        term: '',
      });
          this.ref.focus();
    };    

    render(){
        const value = this.state.value;
        const suggestions = this.state.suggestions;
        const inputProps = {
          placeholder: "Search, e.g. head",
          value,
          onChange: this.onChange,
          ref: ref => (this.ref = ref)
        };

        const renderInputComponent = inputProps => (
          <Form.Field>
            <Input transparent fluid action>
              <input {...inputProps} />
            <Button id="cancelsearchterm" type="button" icon link onClick={this.onFormClear}><Icon className="cancel icon"></Icon></Button>
            <Button icon type="submit" color="yellow"><Icon className='search icon' /></Button>
            </Input>
          </Form.Field>

        );

        return (
            <div>
                <Form onSubmit={this.onFormSubmit}> 
                    <Form.Field>
                        <Checkbox id="mycheckbox" label='Search only staff examples.' onChange={(e) => {document.getElementById("mycheckbox").checked === true ? this.setState({searchedType: 'example'}) : this.setState({searchedType: ''})}}/>
                    </Form.Field>

                    <Autosuggest 
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps} 
                    renderInputComponent={renderInputComponent} />
                </Form>
            </div>
        );
    }
}

export default withRouter(SearchBar);