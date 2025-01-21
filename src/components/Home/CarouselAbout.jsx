import { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";


const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
    },
    {
      id: 2,
      image: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ',
    },
    {
      id: 3,
      image: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Muda o slide a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-md">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-0 w-full text-white text-xl font-bold px-4 transform -translate-y-1/2">
        <div className="flex flex-col justify-start w-96 gap-2 ">
          <p className='text-2xl uppercase'>Nome de sua academia</p>
          <p className='text-lg font-normal text-justify'>A nossa academia foi criada para promover o bem-estar, a saúde e o desenvolvimento físico. Através de treinos focados na alta performance e no equilíbrio corporal, oferecemos um ambiente que une pessoas comprometidas com seus objetivos, proporcionando uma jornada de evolução contínua</p>
          <a href="#Planos" className="">
          <button className="flex items-center text-xl justify-center gap-2 w-64  bg-blue-600  py-2 rounded-md hover:bg-blue-700 transition duration-300 group">
            Ver Planos
            <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition duration-300" />
          </button>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Carousel;
