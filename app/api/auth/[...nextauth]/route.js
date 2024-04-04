import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import findUserByEmail from '@/db/queries/findUserByEmail';
import findUserByUsername from "@/db/queries/findUserByUsername"
import nextauthCreateUser from '@/db/actions/nextauthCreateUser';
import credentialsCreateUser from '@/db/actions/credentialsCreateUser';

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
        }),
        Credentials({
            name: "Custom Login",       
            credentials: {
                username: {label: "username", type: "text"},
                password: {label: "password", type: "password"},
                email: {label: "email", type: "email"}
            },
            authorize: async(credentials, req) => {
                const { username, password } = credentials
                const user = await findUserByEmail(username)
                if (user && password) {
                    return user
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET, // Secret key used for session encryption
    callbacks: {
        // Callback for custom signIn logic
        async signIn({user}) {
            const existingUser = await findUserByEmail(user.email)
            if (existingUser) return user
            console.log("New user: ", user);
            nextauthCreateUser(user.email, user.image)
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