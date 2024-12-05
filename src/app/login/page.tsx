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

                    <form action="" className='flex flex-col gap-4'>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="password" />
                        <Button asChild>
                            <Link href="/login">Login</Link>
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

                    <span>Don't have an account?
                        <Link className='mt-2' href="/signup"
                        > Signup
                        </Link>
                    </span>



                </CardFooter>
            </Card>


        </div >
    )
}

export default Page
