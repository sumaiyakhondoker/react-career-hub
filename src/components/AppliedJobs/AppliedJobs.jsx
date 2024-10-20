import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/Localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    useEffect(()=>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            
        // one way-------------
        // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

        //another way ------------
        const jobsApplied = [];
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id === id)
            jobsApplied.push(job)
        }

        console.log(jobs, storedJobIds,jobsApplied);


        setAppliedJobs(jobsApplied)
        setDisplayJobs(jobsApplied)
        }
    },[jobs])

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
                setDisplayJobs(onsiteJobs)
            
        }
    }
    return (
        <div>
             



            <h2 className="text-3xl font-bold"> Applied Jobs: {appliedJobs.length}</h2>
            <details className="dropdown">
        <summary className="btn m-1">Filter By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=> handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job ={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;