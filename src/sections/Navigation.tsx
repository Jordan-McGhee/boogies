import boogie from "@/assets/boogie.png";

export default function Navigation() {

    return (
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <a href="#" aria-label="Home" className="flex items-center gap-4">
                <img src={boogie} alt="Boogie's Mini Markets" className="h-12" />
                <p className="text-3xl pt-3" style={{ fontFamily: "'Luckiest Guy', cursive" }}>Boogie's</p>
            </a>

            <nav className="hidden md:flex gap-6 items-center text-white text-xl" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                <a className="hover:text-[#ff4df0]" href="#about">About</a>
                <a className="hover:text-[#ff4df0]" href="#products">Products</a>
                <a className="hover:text-[#ff4df0]" href="#serve">Who We Serve</a>
                <a className="hover:text-[#ff4df0]" href="#how">How It Works</a>
                <a className="hover:text-[#ff4df0]" href="#faq">FAQs</a>
                <a className="hover:text-[#ff4df0]" href="#contact">Contact</a>
            </nav>

            <div className="md:hidden text-white">☰</div>
        </header>
    );
}
