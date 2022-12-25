import React, { useRef, useState } from "react";
import propTypes from "prop-types";

const SearchBar = ({onSubmit}) => {

    const text = useRef()

    return (
        <div className="ui segment">
            <form
                role="search"
                className="ui form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit(text.current.value)
                }}>
                <div className="field">
                    <label>Animal SearchBar</label>
                    <input
                        ref={text}
                        type="text"
                        autoFocus />
                </div>
            </form>
        </div>
    )
}

SearchBar.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default SearchBar