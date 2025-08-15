import React from 'react';
import { ClipLoader } from 'react-spinners';
import { selectLoader } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const Loader = ( ) => {
    const isLoading = useSelector(selectLoader);
    return (
        <ClipLoader
        color="#00BDD3"
        size={48} // розмір кола
        speedMultiplier={1}
        loading={isLoading}
        cssOverride={{
            borderWidth: "6px",
        }}
        />
    );
};

export default Loader;
