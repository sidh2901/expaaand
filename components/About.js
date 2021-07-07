import ReactForm from "./ReactForm"
function About() {
    return (
        <div className="relative flex items-center h-screen grid-cols-2 p-40 text-white bg-expaaand-pink justify-evenly">
        <div className="mr-10 ">
        <h1 className="text-5xl">
            We are an Impact Factory
        </h1>
        <p className="mt-5 ">Here we engineer indellible interactions, alter perceptions,  and compound social capital.
        <br />
        <br />
        Join our talent network and collaborate with inspired artists, storytellers, designers, engineers, programmers, ecologists, economists, changemakers, media makers and you.
        </p>
        </div>
        <div >
        <ReactForm />
        </div>
        </div>
    )
}

export default About
