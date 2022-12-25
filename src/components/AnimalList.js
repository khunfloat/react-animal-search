import React from "react";
import propTypes from "prop-types";

const AnimalList = ({animals}) => {
  return (
    <div className="ui container">
      <div className="ui cards">
        {animals.map(({ id, name, image, gallery, headline }) => (
          <div key={id} className="ui card" role="animal">
            <div className="ui slide masked reveal image">
              <img
                src={`http://codebangkok.com:5000/africa/hero/${image}.jpg`}
                className="visible content"
              />
              <img
                src={`http://codebangkok.com:5000/africa/gallery/${gallery[0]}.jpg`}
                className="hidden content"
              />
            </div>
            <div className="content">
              <a className="header">{name}</a>
              <div className="meta">
                <span className="date">{headline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AnimalList.propTypes = {
    animals: propTypes.array.isRequired
}

export default AnimalList;
