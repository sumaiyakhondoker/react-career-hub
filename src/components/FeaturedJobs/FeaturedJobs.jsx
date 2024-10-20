import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={`w-full flex justify-center my-6 ${dataLength === jobs.length && 'hidden'}  `}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn px-6  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-bold border-none"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
