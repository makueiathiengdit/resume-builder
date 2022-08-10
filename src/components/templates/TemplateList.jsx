import React, { useState, useEffect, Suspense, lazy } from "react";
import { fetchTemplates } from "../../utils/Functions";
import { COLOURS } from "../../constants/Constants";
// import Spinner from "../loaders/Spinner";
import Placeholder from "../loaders/Placeholder";

const Template = lazy(() => import("./Template"));

function TemplateList() {
  const [templates, setTemplates] = useState(() => fetchTemplates());
  useEffect(() => {
    let templatesFromStore = fetchTemplates();
    setTemplates(templatesFromStore);
  }, [templates.length]);
  return (
    <>
      <div className="ui horizontal divider header">
        <h2 className="header">
          Choose from professionally designed templates
        </h2>
      </div>
      <Suspense fallback={<Placeholder />}>
        <div className="ui three stackable cards">
          {templates.map((template, index) => (
            <Template
              template={template}
              key={template.id}
              color={COLOURS[index]}
            />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default TemplateList;
