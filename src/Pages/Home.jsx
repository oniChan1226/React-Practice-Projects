import { useState } from "react"
import Buttons from "../Components/Utilities/Buttons"
import AboutMeModel from "../Components/AboutMeModel";
import { Techs } from "../assets/Techs";
import Technologies from "../Components/Technologies";
import mySvg from '../assets/img.svg';

export const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return(
        <div className=" bg-customGray-dark text-textColors-primary">
            <div className="w-[85%] mx-auto flex flex-col justify-center items-start space-y-2 h-[80vh]">
             <h1 className="text-4xl md:text-7xl tracking-tight font-semibold">Fahad Khan</h1>
             <div className="text-base md:text-xl text-textColors-secondary">Web Developer</div>
             <Buttons onclick={handleOpenModal}>
                About Me
             </Buttons>
            </div>
            <AboutMeModel isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="grid text-center md:text-start md:grid-cols-2 place-items-center gap-4 object-cover">
                    <div>
                        <h2 className="text-2xl font-bold text-textColors-accent">About Me</h2>
                        <p className="mt-2 tracking-wide">I am a front-end developer specializing in React.js, with a strong foundation in building scalable systems and seamless user experiences.</p>
                        <Technologies techs={Techs} />
                    </div>
                    <div className="w-full h-full object-contain">
                        <img src={mySvg} className="w-full h-full object-contain" alt="image" />
                    </div>
                </div>
            </AboutMeModel>
        </div>
    )
}