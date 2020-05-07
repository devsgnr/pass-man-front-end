import React from "react";

const styling = {
  position: "absolute",
  bottom: "0",
};
const Profile = () => {
  return (
    <div style={styling} className="row pl-2 pt-4 pb-4">
      <div className="col-sm-7">
        <p className="text-light">
          John Doe
          <br />
          johndoe@gmail.com
        </p>
      </div>
      <div className="col-auto align-self-center">
        <button className="btn btn-link text-light">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
