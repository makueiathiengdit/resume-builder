import React from "react";
import Button from "../button/Button";

function DownloadForm() {
  const handlePreview = () => {};
  return (
    <div className="ui field">
      <Button text="View Preview" onClick={handlePreview} />
    </div>
  );
}

export default DownloadForm;
