import user from "../assets/user.png"
import packageImg from "../assets/package.png"
import rocket from "../assets/rocket.png"



const GetStarted = () => {
    const steps = [
        {
            img : user,
            number: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
        },
        {
            img : packageImg,
            number: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
        },
        {
            img : rocket,
            number: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center relative bg-white rounded-2xl p-8  shadow-sm">
                    
                    <div className="flex items-center justify-center font-medium absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-600 text-white text-sm ">
                        {s.number}
                    </div>
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100  mb-6">
                        <img src={s.img} alt="" className="" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.description}</p>
                </div>
            ))}
        </div>
    );
};

export default GetStarted;