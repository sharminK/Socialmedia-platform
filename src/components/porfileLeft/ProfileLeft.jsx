import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import InfoCard from "../infoCard/InfoCard";
import LogoSearch from "../logoSearch/LogoSearch";

function ProfileLeft() {
  return (
    //className='ProfileLeft' not using bcz same design has 'ProfileSide'
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}

export default ProfileLeft;
