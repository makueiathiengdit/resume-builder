import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import EducationForm from "../components/common/form/EducationForm";
import FormContainer from "../components/common/form/FormContainer";
import FormWrapper from "../components/common/form/FormWrapper";
import PersonalInfoForm from "../components/common/form/PersonalInfoForm";
import WorkExperienceForm from "../components/common/form/WorkExperienceForm";
import SkillsForm from "../components/common/form/SkillsForm";
import HobbiesForm from "../components/common/form/HobbiesForm";
import ReferencesForm from "../components/common/form/ReferencesForm";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import DownloadForm from "../components/common/form/DownloadForm";
import useTitle from "../hooks/useTitle";
import Header from "../layout/header/Header";
import NextButton from "../components/common/button/NextButton";
import Steps from "../components/common/form/Steps";
const TOTAL_STEPS = 7;

function Create() {
  const [currentStep, setCurrentStep] = useState(1);
  let [params] = useSearchParams();
  const [, ,] = useTitle("Create");
  console.log(params.get("template"));
  const handleNext = () => {
    setCurrentStep(() => {
      if (currentStep < TOTAL_STEPS) return currentStep + 1;
    });
  };

  const handlePrev = () => {
    setCurrentStep(() => {
      if (currentStep > 0) return currentStep - 1;
    });
  };

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <>
      <div className="ui container">
        <Header />
      </div>
      <br></br>
      <br></br>
      <div className="ui container">
        <Steps onClick={handleStepClick} />
      </div>
      <br></br>
      <div className="ui three column grid">
        <div
          className="four wide column"
          style={{ borderRight: "1px solid blue" }}
        >
          <div>
            this column will container vertical stepper in case of mobile
            devices
          </div>
        </div>
        <div className="eight wide column">
          <h1 className="header">Create</h1>
          <FormContainer>
            <ErrorBoundary>
              {currentStep === 1 && (
                <FormWrapper title="Personal Info">
                  <PersonalInfoForm />
                </FormWrapper>
              )}
              {currentStep === 2 && (
                <FormWrapper title="Education Info">
                  <EducationForm />
                </FormWrapper>
              )}
              {currentStep === 3 && (
                <FormWrapper title="Work Experience">
                  <WorkExperienceForm />
                </FormWrapper>
              )}
              {currentStep === 4 && (
                <FormWrapper title="Skills Info">
                  <SkillsForm />
                </FormWrapper>
              )}
              {currentStep === 5 && (
                <FormWrapper title="References">
                  <ReferencesForm />
                </FormWrapper>
              )}

              {currentStep === 6 && (
                <FormWrapper title="Hobbies">
                  <HobbiesForm />
                </FormWrapper>
              )}
              {currentStep === 7 && (
                <FormWrapper title="Download">
                  <DownloadForm />
                </FormWrapper>
              )}
            </ErrorBoundary>
            <br></br>
            <br></br>
            <br></br>
          </FormContainer>
          <div className="btn-container" style={{ marginTop: "5px" }}>
            {currentStep >= 2 && (
              <NextButton text={"Prev"} direction="left" onClick={handlePrev} />
            )}
            {currentStep < TOTAL_STEPS && (
              <NextButton text={"Next"} onClick={handleNext} />
            )}
          </div>
        </div>
        <div
          className="two wide column"
          style={{ borderLeft: "1px solid blue" }}
        >
          this will hold instructions about form
        </div>
      </div>
    </>
  );
}

export default Create;
