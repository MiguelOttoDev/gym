import Carousel from "./CarouselAbout";


export default function About() {


    return (
        <div className="flex justify-center items-center min-h-screen" id="About">
            <div className="flex flex-col  w-full relative gap-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12">
                    <div className="flex flex-col gap-2 max-w-lg">
                        <p className="text-lg font-semibold uppercase text-blue-700 tracking-[0.2em]">Sobre</p>
                        <p className="text-white text-3xl md:text-5xl font-bold leading-tight">
                            Uma comunidade <br />
                            dedicada ao bem-estar
                            e à busca pela <br />
                            excelência física.
                        </p>
                    </div>

                    <div className="max-w-lg flex flex-col gap-2">
                        <p className="text-zinc-400 text-lg text-justify leading-relaxed">
                            Uma academia que oferece uma experiência completa, com equipamentos modernos e de alta qualidade, ambiente motivador e acolhedor, profissionais qualificados para apoiar sua jornada e infraestrutura que inclui áreas de nutrição e suplementação, garantindo tudo o que você precisa para alcançar seus objetivos.
                        </p>
                        <div className='w-48 h-1 rounded-md bg-blue-700'></div>
                    </div>
                </div>

                <Carousel/>






            </div>
        </div>
    );
}
