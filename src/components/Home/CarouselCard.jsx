import { useEffect, useState } from 'react';



export default function CarouselCard(){
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

    </div>
  );
};

