

import React from 'react';
import hotelData from './hotelData';

const SearchResults = ({ searchQuery }) => {
    const filteredHotels = hotelData.filter(hotel => hotel.pi.toLowerCase() === searchQuery.toLowerCase());

    return (
        <div>
            <h2>Search Results for: {searchQuery}</h2>
            <div style={styles.cardContainer}>
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel, index) => (
                        <div key={index} style={styles.hotelCard}>
                            <img src={hotel.img} alt={hotel.ti} style={styles.hotelImage} />
                            <h3>{hotel.ti}</h3>
                            <p>{hotel.de}</p>
                            <p>{hotel.be}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid
        gap: '15px',
    },
    hotelCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    hotelImage: {
        width: '100%',
        borderRadius: '5px',
    },
};

export default SearchResults;

