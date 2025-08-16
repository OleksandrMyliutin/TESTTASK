import React from 'react';
import { ClipLoader } from 'react-spinners';
import { selectLoader, selectSubmitting } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const Loader = ( ) => {
    const isLoading = useSelector(selectLoader);
    const  isSubmitting = useSelector(selectSubmitting);
    return (
        <>
            {isLoading && (<ClipLoader
            color="#00BDD3"
            size={48}
            speedMultiplier={1}
            loading={isLoading}
            cssOverride={{
                borderWidth: "6px",
            }}
            />)}
            {isSubmitting && (<ClipLoader
            color="#00BDD3"
            size={48}
            speedMultiplier={1}
            loading={isSubmitting}
            cssOverride={{
                borderWidth: "6px",
            }}
            />)}
        </>
    );
};

export default Loader;
