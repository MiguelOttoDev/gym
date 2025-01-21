import Vantagem from "./Vantagem";

export default function Vantagens() {
    return (
        <div id="Vantagens">
            <div className="flex flex-col md:flex-row  justify-between gap-8 px-6 py-12">
                <div className="flex flex-col gap-2 max-w-lg">
                    <p className="text-lg font-semibold uppercase text-blue-700 tracking-[0.2em]">Vantagens</p>
                    <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    Conheça as nossas <br />
                    <span className="text-blue-700">vantagens </span>
                    </p>
                </div>

                <div className="max-w-lg flex flex-col items-start  gap-4">
                    <Vantagem vantagem="Profissionais Especializados" icone="GiMuscleUp" />
                    <div className="ml-6 w-px h-20 bg-zinc-700 "></div>
                    <Vantagem vantagem="Equipamentos Variados" icone="CgGym" />
                    <div className="ml-6 w-px h-20 bg-zinc-700 "></div>
                    <Vantagem vantagem="Ambiente Climatizado" icone="GiHouse" />
                    <div className="ml-6 w-px h-20 bg-zinc-700 "></div>
                    <Vantagem vantagem="Horário de Funcionamento Ampliado" icone="BsClockFill" />
                    <div className="ml-6 w-px h-20 bg-zinc-700 "></div>
                    

                </div>

            </div>
        </div>
    )
}