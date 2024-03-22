"use client"

import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session } = useSession();
  return session ? (
    <div>Welcome, back!</div>
  ) : (
    <div>Please sign in to view your profile!</div>
  )
}

export default Profile
