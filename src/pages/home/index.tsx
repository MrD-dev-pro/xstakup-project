import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TypewriterComponent from 'typewriter-effect'

const services = [
    {
        label: "Application Development",
        subText: "Simplify your business process with fully functional, visually-compelling web and mobile applications.",
        icon: "bg-[url('app-dev-remove.png')]",
        color: "#fa615c"
    },
    {
        label: "Product Design",
        subText: "Leverage design talent at scale to build customer-centric digital experiences.",
        icon: "bg-[url('design.svg')]",
        color: "#ffc74c"
    },
    {
        label: "Blockchain Development",
        subText: "Build trust with your users with intricate and secure blockchain systems.",
        icon: "bg-[url('blockchain.png')]",
        color: "#75cdfd"
    },
    {
        label: "Business Branding",
        subText: "Develop algorithms and machine learning infrastructure with our data scientists & engineers.",
        icon: "bg-[url('data-science.svg')]",
        color: "#000000"
    },
]


const projects = [
    {
        title: "Aegle Health",
        image: "/assets/project-1.webp",
        type: "Medical App",
        task: "Design & Development",
        id: "1",
    },
    {
        title: "Nourisha",
        image: "/assets/project-2.webp",
        type: "Food Delivery Service App",
        task: "Design & Development",
        id: "2",
    },
    {
        title: "Bitmama",
        image: "/assets/project-3.webp",
        type: "Crypto Exchange Mobile App",
        task: "Design & Development",
        id: "3",
    },
    {
        title: "Spraay",
        image: "/assets/project-4.webp",
        type: "Spraay Financial App",
        task: "Design & Development",
        id: "4",
    },
    {
        title: "Prestmit",
        image: "/assets/project-5.webp",
        type: "Crypto App",
        task: "Design & Development",
        id: "5",
    }
]

const Divider = ({ title }: { title: string }) => (
    <div className='flex items-center mt-[5rem] mb-[2rem]'>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className=' w-[100%]' />
        </div>

        <div className='md:w-[80%] w-[100%] bg-[#8267d2] rounded-full px-[10px] text-white sm:text-[1.1rem] text-[0.875rem] text-center'>{title}</div>
        <div className='w-full'>
            <hr className='mb-[2px] w-[100%]' />
            <hr className=' w-[100%]' />
        </div>

    </div>

)

