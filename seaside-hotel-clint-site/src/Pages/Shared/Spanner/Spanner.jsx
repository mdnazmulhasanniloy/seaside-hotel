import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Spanner = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-[#000] ">
                <RingLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Spanner;