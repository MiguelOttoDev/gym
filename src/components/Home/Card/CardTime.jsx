import CarouselCard from "../CarouselCard";
import InfoCard from "./InfoCard";

export default function CardTime({ title, subtitle }) {
    return (
        <div className="flex w-full bg-zinc-950 rounded-md shadow-black shadow-lg">
            <div className="w-1/2 ">
                <CarouselCard />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
                <InfoCard title={title} subtitle={subtitle} />
            </div>
        </div>
    );
}
