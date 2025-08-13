import React from 'react'
import { ClipLoader } from 'react-spinners';
const Loader = () => {

    return (
        <>
            <ClipLoader
                color="#00BDD3"
                cssOverride={{borderWidth: "6px",
                                borderColor: "transparent",
                                borderTopColor: "#00BDD3",}}
                loading
                size={48}
                speedMultiplier={1}
            />
        </>
    )
}

export default Loader
