import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import FavSearch from './FavSearch';

const Home = () => {
    return(
        <>
            <Search/>
            <QuickSearch/>
            <FavSearch/>
        </>
    )
}

export default Home