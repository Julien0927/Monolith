import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AboutUs() {
    return (
        <>
        <Navbar />
        <div className="flex items-center justify-center h-screen">
            <div
                className="text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                <h1 className="text-5xl font-bold text-black mb-4">About Us</h1>
            </div>
            </div>
        <Footer />
        </>
    )
}