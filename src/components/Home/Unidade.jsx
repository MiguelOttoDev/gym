import imgUnidade from '../../assets/img/local.png';
import InfoUnidade from './InfoUnidade';
import { FaArrowRight } from "react-icons/fa6";


export default function Unidade() {
    return (
        <div id='Unidade' className="relative min-h-screen flex flex-col justify-center text-white">
            {/* Imagem de fundo */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${imgUnidade})` }}
            ></div>

            {/* Card de informações */}
            <div className="absolute right-10 flex flex-col gap-6 bg-zinc-950 p-6 rounded-lg shadow-lg w-[700px]">
                <p className="text-white text-4xl font-bold">Nossa Unidade</p>

                <InfoUnidade title="Endereço" subtitle="Localização" icone='IoLocationSharp' />
                <InfoUnidade title="Número de Telefone" subtitle="+55 99999-9999" icone='BsFillTelephoneFill' />
                <InfoUnidade 
                    title="Horário de funcionamento"
                    subtitle={`Segunda a sexta das 05h às 00h\nSábado das 08h às 18h\nDomingos e feriados das 08h às 16h`}
                    icone='BsClockFill'
                />

                {/* Botão de navegação */}
                <a href="https://maps.app.goo.gl/QMF2nqAVeHaynN2k6" target="_blank">
                    <button className="flex items-center gap-2 font-bold text-lg bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Como Chegar?
                        <FaArrowRight />
                    </button>
                </a>
            </div>
        </div>
    );
}
