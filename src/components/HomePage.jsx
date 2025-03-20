import Navbar from './Navbar';
export default function HomePage() {

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen background-diagonal">
                <div
                    className="text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    >
                    <h1 className="text-5xl font-bold text-black mb-4">Home Page</h1>
                    <p className="text-lg text-gray-300">Cliquez pour entrer</p>
                </div>
            </div>
        </>
    )
}