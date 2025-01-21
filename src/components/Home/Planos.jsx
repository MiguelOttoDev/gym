import PlanosCard from "./Card/PlanosCard";

export default function Planos() {
    return (
        <div id="Planos" className="flex flex-col  w-full relative gap-10">

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12">
                <div className="flex flex-col gap-2 max-w-lg">
                    <p className="text-lg font-semibold uppercase text-blue-700 tracking-[0.2em]">Planos</p>
                    <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    Conheça os planos <br /> disponíveis
                    </p>
                </div>

                <div className="max-w-lg flex flex-col gap-2">
                    <p className="text-zinc-400 text-xl text-justify leading-relaxed">
                    Opções que se adequam aos seus objetivos.
                    </p>
                    <div className='w-48 h-1 rounded-md bg-blue-700'></div>
                </div>
            </div>

            <div className="flex justify-between flex-wrap">
                <PlanosCard plano="Plano mensal" valor="100" periodo="Mês"/>

                <PlanosCard plano="Plano diário" valor="20" periodo="Dia"/>

                

            </div>

        </div>
    )
}