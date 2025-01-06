
const items = [
    {
        title: "Successful teams",
        details: "",
        image: "/assets/successful-card.svg",
        icon: "/assets/success.svg"
    },
    {
        title: "Agile culture",
        details: "",
        image: "/assets/agile-card.jpg",
        icon: "/assets/rocket.jpeg"
    },
    {
        title: "World class team",
        details: "",
        image: "/assets/world-class-card.svg",
        icon: "/assets/world-class-icon.svg"
    },
    {
        title: "Scalable teams",
        details: "",
        image: "/assets/scalable-card.svg",
        icon: "/assets/scalable-icon.svg"
    },
]
const About = () => {
    return (
        <div className='h-full w-full py-[10%] flex flex-col items-center'>
            <section className=" font-[600] relative  sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]">
                <h1>Creative Digital Solution</h1>
                <p className='mt-[8px] text-[#444] text-[1rem] font-[400] sm:max-w-[70%]'>
                    We are creators, thinkers and explorers. We design and build digital products not just for fun but, because we are curious people driven by continuous learning and solving problems skills. We have been helping businesses grow, through designing and creating digital platforms to connect with targeted audience, efficiently and effectively.       </p>

            </section>


            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-[4rem]">
                {
                    items.map(({ icon, title, image }, index) => (
                        <li className="bg-[#fff] drop-shadow-md p-[2rem] rounded-[15px]">
                            <div>
                                <div className="flex items-center gap-[10px] mb-[15px]">
                                    <img
                                        src={icon}
                                        alt={title}
                                    />
                                    <h3 className="font-[500] text-[1.2rem]">{title}</h3>
                                </div>

                                <p className="text-[0.875rem] text-[#515151] mb-[20px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, commodi. Libero officia fugiat eos consectetur unde! Distinctio perferendis quos cum illum amet facilis delectus tempora deserunt. Reiciendis labore excepturi impedit?</p>
                            </div>

                            <div>
                                <img
                                    src={image}
                                    alt="title"

                                />
                            </div>
                        </li>
                    ))
                }
            </ul>



        </div>
    )
}

export default About