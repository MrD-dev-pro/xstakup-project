import React from "react"
const items = [
    {
        title: "Expert Team",
        details: "",
        image: "/assets/successful-card.svg",
        icon: "/assets/success.svg",
        subText: "  Our skilled developers, designers, and strategists are passionate about delivering excellence."
    },
    {
        title: "Client-Centric Approach",
        details: "",
        image: "/assets/agile-card.jpg",
        icon: "/assets/rocket.jpeg",
        subText: "We work closely with you to understand your goals and deliver solutions that exceed expectations."
    },
    {
        title: "End-to-End Solutions",
        details: "",
        image: "/assets/world-class-card.svg",
        icon: "/assets/world-class-icon.svg",
        subText: "From ideation to execution, we handle every aspect of your project."
    },
    {
        title: "Proven Track Record",
        details: "",
        image: "/assets/scalable-card.svg",
        icon: "/assets/scalable-icon.svg",
        subText: "We’ve helped businesses across industries achieve their goals with innovative solutions."
    
    },
]
const About = () => {


    return (
        <div className='h-full w-full  '>
            <hr />
            <p className="text-center font-[600] text-[#0094c7] text-[50px] mt-[100px] mb-[50px]">
            We are Transforming Ideas Into Digital Reality
            </p>
            <hr />

            <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-[4rem] mb-[20px]">
                {
                    items.map(({ icon, title, image, subText }) => (
                        // eslint-disable-next-line react/jsx-key
                        <li className="bg-[#fff] drop-shadow-md p-[2rem] rounded-[15px]">
                            <div>
                                <div className="flex items-center gap-[10px] mb-[15px]">
                                    <img
                                        src={icon}
                                        alt={title}
                                    />
                                    <h3 className="font-[500] text-[1.5rem] text-[#0094c7]">{title}</h3>
                                </div>
                        
                                <p className="text-[0.875rem] text-[#515151] mb-[20px] text-[17px]">{subText}</p>
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

            <div className=" about_sec">
                 <div className="about_sub">
                <h1 className="text-[#0094c7] text-[30px]">Who We Are:</h1>
                <p className=''>
                At XStakUp, we are a team of passionate innovators, developers, and designers dedicated to helping businesses thrive in the digital age. Though we may be new to the scene, our collective expertise and commitment to excellence have already made us a trusted partner for businesses looking to transform their 
                ideas into reality. We specialize in creating cutting-edge solutions that are not only functional but also scalable, secure, and user-friendly. 
                </p>
                </div>
             </div>
                <div className="how">
                    <div className="how_sub leading-loose">
                    <p className=" text-[#0094c7] mt-[30px] text-[30px]">
                    How We Work

                    </p>
                    <p className=" ">
                    Collaboration and transparency are at the heart of everything we do. Here’s how we work to deliver exceptional results:

                    </p>
                    <ul className="list-decimal pl-5 tracking-loose ">
                        <li>
                        Understand Your Needs: We start by listening. By understanding your goals, challenges, and vision, we create tailored solutions that align with your business objectives.

                        </li>
                        <li>
                        Plan and Strategize: Our team develops a clear roadmap, ensuring every step of the project is well-defined and aligned with your expectations.

                        </li>
                        <li>
                        Design and Develop: Using the latest technologies and best practices, we bring your ideas to life with precision and creativity.

                        </li>
                        <li>
                        Test and Refine: We rigorously test our solutions to ensure they are robust, secure, and ready for the real world.

                        </li>
                        <li>
                        Deliver and Support: Our job doesn’t end at launch. We provide ongoing support to ensure your solution continues to perform at its best.
                        </li>
                    </ul>
                    <p className=" text-[#0094c7] mt-[30px] text-[30px]">
                    What We Do

                    </p>
                    <p>
                    We specialize in delivering end-to-end solutions that empower businesses to innovate and grow. Our services include:

                    </p>
                    <ul className=" list-disc pl-5 tracking-loose ">
                        <li>
                        Application Development: Building custom web and mobile applications that are scalable, secure, and user-friendly.

                        </li>
                        <li>
                        Blockchain Development: Creating decentralized solutions that enhance transparency, security, and efficiency.

                        </li>
                        <li>
                        Brand Identity: Crafting memorable and cohesive brand identities that resonate with your audience.

                        </li>
                        <li>
                        Product Design: Designing intuitive, user-centric products that solve real problems and deliver exceptional experiences
                        </li>
                    </ul>
                    <p>
                    Whether you’re a startup, SME, or enterprise, we have the expertise to help you achieve your goals.
                    </p>
                    </div>
                </div>

            <div className="Our_mission">
                <div className="Our_main">
                <h1 className="text-[50px] mb-[30px] text-center text-[#0094c7]">Our Mission</h1>
                <p className="justify-center">Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and success. We believe in the power of collaboration, creativity, and cutting-edge technology to solve complex problems and create meaningful impact.</p>
                <p className="text-[30px] mt-[20px] text-[#0094c7]">
                Why Choose Us?

                </p>
                <ul className="list-disc pl-5">
                    <li>
                    Expert Team: Our skilled developers, designers, and strategists bring years of experience and a passion for excellence.

                    </li>
                    <li>
                    Client-Centric Approach: Your success is our success. We tailor our solutions to meet your unique goals and challenges.

                    </li>
                    <li>
                    Focus on Quality: We deliver solutions that are robust, secure, and built to last.

                    </li>
                    <li>
                    Innovation-Driven: We stay ahead of the curve by embracing the latest technologies andtrends.
                    </li>
                </ul>
               
            </div>
            </div>
                <div className="m-20">
                <p className="mt-[20px] text-[50px] text-[#0094c7] text-center">
                Let’s Build Something Amazing Together. 
                </p>
                <p className="text-center text-[20px]">
                Let’s collaborate and bring your ideas to life.
                </p>
                </div>
           
        </div>
    )
}

export default About