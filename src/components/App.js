import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryCardList from './entries/EntryCardList';
import EntryShow from './entries/EntryShow';
import About from './About';
import StartHere from './StartHere';   
import SearchBar from './SearchBar';
import ScrollToTop from './ScrollToTop';
import RandomEntry from './entries/RandomEntry';
import Header from './Header';
import './App.css';
import data from './data/entries.json'; 


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            entries: data,
            searchedCategory: '',
            searchedText: '',
            searchedEntryType: '',
            filteredEntries: data,
            randomentry: {}
        }
    }

    componentDidMount() {
        const randomentry = this.state.entries[Math.floor(Math.random() * this.state.entries.length)];
        this.setState({ randomentry: randomentry });
      
        const defaultbrowse = this.state.entries.filter((entry) => {
          return entry.category === "Direction Sign";
        });  
        this.setState({ filteredEntries: defaultbrowse });
      }
      

    filterByCategory = (e) => {
        this.setState({searchedCategory: e})
        console.log(e);
        console.log(this.state.searchedEntryType);
        const response = this.state.entries.filter((entry) => {          
            return entry.category.toLowerCase()===(e.toLowerCase())
        }); 
        this.setState({filteredEntries: response});
    }

    filterByText = (e, t) => {
        this.setState({searchedText: e})
        this.setState({searchedEntryType: t})
        console.log('searched term: ' + e);
        const response = this.state.entries.filter((entry) => {
            if(t.length === 0){
                return entry.outline.toLowerCase().includes(e.toLowerCase()) || JSON.stringify(entry.detail).toLowerCase().includes(e.toLowerCase()) || entry.category.toLowerCase()===(e.toLowerCase()) || JSON.stringify(entry.keywords).includes(e)
            }
            else{
                return entry.entrytype === t && (entry.outline.toLowerCase().includes(e.toLowerCase()) || JSON.stringify(entry.detail).toLowerCase().includes(e.toLowerCase()) || entry.category.toLowerCase()===(e.toLowerCase()) || JSON.stringify(entry.keywords).includes(e))    
            }
            
        });  
        console.log(response);
        this.setState({filteredEntries: response});
        this.setState({searchedEntryType: ''})
    }

    render(){
        console.log("Render App, path:", window.location.pathname);
        return(
            <div>
                <div>    
                <BrowserRouter>
                    <div>
                        <Header onClick={this.filterByCategory}/>
                        <div id="searchfilter">
                                <SearchBar onSubmit={this.filterByText} />
                        </div>  

                        <Routes>      
                        <Route
                            path="/"
                            element={
                                <div>
                                <RandomEntry getRandomEntry={this.state.randomentry} />
                                </div>
                            }
                        />
                        <Route
                            path="/entries"
                            element={
                                <div>    
                                <EntryCardList filteredEntries={this.state.filteredEntries} />
                                </div>
                            }
                        />
                        <Route path="/entries/:id" element={<EntryShow entries={this.state.entries} key={window.location.pathname} />} />
                        <Route path="/fourprinciples" element={<StartHere />} />
                        <Route path="/about" element={<About />} />
                        </Routes>
                        <ScrollToTop />
                    </div>
                </BrowserRouter>
                </div>
            </div>
        );
    }
};

export default App;
