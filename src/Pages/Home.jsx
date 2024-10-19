import { useState } from "react"
import Buttons from "../Components/Utilities/Buttons"
import AboutMeModel from "../Components/AboutMeModel";

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
                <h2 className="text-2xl font-bold text-textColors-accent">About Me</h2>
                <p className="mt-2 tracking-wide">I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites.</p>
                <div className="mt-3">
                    <span className="border border-textColors-secondary px-2 py-1 rounded-full text-sm text-textColors-secondary">
                        #javascript
                    </span>
                </div>
            </AboutMeModel>
        </div>
    )
}