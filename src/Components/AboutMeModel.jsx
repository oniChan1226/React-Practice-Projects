
const AboutMeModel = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-customDark-dark bg-opacity-50 z-50">
            <div className="bg-customDark-light rounded-md p-5 md:p-8 max-w-md w-full relative">
                <button className="absolute top-2 right-2 text-gray-500 text-3xl" onClick={onClose}>
                    &times;
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AboutMeModel;
