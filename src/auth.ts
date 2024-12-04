import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import CredentialsProvider from "next-auth/providers/credentials"
import Email from "next-auth/providers/email"
import GoogelProvider from "next-auth/providers/google"
import { users } from "./schema"
import { compare } from 'bcryptjs'
import { User } from "./models/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GoogelProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }), CredentialsProvider({
            name: "Credentials",
            credentials: {
                Email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "password", type: "password" },
            },
            authorize: async (Credentials) => {
                const Email = Credentials.Email as string | undefined
                const password = Credentials.password as string | undefined

                if (typeof Email !== "string" || !password)
                    throw new CredentialsSignin({ cause: "Email and password is not valid" })

                const user = await User.findOne({ Email }).select("+password");
                
                if (!user)
                    throw new CredentialsSignin("invalid emial or password");

                if (!user.password)
                    throw new CredentialsSignin("invalid emial or password");

                const isMatch = await compare(password, user.password)

                if (!isMatch)
                    throw new CredentialsSignin("invalid emial or password");

                

            return {name:user.name, email:user.email, id:user.id};
            }


        })
    ],

})