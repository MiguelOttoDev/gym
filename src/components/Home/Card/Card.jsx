import CarouselCard from "../CarouselCard";
import InfoCard from "./InfoCard";

export default function Card({ title, subtitle }) {
    return (
        <div className="flex w-full bg-zinc-950 rounded-md shadow-black shadow-lg">
            <div className="w-1/2 flex items-center ">
                <InfoCard title={title} subtitle={subtitle} />
            </div>
            <div className="w-1/2">
                <CarouselCard />
            </div>
        </div>
    );
}
