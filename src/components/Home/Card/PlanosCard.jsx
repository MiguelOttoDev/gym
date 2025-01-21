import { FaArrowRight } from "react-icons/fa6";

export default function PlanosCard({plano, valor, periodo}) {
    return (
        <div className="flex flex-col gap-10 w-5/12 border rounded-lg border-white py-12 px-10">

            <div className="border border-white rounded-md w-32 text-center py-2 bg-zinc-900">
                <p className="text-white">{plano}</p>
            </div>

            <div>
            <p className="text-zinc-500 text-xl mb-2">A partir de</p>

            <p className="text-white text-5xl">R${valor}<span className="text-2xl">/{periodo}</span></p>
            </div>

            <button className="flex items-center text-xl font-bold text-white justify-center gap-2  bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
                Ver Planos
                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
            </button>

            <button className="flex items-center text-xl font-bold hover:border border border-zinc-950 text-white justify-center gap-2  py-2 rounded-md hover:border-white transition duration-300 group">
                Ver Planos
                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
            </button>

        </div>
    )
}