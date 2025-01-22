import imgBanner from '../../assets/img/banner.jpg';

export default function Banner() {
    return (
        <div id='Home' className="relative h-screen flex flex-col justify-center items-center text-white mt-[64px]">
            <div
                className="absolute inset-0 bg-cover bg-center blur-sm"
                style={{ backgroundImage: `url(${imgBanner})` }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative flex flex-col gap-4 z-10 py-9 text-center px-4 md:pt-80 md:px-0">
                <p className='text-xl uppercase text-zinc-400 tracking-[0.4em]'>Bem-vindo(a)</p>
                <h1 className='text-5xl font-semibold'>A <span className='text-blue-700'>transformação</span> começa <br /> com o primeiro passo.</h1>
                <p className='text-xl font-semibold uppercase text-zinc-400 tracking-[0.2em]'>A cada treino, você fica <br /> mais perto do seu objetivo.</p>
                <a href="#Planos">
                <button className="text-xl font-semibold mx-auto border border-blue-700 px-14 py-3 rounded-md hover:bg-blue-700 transition duration-300 group w-auto max-w-max"> Adquira agora</button>
                </a>
            </div>
        </div>
    );
}