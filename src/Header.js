import React from 'react';

const Header = ({ state, city, onStateChange, onCityChange, searchQuery, onSearch, onSearchSubmit }) => {
    const states = {
        "Tamil Nadu": ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem'],
        "Karnataka": ['Mysore', 'Bangalore', 'Vijayapura', 'Udupi', 'Kalaburagi'],
        "Telangana": ['Hyderabad', 'Warangal', 'Nizamabad', 'Nalgonda', 'Khammam'],
        "Kerala": ['Kochi', 'Kannur', 'Kollam', 'Thrissur', 'Kottayam'],
        "Andhra Pradesh": ['Visakhapatnam', 'Vijayavada', 'Tirupati', 'Guntur', 'Kakinada'],
    };

    const cities = states[state] || [];

    const handleSearchSubmit = () => {
        // Check if both state and city are selected
        if (state && city) {
            onSearch(searchQuery); // Perform search only if both selections are made
            onSearchSubmit(); // Call the search submit function
        } else {
            alert("Please select both a state and a city before searching.");
        }
    };

    return (
        <nav>
            <h1>Zolo</h1>
            <button onClick={onSearchSubmit}>Home</button>
            <button>About Us</button>
            <select onChange={(e) => onStateChange(e.target.value)}>
                <option value="">Select State</option>
                {Object.keys(states).map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>
            <select onChange={(e) => onCityChange(e.target.value)} disabled={!state}>
                <option value="">Select City</option>
                {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
            <input
    type="text"
    placeholder="Search Area" // Placeholder text
    value={searchQuery}
    onChange={(e) => onSearch(e.target.value)} // Handle area input
/>
            <button onClick={handleSearchSubmit}>Search</button>
        </nav>
    );
};

export default Header;
