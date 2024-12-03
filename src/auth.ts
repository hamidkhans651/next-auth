import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import CredentialsProvider from "next-auth/providers/credentials"
import Email from "next-auth/providers/email" 
import GoogelProvider from "next-auth/providers/google"
import { users } from "./schema"

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

                const user = await users.findOne({Email,}).select;
               
                if (password !== "passcode")
                    throw new CredentialsSignin({ cause: "password id not valid " });
                else return user;
            }


        })
    ],

})