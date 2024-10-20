import { useLoaderData, useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md"
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/Localstorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(job);
    const {job_title,contact_information,job_description, job_responsibility, educational_requirements,experiences, salary} = job

    const {phone, email, address} = contact_information

    const handleApplyJob = ()=>{
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }
    return (
        <div>
           
            <h2 className="text-3xl font-bold text-center my-14">Job details</h2>

            <div className="grid grid-cols-4 gap-4">
                <div className="space-y-4 col-span-3">
                    <p><span className="font-bold">Job Description:</span>{job_description}</p>
                    <p><span className="font-bold">Job Responsibility:</span>{job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span><br />{educational_requirements}</p>
                    <p><span className="font-bold">Experiences:</span><br />{experiences}</p>
                    
                </div>
                <div className="bg-violet-100 p-4 rounded-md space-y-4">
                    <p className="font-bold pb-2 border-violet-200 border-b-2 ">Job Details: </p>
                    <div>
                    <p className="flex  items-center"><HiOutlineCurrencyDollar className="text-[#9873FF] text-xl mr-1"></HiOutlineCurrencyDollar><span className="font-bold">Salary:</span> {`${salary} (Per Month)`}</p>

                    <p className="flex  items-center"><SlCalender className="text-[#9873FF] text-lg mr-1"></SlCalender><span className="font-bold">Job Title:</span> {job_title}</p>
                    </div>



                    <p className="font-bold pb-2 border-violet-200 border-b-2 ">Contact Information: </p>
                    <div>
                    
                    <p className="flex  items-center"><HiOutlinePhone className="text-[#9873FF] text-lg mr-1"></HiOutlinePhone><span className="font-bold">Phone:</span> {phone}</p>
                    <p className="flex  items-center"><MdOutlineMailOutline className="text-[#9873FF] text-lg mr-1"></MdOutlineMailOutline><span className="font-bold">Email:</span> {email}</p>

                    <p className="flex  "><GrLocation className="text-[#9873FF] text-2xl mr-1"></GrLocation><span className="font-bold">Address: </span> {address}</p>
                    </div>
                    
                    <div>
                        <button onClick={handleApplyJob} className="w-full btn px-6  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white text-xl font-bold border-none">Apply Now</button>
                    </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            
        
    );
};

export default JobDetails;