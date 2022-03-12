import React, { useState } from "react";
import "../components/MultipleList.css";
import DropdownIconOpen from "../images/dropdown-arrow-open.svg";
import DropdownIconClose from "../images/dropdown-arrow.svg";
import InputCloseBtn from "../images/inputCloseBnt.svg";
import TickIcon from "../images/tick-icon.svg";

const Multiplelist = () => {
  const jobs = [
    {
      id: 1,
      value: "Dizayner",
      isSelected: false,
    },
    {
      id: 2,
      value: "Rassom",
      isSelected: true,
    },
    {
      id: 3,
      value: "Artist",
      isSelected: false,
    },
    {
      id: 4,
      value: "Daturchi",
      isSelected: false,
    },
  ];

  const [selectedJobs, setSelectedJobs] = useState([]);

  const [jobsArr, setJobsArr] = useState(jobs);

  const [isInputOpen, setIsInputOpen] = useState(false);

  function handleRemove(item) {
    item.isSelected = false;
    setSelectedJobs(jobsArr.map((i) => !i.isSelected));
  }

  function handleAdd(item) {
    item.isSelected = true;

    setSelectedJobs(jobsArr.map((i) => !i.isSelected));
  }

  return (
    <div className="selector">
      <div id="selectorField">
        {/* selected list */}
        <div className="selectorField__list">
          {jobsArr?.map((job) => {
            if (job.isSelected) {
              return (
                <div className="selectorField__item">
                  <p className="selectorField__item-text">{job.value}</p>
                  <button
                    onClick={(e) => handleRemove(job)}
                    className="inputCloseBtn"
                  >
                    <img src={InputCloseBtn} />
                  </button>
                </div>
              );
            }
          })}
        </div>

        {/* is Active icon */}
        <button
          onClick={(e) => setIsInputOpen((prev) => !prev)}
          className="selector__arrow"
        >
          <img
            src={isInputOpen ? DropdownIconOpen : DropdownIconClose}
            alt=""
          />
        </button>
      </div>

      {/* option list */}

      <ul className="options__list">
        {isInputOpen &&
          jobsArr?.map((job) => {
            return (
              <li
                id={job.id}
                onClick={(e) => handleAdd(job)}
                className="options__item"
              >
                {job.value}
                <img src={job.isSelected ? TickIcon : ""} alt="" />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Multiplelist;
