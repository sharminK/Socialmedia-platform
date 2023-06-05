import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/porfileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/postSide/PostSide";
import RightSide from "../../components/rightSide/RightSide";

function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
}

export default Profile;
