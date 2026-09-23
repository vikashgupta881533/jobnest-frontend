function HeroSearch() {

  function handleSearch(e) {
    e.preventDefault();

    console.log("Search clicked");
  }

  return (
    <form
      className="hero-search"
      onSubmit={handleSearch}
    >

      <div className="search-field">

        <span className="search-icon">
          🔍
        </span>

        <div>
          <label>Job title</label>

          <input
            type="text"
            placeholder="e.g. React Developer"
          />
        </div>

      </div>


      <div className="search-field">

        <span className="search-icon">
          📍
        </span>

        <div>
          <label>Location</label>

          <input
            type="text"
            placeholder="e.g. Bhopal"
          />
        </div>

      </div>


      <div className="search-field">

        <span className="search-icon">
          💼
        </span>

        <div>
          <label>Experience</label>

          <select defaultValue="">
            <option value="" disabled>
              Select experience
            </option>

            <option>Fresher</option>
            <option>1 - 2 Years</option>
            <option>2 - 5 Years</option>
            <option>5+ Years</option>
          </select>

        </div>

      </div>


      <button
        type="submit"
        className="hero-search-btn"
      >
        Search Jobs
      </button>

    </form>
  );
}

export default HeroSearch;