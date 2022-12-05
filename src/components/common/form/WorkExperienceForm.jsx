import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import TextArea from "../input/TextArea";

function WorkExperienceForm() {
  const work_experience = [
    {
      employer: "",
      job_title: "",
      job_description: [],
      start_date: "",
      end_date: "",
    },
  ];
  const handleBlur = () => {};
  const handleAdd = () => {};
  return (
    <div className="ui field">
      <Input
        label="Employer"
        type="text"
        id="employer"
        placeholder="e.g Kush Bank"
        passedValue={work_experience[0].employer}
        onBlur={handleBlur}
      />
      <Input
        label="Job Title"
        type="text"
        id="job_title"
        placeholder="e.g Branch Manager"
        passedValue={work_experience[0].job_title}
        onBlur={handleBlur}
      />
      <Input
        label="Start Date"
        type="date"
        id="start_date"
        placeholder="10-01-2016"
        passedValue={work_experience[0].start_date}
        onBlur={handleBlur}
      />
      <Input
        label="End Date"
        type="date"
        id="end_date"
        placeholder="15-04-2021"
        passedValue={work_experience[0].end_date}
        onBlur={handleBlur}
      />
      <TextArea label="Responsibilities/Descriptions" />
      <Button text="Add" onClick={handleAdd} />
    </div>
  );
}

export default WorkExperienceForm;
