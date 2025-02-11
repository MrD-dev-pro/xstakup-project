import React  from 'react';
import {  useNavigate } from 'react-router-dom';
import TypewriterComponent from 'typewriter-effect';

const services = [
    {
        label: "Application Development",
        subText: "We help you build a reliable and secured Mobile and Web Applications that simplify and enhance your businesses.",
        icon: "bg-[url('app-dev-remove.png')]",
        color: "#ffc74c"
    },
    {
        label: "Blockchain Development",
        subText: "We deliver blockchain solutions designed for your needs whether it's building dApps, smart-contracts or integrating blockchain into your system.",
        icon: "bg-[url('blockchain.png')]",
        color: "#0094C7"
    },
    {
        label: "Brand Identity",
        subText: "We help you craft powerful and cohesive identity that truly reflects your unique vision and value.",
        icon: "bg-[url('data-science.svg')]",
        color: "#0AAA46"
    },
    {
        label: "Product Design",
        subText: "Leverage our design experts to create an exceptional, customer-centric digital products.",
        icon: "bg-[url('design.svg')]",
        color: "#ff5f20"
    },
]


const Divider = ({ title }: { title: string }) => (
    <div className='flex items-center mt-[5rem] mb-[2rem]'>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className='w-[100%]' />
        </div>
        <div className='md:w-[80%] w-[100%] bg-[#0094c7] rounded-full px-[10px] text-white sm:text-[1.1rem] text-[0.875rem] text-center'>{title}</div>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className='w-[100%]' />
        </div>
    </div>
)

const Home = () => {
    const navigate = useNavigate()
    const handleNavigation = ({ link, hash }: { link: string; hash?: string }) => {
        navigate(link);
    
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <div className='h-full w-full py-[10%]'>
            <section className="font-[600] text-center relative sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]">
                <h1>Design, Develop and Deploy</h1>
                <h1 className="text-[#0094c7]">
                    <TypewriterComponent
                        options={{
                            strings: ["reliable products", "scalable products", "efficient products", "robust products"],
                            autoStart: true,
                            delay: 75,
                            loop: true,
                            cursor: '.',
                            cursorClassName: 'text-[1px]'
                        }}
                    />
                </h1>
                <h1>with on-demand engineering teams.</h1>
                <p className='mt-[8px] text-[#444] text-[17px] font-[400]'>Our world-class engineering team are ready to rapidly bring your ideas and projects to reality.</p>

                <div className='mt-[2rem] flex justify-center'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="hover:text-[#0094c7] hover:border-[1px] hover:border-[#603bd0] hover:bg-[#fff] sm:text-[1rem] text-[0.85rem] bg-[#0094c7] text-white rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] h-[50px] sm:w-[183px] w-[150px]">Let&apos;s Talk</button>
                </div>
            </section>

            {/* SERVICES */}
                
            <section>
    <Divider title='Our Services' />

    <ul className='grid md:grid-cols-2 grid-cols-1 services gap-4 text-left text-[#fff]'>
        {
            services.map((service, index) => (
                <li key={index}
                    style={{
                        backgroundColor: service.color,
                    }}
                    className={`p-[3rem] flex flex-col ${service.icon} rounded-[20px] w-[100%] min-h-[357px]`}>
                    <h3 className='sm:text-[2rem] text-[1.5rem] font-[600]'>{service.label}</h3>
                    <p className='mt-[20px] sm:text-[1rem] text-[0.85rem] mb-[1rem]' 
                        style={{
                            fontSize: '17px',
                            
                            letterSpacing: '0.05rem'
                        }}
                    >{service.subText}</p>

                    <button className={`w-fit bg-white mt-auto sm:text-[0.875rem] text-[0.8rem] h-[44px] sm:px-[2rem] px-[1.5rem] rounded-full`}
                        style={{
                            color: service.color
                        }}
                        onClick={() =>{
                            const serviceRoutes = [
                                { link: '/services', hash: 'app-development' },
                                { link: '/services', hash: 'block' },
                                { link: '/services', hash: 'branding' },
                                { link: '/services', hash: 'product' }
                            ];
                            
                            handleNavigation(serviceRoutes[index]);
                        }}
                    >Learn More</button>
                </li>
            ))
        }
    </ul>
</section>

        </div>
    )
}

export default Home;
