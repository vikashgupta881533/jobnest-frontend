function CategoryCard({ icon, title, jobs }) {
  return (
    <div className="category-card">

      <div className="category-icon">
        {icon}
      </div>

      <div className="category-info">
        <h3>{title}</h3>

        <p>{jobs} Open Positions</p>
      </div>

      <div className="category-arrow">
        →
      </div>

    </div>
  );
}

export default CategoryCard;