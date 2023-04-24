import React from 'react'
import me from"../assets/me.jpg";
export default function ProfileImg() {
  return (
    <div className="text-center mb-4">
      <img
        src={me}
        alt="me"
        className="rounded-circle profile-img"
      />
    </div>
  )
}
