import Hello from "@/components/hello";

const Home = () => {
    console.log('What type of component am i ')
    return (
        <main>

        <div className ='text-5xl'>Welcome to next js </div>
            <Hello />
        </main>
    )
}

export default Home

