import './Thumbnail.css'
import React from 'react';

const Thumbnail = ({ name }) => {
    return (
        <div className="thumbnail">
            {name ? name[0] : 'J'}
        </div>
    );
};

export default Thumbnail;