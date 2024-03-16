function LandingSearch() {
  return (
    <div className="container">
      <div className="page">
        <div id="main_search">
          <h1 id="main_title">Find the best deals today in India</h1> 
          <form>
            <input
              type="text"
              id="search_input"
              autoComplete="off"
              name="term"
              placeholder="Search for coupons, deals, stores etc."
            />
            <button type="button" value="SEARCH">
              SEARCH
            </button>
          </form>
          <div id="results_lists" style={{ display: "none" }}>
            <ul id="search_results"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSearch;
