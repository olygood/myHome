
export default function Olygood() {
    const userData = {
        name: 'Olygood',
        bio: 'This is Olygood\'s bio',
        // Add more information as needed
    }

    return (
        <div className='flex flex-col w-full gap-4'>
            <h1>User: {userData.name}</h1>
            <p>{userData.bio}</p>
            {/* Display more user data as needed */}
        </div>
    )
}