import EditProfile from "@/components/profile/EditProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile | ArtSync",
  description: "Update your profile information and get started with ArtSync.",
};

const EditProfilePage = () => {
  return <EditProfile />;
};

export default EditProfilePage;