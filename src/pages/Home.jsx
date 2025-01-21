import { useEffect } from "react";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Card from "../components/Home/Card/Card";
import CardTime from "../components/Home/Card/CardTime";
import Header from "../components/Home/Header";
import ButtonNavigation from "../components/Home/ButtonNavigation";
import Planos from "../components/Home/Planos";
import Vantagens from "../components/Home/Vantagens";
import Unidade from "../components/Home/Unidade";
import Footer from "../components/Home/Footer";

export default function Home() {

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        observer.unobserve(entry.target); // Para evitar re-execução constante
                    }
                });
            },
            { threshold: 0.1 } // Reduzi o threshold para ativar mais cedo
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            <Header />
            <ButtonNavigation/>
            <div className="flex flex-col gap-14">
                <Banner />
                
                <div className="max-w-6xl flex flex-col items-center justify-center w-full mx-auto gap-20">
                    
                    <div className="w-full fade-in">
                        <About />
                    </div>

                    <div className="w-full fade-in">
                        <Card
                            title="Variedade de máquinas"
                            subtitle="A nossa academia oferece equipamentos de alta qualidade e performance, preparados para atender a todos os objetivos, desde o condicionamento físico até o desenvolvimento muscular. Com marcas renomadas e equipamentos completos, garantimos uma estrutura moderna e eficiente para você alcançar o melhor desempenho."
                        />
                    </div>

                    <div className="w-full fade-in">
                        <CardTime
                            title="Nosso Time"
                            subtitle="Na nossa academia, contamos com treinadores especializados para ajudá-lo a alcançar seus objetivos de forma eficiente. Com ampla experiência e conhecimento técnico, eles criam planos de treino personalizados para atender às suas necessidades, visando maximizar seus resultados e promover um progresso contínuo."
                        />
                    </div>

                    <div className="w-full fade-in">
                        <Planos/>
                    </div>

                    <div className="w-full fade-in">
                        <Vantagens/>
                    </div>




                </div>
                        <Unidade/>
            </div>
            <Footer/>
        </>
    );
}
