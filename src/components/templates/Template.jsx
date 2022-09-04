import React from "react";

function Template({ template, color }) {
  return (
    <>
      <a
        className={`${color} card`}
        href={"create?template=" + template.name + "-" + template.id}
      >
        <div className="content">
          <div className="header">{template.name}</div>
          <div className="image">
            <img
              className="ui medium rounded image"
              src={template.image}
              alt={template.name}
              loading="lazy"
            />
          </div>
        </div>
        <div className="ui bottom attached button">
          <i className="add icon"></i>
          Use template
        </div>
      </a>
    </>
  );
}

export default Template;
