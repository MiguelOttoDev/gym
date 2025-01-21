import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";


const icones = {
    IoLocationSharp: IoLocationSharp,
    BsFillTelephoneFill: BsFillTelephoneFill,
    BsClockFill: BsClockFill
};

export default function InfoUnidade({ title, subtitle, icone }) {

    const IconComponent = icones[icone];

    return (
        <div>
            <div className='flex gap-1  items-center text-2xl font-bold'>
                <h1 className='text-blue-700'>
                    {IconComponent && <IconComponent />}
                </h1>
                <p className=''>{title}</p>
            </div>

            <p className="text-gray-300 text-lg whitespace-pre-line">{subtitle}</p>
        </div>
    )
}