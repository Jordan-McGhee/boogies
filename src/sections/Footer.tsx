export default function Footer() {
    return (
        <footer className="py-10 text-white/80 text-sm font-bold">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div>© {new Date().getFullYear()} Boogie's Mini Markets — Atlanta</div>
                
                <div className="flex gap-4">jordan@boogies-atl.com</div>
            </div>
        </footer>
    );
}
