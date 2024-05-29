const Dashheader = () => {
  return (
    <div className="dashheader">
      <div className="bg-dark text-light p-3 d-flex justify-content-between">
        <button className="dash-btn btn text-light btn-outline-light btn-block btn-dark">
          Dashboard
        </button>
        <span className="name bg-secondary rounded text-center btn">Name</span>
        <button className="user-btn btn btn-dark">Username</button>
      </div>
    </div>
  );
};

export default Dashheader;
