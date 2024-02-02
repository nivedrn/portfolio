import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio/portfolio";

export default function Home() {
    return (
        <main>
            <Navbar mode="portfolio" />
            <div className="flex min-h-screen flex-col items-center justify-top pt-3">
                <Portfolio />
            </div>
            <Footer/>
        </main>
    );
}
