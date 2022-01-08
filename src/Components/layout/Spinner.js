import React from 'react'
// import PropTypes from 'prop-types';

const Spinner = props => {
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loader"></div>
                
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </div>
    )
}

// Spinner.propTypes = {

// }

export default Spinner
