"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  console.log(session);

  return session ? (
    <div>Welcome back, {session.user?.name}!</div>
  ) : (
    <div>Please sign in to view your profile!</div>
  );
};

export default Profile;
