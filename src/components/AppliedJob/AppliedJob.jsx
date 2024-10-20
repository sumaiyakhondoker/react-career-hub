const AppliedJob = ({ job }) => {
  const { job_title, company_name, remote_or_onsite } = job;
  return (
    <div>
     

      <h2>
        {job_title} : {remote_or_onsite}
      </h2>
      <p>{company_name}</p>
    </div>
  );
};

export default AppliedJob;
