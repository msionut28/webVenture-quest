import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async  signIn({user}) {
            return user
        },
        async session({session, token}) {
            session.user.id = token.sub
            return session
        }
    }
})

export {handler as GET, handler as POST}