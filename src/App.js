import React, { useState } from 'react';
import Header from './Header';

import SearchResults from './SearchResults';
import './App.css';

const App = () => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentView, setCurrentView] = useState('home');

    const handleSearchSubmit = () => {
        if (searchQuery) {
            setCurrentView('searchResults');
        } else {
            setCurrentView('home');
        }
    };

    return (
        <div className="container">
            <Header
                state={state}
                city={city}
                onStateChange={setState}
                onCityChange={setCity}
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                onSearchSubmit={handleSearchSubmit}
            />
          
            {currentView === 'searchResults' && <SearchResults searchQuery={searchQuery} />}
        </div>
    );
};

export default App;

