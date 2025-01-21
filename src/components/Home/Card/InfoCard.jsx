import { FaArrowRight } from "react-icons/fa6";

export default function InfoCard({ title, subtitle }) {
    return (
        <div className="flex flex-col gap-4 px-4">
            <h1 className="text-white text-4xl">{title}</h1>
            <p className="text-justify break-words text-lg text-zinc-400">{subtitle}</p>
            <button className="flex items-center text-xl font-bold text-white justify-center gap-2 w-64 bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
                Ver Planos
                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
            </button>
        </div>
    );
}
