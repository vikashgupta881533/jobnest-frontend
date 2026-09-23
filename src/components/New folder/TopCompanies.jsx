import CompanyCard from "./CompanyCard";


function TopCompanies() {

  const companies = [
    {
      logo: "GO",
      name: "Google",
      industry: "Technology",
      rating: "4.8",
      jobs: 245,
      location: "Bangalore"
    },
    {
      logo: "MS",
      name: "Microsoft",
      industry: "Software",
      rating: "4.7",
      jobs: 180,
      location: "Hyderabad"
    },
    {
      logo: "TC",
      name: "TCS",
      industry: "IT Services",
      rating: "4.5",
      jobs: 320,
      location: "Pune"
    },
    {
      logo: "AM",
      name: "Amazon",
      industry: "E-commerce",
      rating: "4.6",
      jobs: 210,
      location: "Bangalore"
    },
    {
      logo: "IN",
      name: "Infosys",
      industry: "Consulting",
      rating: "4.4",
      jobs: 290,
      location: "Mysore"
    },
    {
      logo: "AD",
      name: "Adobe",
      industry: "Design Software",
      rating: "4.9",
      jobs: 95,
      location: "Noida"
    }
  ];

  return (
    <section className="top-companies">

      <div className="container">

        <div className="company-heading">

          <div>
            <span className="section-label">
              TRUSTED EMPLOYERS
            </span>

            <h2>Top companies hiring now</h2>

            <p>
              Connect with companies that are actively hiring across India.
            </p>
          </div>

          <button className="company-view-all">
            Explore All →
          </button>

        </div>

        <div className="row g-4">

          {companies.map((company, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <CompanyCard
                logo={company.logo}
                name={company.name}
                industry={company.industry}
                rating={company.rating}
                jobs={company.jobs}
                location={company.location}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TopCompanies;