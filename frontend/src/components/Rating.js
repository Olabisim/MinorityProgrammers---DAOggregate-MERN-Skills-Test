import React from "react";
import PropTypes from 'prop-types'

// const {value, text} = props;
const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <span>
                <i
                    //color : color mean color
                    style={{color: color}}
                    className={
                        value >= 1
                            ? "fas fa-star"
                            : value >= 0.5
                            ? "fas fa-star-half-alt"
                            // empty star far
                            : "far fa-star"
                    }
                >
                </i>
            </span>
            <span>
                <i
                    //color of default props
                    style={{color: color}}
                    className={
                        value >= 2
                            ? "fas fa-star"
                            : value >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                >
                </i>
            </span>
            <span>
                <i
                    //color of default props
                    style={{color: color}}
                    className={
                        value >= 3
                            ? "fas fa-star"
                            : value >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                >
                </i>
            </span>
            <span>
                <i
                    //color : color mean color
                    style={{color: color}}
                    className={
                        value >= 4
                            ? "fas fa-star"
                            : value >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                >
                </i>
            </span>
            <span>
                <i
                    //color : color mean color
                    style={{color: color}}
                    className={
                        value >= 5
                            ? "fas fa-star"
                            : value >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                    }
                >
                </i>
            </span>
            <span>
                {/* if text then show it */}
                {text && text}
            </span>
        </div>
    );
};


Rating.defaultProps = {
    color: "#f8e825"
}

// to me the meaning of proptype is just a simple validation to check
// datas that are passed in

// e.g. passing a number instead of a string

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}


export default Rating;
