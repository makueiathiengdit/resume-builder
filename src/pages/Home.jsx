import React, { Suspense, lazy } from "react";
import Crousel from "../components/crousel/Crousel";

import Spinner from "../components/loaders/Spinner";

const TemplateList = lazy(() => import("../components/templates/TemplateList"));

function Home() {
  return (
    <div className="ui container">
      Home
      <Crousel />
      <Suspense fallback={<Spinner />}>
        <TemplateList />
      </Suspense>
    </div>
  );
}

export default Home;
