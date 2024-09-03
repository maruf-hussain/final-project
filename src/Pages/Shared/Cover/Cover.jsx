import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <Parallax
        blur={{ min: -115, max: 115 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
           <div
            className="hero h-[500px] ">
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-full text-neutral-content text-center text-white">
                <div className=" bg-black opacity-50 py-16 px-24 rounded-2xl">
                    <h1 className=" text-5xl font-bold uppercase mb-4">{title}</h1>
                    <p className="mb-5">
                        WOULD YOU LIKE TO TRY A DISH!
                    </p>
                   
                </div>
            </div>
        </div>
    </Parallax>
    
    );
};

export default Cover;