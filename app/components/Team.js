import Employee from "@/app/components/Employee";

export function Team({ team }) {
    return (
        <>
            <div
                className={'bg-[#EFEEE8] text-black w-[100dvw] min-h-dvh p-10 transition-all duration-300 ease-linear'}>
                <h2 className={`text-[18px] md:text-[24px] mb-16 font-ritma`}>OUR TEAM</h2>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-4 cursor-none'}>
                    {team.map((employee, index) => (
                        <Employee key={employee._key} displayText={employee.displayText} image={employee.image}
                                  lqip={employee.lqip} index={index}>
                        </Employee>
                    ))}
                </div>
            </div>
        </>
    );
}