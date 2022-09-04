import React, { Suspense, lazy } from "react";
import Crousel from "../components/crousel/Crousel";

import Spinner from "../components/loaders/Spinner";
import ErrorBoundary from "../components/errors/ErrorBoundary";

const TemplateList = lazy(() => import("../components/templates/TemplateList"));

function Home() {
  return (
    <>
      <div className="ui container">
        <h2>Home</h2>
        <Crousel />
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary>
            <TemplateList />
          </ErrorBoundary>
        </Suspense>
      </div>
    </>
  );
}

export default Home;
