import { CgGym } from "react-icons/cg";
import { GiMuscleUp, GiHouse } from "react-icons/gi";
import { BsClockFill } from "react-icons/bs";


const icones = {
    GiMuscleUp: GiMuscleUp,
    CgGym: CgGym, 
    GiHouse: GiHouse,
    BsClockFill:BsClockFill
};

export default function Vantagem({vantagem, icone}){



    const IconComponent = icones[icone];

    return(

        
        <div className="flex gap-2 items-center ">
            <div className="rounded-full bg-blue-700 py-2 px-2 text-center shadow-md shadow-zinc-900 ">
            {IconComponent && <IconComponent className="text-white text-3xl" />}
                
            </div>
            

            <p className="text-white font-bold text-2xl">{vantagem}</p>
            

        </div>
    )
}