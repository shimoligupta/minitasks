import { useState } from "react";

function ProfileCard({ name, role, avatarUrl, bio, skills = [], onFollow }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    const nextState = !isFollowing;
    setIsFollowing(nextState);
    if (onFollow) onFollow(nextState);
  };

  return (
    <div style={{
      maxWidth: "300px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <img
        src={avatarUrl}
        alt={`${name} avatar`}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <p style={{ color: "gray", margin: "5px 0" }}>{role}</p>
      <p style={{ fontSize: "14px" }}>{bio}</p>

      {skills.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          {skills.map((skill) => (
            <span key={skill} style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              backgroundColor: "#f3f3f3",
              borderRadius: "20px",
              fontSize: "12px"
            }}>
              {skill}
            </span>
          ))}
        </div>
      )}

      <button
        onClick={handleFollow}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          backgroundColor: isFollowing ? "#4caf50" : "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        {isFollowing ? "Following ✓" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
