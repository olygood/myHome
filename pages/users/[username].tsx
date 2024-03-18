import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'

type UserData = {
    name: string
    bio: string
    // Add more fields as needed
}
export default function User({ userData }:{userData: UserData}) {
    const router = useRouter()
    const { username } = router.query as { username: string}

    return (
        <div className='flex flex-col w-full gap-4'>
            <h1>User: {username}</h1>
            <p>{userData.bio}</p>
            {/* Display more user data as needed */}
        </div>
    )
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
    const { username } = context.params as { username: string}

    // Read user data from a JSON file
    const filePath = path.join(process.cwd(), 'users', `${username}.json`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const userData = JSON.parse(fileContents)

    return {
        props: {
            userData,
        },
    }
}