import React from "react";
import { useSearchParams } from "react-router-dom";
import EducationForm from "../components/common/form/EducationForm";
import FormContainer from "../components/common/form/FormContainer";
import FormWrapper from "../components/common/form/FormWrapper";
import PersonalInfoForm from "../components/common/form/PersonalInfoForm";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import useTitle from "../hooks/useTitle";

function Create() {
  let [params] = useSearchParams();
  const [, ,] = useTitle("Create");
  console.log(params.get("template"));
  return (
    <div className="ui three column grid">
      <div className="four wide column">
        this column will container vertical stepper in case of mobile devices
      </div>
      <div className="eight wide column">
        <h1 className="header">Create</h1>
        <FormContainer>
          <ErrorBoundary>
            <FormWrapper title="Personal Info">
              <PersonalInfoForm />
            </FormWrapper>
          </ErrorBoundary>
          <ErrorBoundary>
            <FormWrapper title="Education">
              <EducationForm />
            </FormWrapper>
          </ErrorBoundary>
        </FormContainer>
      </div>
      <div className="two wide column">
        this will hold instructions about form
      </div>
    </div>
  );
}

export default Create;
