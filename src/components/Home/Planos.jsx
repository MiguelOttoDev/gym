import PlanosCard from "./Card/PlanosCard";

export default function Planos() {
    return (
        <div id="Planos" className="flex flex-col w-full relative gap-10 px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
                <div className="flex flex-col gap-2 max-w-lg text-center md:text-left">
                    <p className="text-lg font-semibold uppercase text-blue-700 tracking-[0.2em]">Planos</p>
                    <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
                        Conheça os planos <br /> disponíveis
                    </p>
                </div>

                <div className="max-w-lg flex flex-col gap-2 text-center md:text-left">
                    <p className="text-zinc-400 text-xl leading-relaxed">
                        Opções que se adequam aos seus objetivos.
                    </p>
                    <div className='w-48 h-1 rounded-md bg-blue-700 mx-auto md:mx-0'></div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                <PlanosCard plano="Plano mensal" valor="100" periodo="Mês"/>
                <PlanosCard plano="Plano diário" valor="20" periodo="Dia"/>
            </div>
        </div>
    );
}