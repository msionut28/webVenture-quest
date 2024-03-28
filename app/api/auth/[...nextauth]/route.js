import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

// Define a NextAuth handler for authentication
const handler = NextAuth({
    providers: [
        // Configuring Google authentication provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // Configuring GitHub authentication provider
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET, // Secret key used for session encryption
    callbacks: {
        // Callback for custom signIn logic
        async signIn({user}) {
            return user; // Return the user object after sign-in
        },
        // Callback for custom session handling
        async session({session, token}) {
            session.user.id = token.sub; // Set user ID in session from token
            return session; // Return updated session object
        }
    }
});

// Export the NextAuth handler for both GET and POST requests
export {handler as GET, handler as POST};