import { useNavigate } from "react-router-dom"
import React from "react"



const Divider = ({ title }: { title: string }) => (
    <div className='flex items-center mt-[5rem] mb-[2rem]'>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className=' w-[100%]' />
        </div>

        <div className='md:w-[80%] w-[100%] bg-[#0094c7] rounded-full px-[10px] text-white sm:text-[1.1rem] text-[0.875rem] text-center'>{title}</div>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className=' w-[100%]' />
        </div>
        
        </div>
)
const services = [
    {
        id: "app-development",
        title: "Application Development",
        image: "./assets/Blak.png",
        text: (
            <div>
                <p>
                Build powerful, scalable, and intuitive applications that drive business growth.
Our application development services cover everything from concept to deployment, ensuring your software is robust, secure, and user-friendly.

                </p>
                <p className="text-[20px] text-[#0094c7] mt-[20px]">
                    What We Offer:
                </p>
                <ul className="list-disc pl-5">
                    <li>
                        Custom web and mobile app development
                    </li>
                    <li>
                    Cross-platform solutions (iOS, Android, Web)

                    </li>
                    <li>
                    API integration and backend development
                    </li>
                    <li>
                    Maintenance and support for existing applications
                    </li>
                </ul>
                <p className=" text-[20px] text-[#0094c7] mt-[20px]">
                    Why Choose Us?
                </p>
                <ul className="list-disc pl-5">
                    <li>
                    Tailored solutions to meet your business goals

                    </li>
                    <li>
                    Agile development methodology for faster delivery

                    </li>
                    <li>
                    Expertise in the latest technologies and frameworks
                    </li>
                    
                </ul>
            </div>
        )
    },
    {
        id: "block",

        title: "Blockchain Development",
        image: "./assets/realchain.png",
        text: (
            <div>
                <p>
                Unlock the potential of blockchain technology with secure, transparent, and decentralized solutions.
From smart contracts to decentralized applications (dApps), we help you harness the power of blockchain to innovate and stay ahead of the competition.

                </p>
                <p className="text-[20px] text-[#0094c7] mt-[20px]">
                What We Offer:

                </p>
                <ul className="list-disc pl-5">
                    <li>
                    Smart contract development and auditing

                    </li>
                    <li>
                    dApp development for various industries

                    </li>
                    <li>
                    Blockchain integration with existing systems

                    </li>
                    <li>
                    Cryptocurrency wallet development

                    </li>
                </ul>
                <p className=" text-[20px] text-[#0094c7] mt-[20px]">
                    Why Choose Us?
                </p>
                <ul className="list-disc pl-5">
                    <li>
                    Deep expertise in blockchain platforms (Ethereum, Hyperledger, Solana, etc.)


                    </li>
                    <li>
                    Focus on security, scalability, and transparency


                    </li>
                    <li>
                    End-to-end solutions tailored to your needs
                    </li>
                    
                </ul>
            </div>
        ),
    },
    {
        id: "branding",

        title: "Brand Identity",
        image: "./assets/realbrand.png",
       text: (
        <div>
            <p>
            Create a lasting impression with a strong and cohesive brand identity.
            Your brand is more than just a logo—it’s the story you tell and the emotions you evoke. We help you craft a unique identity that resonates with your audience and sets you apart from the competition.

            </p>
            <p className="text-[20px] text-[#0094c7] mt-[20px]">
                What We Offer:
            </p>
            <ul className="list-disc pl-5">
                <li>
                Logo design and visual branding


                </li>
                <li>
                Brand guidelines and style guides

                </li>
                <li>
                Packaging design and marketing collateral


                </li>
                <li>
                Rebranding and brand refresh services



                </li>
            </ul>
            <p className=" text-[20px] text-[#0094c7] mt-[20px]">
                Why Choose Us?
            </p>
            <ul className="list-disc pl-5">
                <li>
                Creative and strategic approach to branding
	
                </li>
                <li>
                Focus on storytelling and emotional connection



                </li>
                <li>
                Consistent and memorable brand experiences
                </li>
                
            </ul>
        </div>
    )
},
        {
        id: "product",

        title: "Product Design", 
        image: "./assets/product.png",
        text: (
            <div>
                <p>
                Design products that users love.
                Our product design services focus on creating intuitive, user-friendly, and visually appealing solutions that solve real problems and deliver exceptional experiences
                </p>
                <p className="text-[20px] text-[#0094c7]">
                    What We Offer:
                </p>
                <ul className="list-disc pl-5">
                    <li>
                    User research and persona development

                    </li>
                    <li>
                    Wireframing and prototyping



                    </li>
                    <li>
                    UI/UX design for web and mobile applications

                    </li>
                    <li>
                    Usability testing and iteration


                    </li>
                </ul>
                <p className=" text-[20px] text-[#0094c7]">
                    Why Choose Us?
                </p>
                <ul className="list-disc pl-5">
                    <li>
                    Human-centered design approach	
                    </li>
                    <li>
                    Expertise in the latest design tools and trends


                    </li>
                    <li>
                    Seamless collaboration with development teams
                    </li>
                    
                </ul>
            </div>
        )
    },
]

const Services = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full w-full py-[10%]'>
            <div className='md:max-w-[55%] w-[100%] mb-[3rem] ml-[295px] block justify-center'>
                <h1 className='sm:text-[3rem] text-[50px] text-center text-[#0094c7] max-[400px]:text-[2.3rem] font-[600]'>Tailored digital solutions designed for businesses like yours. </h1>
                <p className="text-[18 px] text-center ml-[30px]">
                Turn your vision into a market-ready product with XStakUp. We build for companies of all sizes and across every industry.
                </p>          

                <div className='mt-[2rem]'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className='ml-60 hover:text-[#0094c7] hover:border-[1px] hover:border-[#603bd0] hover:bg-[#fff] sm:text-[1rem] 
                        text-[0.85rem] bg-[#0094c7] font-[600] text-[#FFF] 
                        rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] 
                        h-[50px] sm:w-[183px] w-[150px]  ml-[295px]'>
                            Let&apos;s Talk
                        </button>
                </div>

            </div>
            <div>
                 <Divider title='Our Services' />
            </div>
        

            <div className=' mb-[3rem] w-[100%] flex flex-col gap-[3rem]'>
            
                {
                    services.map((service, index) => (

                        <section id={service.id} key={index} className={`pt-[3rem] flex  gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse  flex-col-reverse' : 'md:flex-row flex-col'} border-b-[1px] pb-[3rem]`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className='md:max-w-[50%] w-[100%] ml-[10px] mr-[10px]'
                            />

                            <div className="mr-[10px] ml-[15px]">
                                <h4 className='font-[600] text-[30px] mb-[8px] text-[#0094c7] text-center'>{service.title}</h4>
                                <p className='paraServices'>
                                    {service.text}
                                


                                </p>
                            </div>
                        </section>
                    ))
                }

            </div>





        </div>
    )
}

export default Services