import React from 'react';
// import {jobs} from '../jobs.json'; // Adjust the path according to your project structure
import JobListing from './JobListing'; 
import Spinner from './Spinner';
//no use api will use
import { useState,useEffect } from 'react';
const JobListings  = ({isHome=false})=>{
  const [jobs,setJobs] = useState([]);
  // const JobListings = isHome ? jobs.slice(0,3) :jobs;
  const[loading, setLoading] = useState(true);

// const JobListings = () => {
// //  to showing only three jobs
// const recentjobs = jobs.slice(0,3); 
//  // const { jobs } = jobsData;
useEffect(() =>{
  const fetchJobs = async () => {
    const apiUrl = isHome ? '/api/jobs?_limit=3':'/api/jobs';
    try{
      const res = await fetch(apiUrl);
      const data  =await res.json();
      setJobs(data);
    }
    catch(error){
console.log("error fetching data",error);
    }
    finally{
      setLoading(false);
    }
}
fetchJobs();
}, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent jobs':'Browse jobs'}
        </h2>
       
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
