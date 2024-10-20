import PropTypes from "prop-types";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="btn px-6 text-[#9873FF] border border-[#9873FF] font-bold mr-4">
            {remote_or_onsite}
          </button>
          <button className="btn px-6 text-[#9873FF] border border-[#9873FF] font-bold">
            {job_type}
          </button>
        </div>

        <div className="flex gap-6 my-3 ">
          <h2 className="flex">
            <GrLocation className="text-xl mr-2"></GrLocation>
            {location}
          </h2>
          <h2 className="flex">
            <HiOutlineCurrencyDollar className="text-xl mr-2"></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn px-6  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-bold border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
