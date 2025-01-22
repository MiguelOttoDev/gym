import { FaArrowRight } from "react-icons/fa6";

export default function PlanosCard({plano, valor, periodo}) {
    return (
        <div className="flex flex-col gap-6 w-full sm:w-5/12 border rounded-lg border-white py-8 px-6 sm:py-12 sm:px-10 items-center sm:items-start text-center sm:text-left">

            <div className="border border-white rounded-md w-32 text-center py-2 bg-zinc-900">
                <p className="text-white">{plano}</p>
            </div>

            <div>
                <p className="text-zinc-500 text-lg sm:text-xl mb-2">A partir de</p>
                <p className="text-white text-4xl sm:text-5xl">R${valor}<span className="text-xl sm:text-2xl">/{periodo}</span></p>
            </div>

            <button className="flex items-center text-lg sm:text-xl font-bold text-white justify-center sm:justify-start gap-2 bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition duration-300 group w-full">
                Ver Planos
                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
            </button>

            <button className="flex items-center text-lg sm:text-xl font-bold hover:border border border-zinc-950 text-white justify-center sm:justify-start gap-2 py-2 rounded-md hover:border-white transition duration-300 group w-full">
                Ver Planos
                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
            </button>
        </div>
    )
}
