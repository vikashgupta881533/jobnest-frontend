import JobCard from "./JobCard";

function FeaturedJobs() {

  const jobs = [
    {
      logo: "TN",
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Bhopal",
      salary: "6 - 10 LPA",
      type: "Full Time",
      experience: "1 - 3 Years",
      skills: ["React", "JavaScript", "CSS"],
      posted: "2 days ago"
    },

    {
      logo: "AI",
      title: "MERN Stack Developer",
      company: "AICore Technologies",
      location: "Indore",
      salary: "7 - 12 LPA",
      type: "Full Time",
      experience: "1 - 2 Years",
      skills: ["MongoDB", "Express", "React"],
      posted: "1 day ago"
    },

    {
      logo: "DS",
      title: "Data Analyst",
      company: "DataSphere",
      location: "Pune",
      salary: "5 - 9 LPA",
      type: "Full Time",
      experience: "0 - 2 Years",
      skills: ["SQL", "Excel", "Python"],
      posted: "3 days ago"
    },

    {
      logo: "MK",
      title: "Digital Marketing Executive",
      company: "MarketKing",
      location: "Delhi",
      salary: "4 - 7 LPA",
      type: "Full Time",
      experience: "1 - 3 Years",
      skills: ["SEO", "Google Ads", "Social Media"],
      posted: "4 days ago"
    },

    {
      logo: "FN",
      title: "Financial Analyst",
      company: "FinNext",
      location: "Mumbai",
      salary: "6 - 11 LPA",
      type: "Full Time",
      experience: "2 - 4 Years",
      skills: ["Excel", "Finance", "Power BI"],
      posted: "5 days ago"
    },

    {
      logo: "CL",
      title: "UI/UX Designer",
      company: "CreativeLabs",
      location: "Bangalore",
      salary: "5 - 10 LPA",
      type: "Remote",
      experience: "1 - 3 Years",
      skills: ["Figma", "UI Design", "UX"],
      posted: "1 week ago"
    }
  ];


  return (
    <section className="featured-jobs">

      <div className="container">

        {/* Heading */}

        <div className="jobs-heading">

          <div>

            <span className="section-label">
              OPPORTUNITIES
            </span>

            <h2>
              Featured jobs
            </h2>

            <p>
              Discover roles from companies looking for
              talented people like you.
            </p>

          </div>


          <button className="view-all-jobs">
            View all jobs →
          </button>

        </div>


        {/* Jobs */}

        <div className="row g-4">

          {jobs.map((job, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <JobCard
                logo={job.logo}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                type={job.type}
                experience={job.experience}
                skills={job.skills}
                posted={job.posted}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedJobs;