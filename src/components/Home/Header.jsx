import { FaArrowRight } from "react-icons/fa6";

export default function Header() {


    return (
        <header className="fixed top-0 left-0 right-0 z-20 w-full shadow-md bg-zinc-950 flex items-center py-4 justify-around text-zinc-100 align-middle">

            <div className=" ">
                <a href="" className="text-4xl">Logo</a>
            </div>


            <div className="flex gap-6 items-center text-xl font-semibold ">
                <a href="#About" className="hover:text-blue-700 transition duration-300">Sobre</a>
                <a href="#Planos" className="hover:text-blue-700 transition duration-300">Planos</a>
                <a href="#Vantagens" className="hover:text-blue-700 transition duration-300">Vantagens</a>
                <a href="#Unidade" className="hover:text-blue-700 transition duration-300">Unidade</a>
                <a href="#Planos" className="">
                    <button className="flex items-center gap-2 text-lg bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
                        Adquira Agora
                        <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
                    </button>
                </a>
            </div>


        </header>
    )
}