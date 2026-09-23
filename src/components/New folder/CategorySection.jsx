import CategoryCard from "./CategoryCard";


function CategorySection() {

  const categories = [
    {
      icon: "💻",
      title: "IT & Technology",
      jobs: "2,450"
    },
    {
      icon: "📊",
      title: "Marketing",
      jobs: "1,280"
    },
    {
      icon: "💰",
      title: "Finance",
      jobs: "850"
    },
    {
      icon: "🎨",
      title: "Design",
      jobs: "620"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      jobs: "540"
    },
    {
      icon: "⚙️",
      title: "Engineering",
      jobs: "970"
    },
    {
      icon: "🛒",
      title: "Sales",
      jobs: "1,150"
    },
    {
      icon: "🎓",
      title: "Education",
      jobs: "430"
    }
  ];

  return (
    <section className="category-section">

      <div className="container">

        {/* Heading */}

        <div className="category-heading">

          <div>
            <span className="section-label">
              EXPLORE OPPORTUNITIES
            </span>

            <h2>
              Find jobs by category
            </h2>

            <p>
              Explore opportunities that match your
              skills and career goals.
            </p>
          </div>

          <button className="view-all-btn">
            View All →
          </button>

        </div>


        {/* Cards */}

        <div className="row g-4">

          {categories.map((category, index) => (

            <div
              className="col-lg-3 col-md-6"
              key={index}
            >

              <CategoryCard
                icon={category.icon}
                title={category.title}
                jobs={category.jobs}
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CategorySection;