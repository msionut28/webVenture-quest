import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Logout = () => {
    const router = useRouter()
    const redirect = () => {
        router.push("/login")
    }

    const handleSignOut = async () => {
        try {
          await signOut({redirect: false});
          redirect()
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };

    return (
        <button onClick={handleSignOut}>
            LOG OUT
        </button>
    )
}

export default Logout