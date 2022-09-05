import { useState, useEffect } from "react";
function useTitle(title) {
  const [docTitle, setDocTitle] = useState(title);
  useEffect(() => {
    document.title = docTitle;
    // console.log(document.title);
  }, [docTitle]);

  return [docTitle, setDocTitle];
}

export default useTitle;
