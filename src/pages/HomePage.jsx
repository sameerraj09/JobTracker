import React from 'react'
// import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Homecards from '../component/Homecards';
// import Card from '../component/Card';
 import JobListings from '../component/JobListings';
 import ViewAllJobs from '../component/ViewAllJobs';
function HomePage() {
  return (
    <>
    <Hero/>
    <Homecards/>
    
    <JobListings  isHome= {true}/>
     <ViewAllJobs/>
    </>
  )
}

export default HomePage
