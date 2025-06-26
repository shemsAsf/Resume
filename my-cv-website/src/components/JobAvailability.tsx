"use-client";

export default function JobAvailability() {
    return (
        <div className="bg-zinc-100/80 text-zinc-900 flex gap-2 flex-col text-[clamp(1rem,1vw,1.5rem)] w-full lg:w-2/3 rounded-xl p-4 ml-auto">
            <div>
                <img src="/Img/Icons/Alert.png" className="w-5" alt="Alert" />
            </div>
            <p>
                Currently looking for a full-time job starting in{" "}
                <strong>October 2025</strong>.
            </p>
            <div className="flex flex-col space-y-1 lg:text-base">
                <div className="flex items-center gap-2">
                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center gap-2">
                            <img src="/Img/Icons/Pin.png" className="w-5" alt="Location" />
                            <img src="/Img/Icons/Italy.png" className="w-5" alt="Italy" />
                            <span>Milano, Italy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/Img/Icons/Laptop.png" className="w-5" alt="Remote" />
                            <img src="/Img/Icons/Europe.png" className="w-5" alt="Europe" />
                            <span>Europe, Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}