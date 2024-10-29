import React from 'react';
import hotelData from './hotelData';

const SearchResults = ({ searchQuery }) => {
    const filteredHotels = hotelData.filter(
        hotel => hotel.pi.toLowerCase() === searchQuery.toLowerCase()
    );

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Search Results for: {searchQuery}</h2>
            <div style={styles.cardContainer}>
                {filteredHotels.length > 0 ? (
                    filteredHotels.map((hotel, index) => (
                        <div key={index} style={styles.hotelCard}>
                            <img src={hotel.img} alt={hotel.ti} style={styles.hotelImage} />
                            <h3 style={styles.hotelText}>{hotel.ti}</h3>
                            <p style={styles.hotelText}>{hotel.de}</p>
                            <p style={styles.hotelText}>{hotel.be}</p>
                        </div>
                    ))
                ) : (
                    <p style={styles.noResults}>No results found.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: 'white', // Title text color
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '15px',
        maxWidth: '80%',
        justifyContent: 'center',
    },
    hotelCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        color: '#333', // Card text color
        textAlign: 'center',
    },
    hotelImage: {
        width: '100%',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    hotelText: {
        color: '#333', // Text color inside the card
    },
    noResults: {
        color: 'white', // No results text color
        fontStyle: 'italic',
    },
};

export default SearchResults;
