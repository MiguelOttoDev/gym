import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ButtonNavigation() {
    return (
        <div>
            <a href="#Home">
                <button
                    className="fixed bottom-5 right-5 p-3 rounded-full border-2 border-blue-700  shadow-xl hover:shadow-zinc-900"
                >
                    <FaArrowAltCircleUp className="text-blue-700 text-3xl" />
                </button>
            </a>
        </div>
    );
}
