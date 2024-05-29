const Score = () => {
  return (
    <div className="container align-items-center mt-5 dash-bg">
      <div className="info row bg-light p-4 m-5 border rounded justify-content-center">
        <div className="score col-5 border border-dark rounded text-align-center">
          <span>Score</span>
          <p>89</p>
        </div>
        <div className="result row mt-3 justify-content-center">
          <div className="win border col-3 rounded-pill">
            <span>Win</span>
            <p>7</p>
          </div>
          <div className="loss border col-3 rounded-pill">
            <span>Loss</span>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
