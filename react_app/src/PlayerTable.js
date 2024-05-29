import PlayerRow from "./PlayerRow";

const PlayerTable = () => {
  const players = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "George Lindloef",
      mobile: "+4 315 25 62",
      email: "carlsen@armand.no",
      status: "Active",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Eric Dyer",
      mobile: "+2 315 25 65",
      email: "cristofer.ajer@lone.no",
      status: "Active",
    },
  ];
  return (
    <div className="players-list">
      <div className="member-table-container">
        <div className="member-table-header">
          <h2>Members</h2>
          <div className="header-buttons">
            <button className="btn btn-primary">Add new</button>
            <button className="btn btn-secondary">Import members</button>
            <button className="btn btn-secondary">
              Export members (Excel)
            </button>
            <button className="btn btn-secondary">Filter</button>
          </div>
        </div>
        <table className="member-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Member name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Operation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <PlayerRow key={index} player={player} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerTable;
