// Importing necessary dependencies from Next.js and NextAuth
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

// Logout component for user sign-out
const Logout = () => {
    const router = useRouter();

    // Function to redirect to the login page
    const redirect = () => {
        router.push("/login");
    };

    // Function to handle sign-out process
    const handleSignOut = async () => {
        try {
            await signOut({ redirect: false }); // Sign out the user without redirecting
            redirect(); // Redirect the user to the login page
        } catch (error) {
            console.error('Error signing out:', error); // Log any errors that occur during sign-out
        }
    };

    return (
        // Button to trigger the sign-out process
        <button onClick={handleSignOut}>
            LOG OUT
        </button>
    );
};

export default Logout;
