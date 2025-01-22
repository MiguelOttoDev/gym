import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-20 w-full shadow-md bg-zinc-950 flex items-center py-4 px-6 justify-between text-zinc-100">
            
            <div>
                <a href="" className="text-4xl">Logo</a>
            </div>
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex gap-6 items-center text-xl font-semibold">
                <a href="#About" className="hover:text-blue-700 transition duration-300">Sobre</a>
                <a href="#Planos" className="hover:text-blue-700 transition duration-300">Planos</a>
                <a href="#Vantagens" className="hover:text-blue-700 transition duration-300">Vantagens</a>
                <a href="#Unidade" className="hover:text-blue-700 transition duration-300">Unidade</a>
                <a href="#Planos">
                    <button className="flex items-center gap-2 text-lg bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
                        Adquira Agora
                        <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                    </button>
                </a>
            </nav>

            {/* Ícone do Menu Mobile */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            
            {/* Menu Mobile */}
            <div className={`fixed top-0 right-0 h-full bg-zinc-900 w-64 p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
                <button onClick={() => setMenuOpen(false)} className="text-3xl mb-4">
                    <FaTimes />
                </button>
                <nav className="flex flex-col gap-4 text-xl font-semibold">
                    <a href="#About" className="hover:text-blue-700 transition duration-300">Sobre</a>
                    <a href="#Planos" className="hover:text-blue-700 transition duration-300">Planos</a>
                    <a href="#Vantagens" className="hover:text-blue-700 transition duration-300">Vantagens</a>
                    <a href="#Unidade" className="hover:text-blue-700 transition duration-300">Unidade</a>
                    <a href="#Planos">
                        <button className="flex items-center gap-2 text-lg bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
                            Adquira Agora
                            <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                        </button>
                    </a>
                </nav>
            </div>
        </header>
    );
}
