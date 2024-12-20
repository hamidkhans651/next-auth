import React from 'react'
import { Mail } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const Page = () => {
    return (
        <div className='flex justify-center items-center h-dvh'>
            <Card>
                <CardHeader>
                    <CardTitle>Real estate</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent >

                    <form action={async (formData: FormData) => {

                        "use server"

                        const name = formData.get("name") as string | undefined


                    }} className='flex flex-col gap-4'>


                        <Input type="username" placeholder="username" name='name' />
                        <Input type="password" placeholder="password" name='pasword' />
                        <Input type="email" placeholder="Email" name='email' />
                        <Button asChild>
                            <Link href="/login">Sign-up</Link>
                        </Button>
                    </form>

                </CardContent>
                <CardFooter className='flex flex-col gap-4'>
                    <span>or</span>
                    <form action="" >
                        <Button type='submit' variant={'outline'}>

                            <Mail /> Login with Google
                        </Button>
                    </form>
                    <span>Already have an account?
                        <Link className='mt-2' href="/login"
                        > Login

                        </Link>


                    </span>

                </CardFooter>
            </Card>


        </div >
    )
}

export default Page