const testimonials = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Elekwachi Uche",
        designation: "CEO BigApp"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Don Mama",
        designation: "CTO Anjuline Tech"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Young Chun",
        designation: "CEO Byters"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Elekwachi Uche",
        designation: "CEO BigApp"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Don Mama",
        designation: "CTO Anjuline Tech"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1728782595111-d521eab9bd93?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Young Chun",
        designation: "CEO Byters"
    },

]
const Home = () => {

    const carouselRef = useRef<HTMLUListElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)
    const [inorder, setInOrder] = useState(true)
    const navigate = useNavigate()

    const updateCarousel = (index = 0) => {
        setInOrder(false)
        // setPrevIndex(currentIndex)
        setCurrentIndex(index)
    }


    useEffect(() => {

        // if (!carousel || images.length <= 1) return;

        if (inorder) {
            const interval = setInterval(() => {
                setPrevIndex(currentIndex);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 7 * 1000);

            return () => clearInterval(interval);
        }
        else {
            setTimeout(() => {
                setInOrder(true)
            }, 5000);
        }
    }, [currentIndex, inorder]);


    useEffect(() => {
        const handleResize = () => {
            const carousel = carouselRef.current;
            if (carousel)
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [currentIndex]);
    return (
        <div className='h-full w-full py-[10%]'>
            <section className="font-[600] text-center relative  sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]">
                <h1>Build and ship</h1>
                <h1 className="text-[#7557D3]">
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
                <p className='mt-[8px] text-[#444] text-[1rem] font-[400]'>Leverage our world-class engineering teams to get your ideas and projects up and running quickly.</p>

                <div className='mt-[2rem] flex justify-center'>
                    <button
                        onClick={() => navigate('/contact-us')}

                        className='hover:text-[#603bd0] hover:border-[1px] hover:border-[#603bd0] hover:bg-[#fff] sm:text-[1rem] text-[0.85rem] bg-[#7557D3] text-white rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] h-[50px] sm:w-[183px] w-[150px] '>Let's Talk</button>
                </div>
            </section>



            {/* SERVICES */}
            <section >
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
                                <p className='mt-[20px] sm:text-[1rem] text-[0.85rem] mb-[1rem]'>{service.subText}</p>


                                <button className={`w-fit bg-white mt-auto sm:text-[0.875rem] text-[0.8rem] h-[44px] sm:px-[2rem] px-[1.5rem] rounded-full`}
                                    style={{
                                        color: service.color
                                    }}
                                >Learn More</button>
                            </li>

                        ))
                    }
                </ul>

            </section>


            <section>
                <Divider title='Featured Projects' />

                <ul className='grid md:grid-cols-2 grid-cols-1 gap-5 text-left text-[#fff]'>
                    {
                        projects.map(({ image, id, task, title, type }, index) => (
                            <li key={index}
                                className='relative flex items-center justify-center border-[1px] overflow-hidden drop-shadow-md bg-white rounded-[15px] min-h-[557px]'
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className='absolute top-[0] right-[0px]'
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />

                                <div
                                    className='bg-white h-fit min-h-[50%] mt-[auto] z-[100] p-[25px] text-[#000] h-[100%] w-[100%] flex flex-col'
                                >

                                    <h5 className='text-[1.1rem]'>{title}</h5>
                                    <h3 className='text-[2rem] font-[600] mt-[4px]'>{type}</h3>
                                    <p className='text-[#525252] text-[0.9rem] mt-[10px] mb-[2rem]'>{task}</p>

                                    <button className={`w-fit bg-[#7557D3] text-[#fff] mt-auto sm:text-[0.875rem] text-[0.8rem] h-[44px] sm:px-[2rem] px-[1.5rem] rounded-full`}

                                    >View Project</button>

                                </div>
                            </li>

                        ))
                    }
                </ul>

            </section>


            <section>
                <Divider title='Testimonials' />


                <div className='w-full relative h-fit overflow-hidden carousel'>
                    <ul className="flex items-center w-[100%] relative">
                        {
                            testimonials.map(({ image, name, designation }, index) => (
                                <li key={index} className={`border-l-[2px] px-[2rem] p-[1.2rem] border-l-[#633ed3] w-[100%] ${currentIndex === index && inorder ? 'caro-next' : prevIndex === index && inorder ? 'caro-leaving absolute' : currentIndex === index ? 'caro-show' : 'hidden'}`}>
                                    <div className='flex items-center gap-[1rem]'>
                                        <div>
                                            <img
                                                alt={name}
                                                src={image}
                                                className='w-[70px] h-[70px] rounded-full'
                                            />
                                        </div>

                                        <div>
                                            <h5 className='font-[600] '>{name}</h5>
                                            <h5 className='font-[400] text-[0.9rem]'>{designation}</h5>
                                        </div>
                                    </div>


                                    <div className='mt-[10px]'>
                                        <p className='font-[500]'>
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error voluptates sint, nemo perferendis molestias minima odit, nulla sunt fugit nam quod eveniet non dolorem nobis? Dolorem voluptatibus temporibus minima?"
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="flex items-center justify-center gap-4 mt-[1rem]">
                        {
                            testimonials.map((_, index) => (
                                <li
                                    onClick={() => updateCarousel(index)}
                                    key={index} className={`cursor-pointer h-[18px] w-[18px] border-[1px] flex items-center justify-center ${currentIndex === index ? 'border-[#633ed3]' : 'border-[transparent]'}  rounded-full `}>
                                    <div className='w-[8px] h-[8px] bg-[#633ed3] rounded-full' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Home