import  { useEffect, useState } from 'react'
import React from 'react'



const projects = [
    {
        task: "XPay simplifies your life by offering a comprehensive solution for buying and selling crypto, gift cards, airtime, and utility bills.",
        image: "/assets/project2.png",
        id: "1"
    },
    {
    
        image: "/assets/project1.png",
        task: (
            <>

Waterpro is a water treatment company in the USA that provides Reverse Osmosis Systems, Alkaline Reverse Osmosis Systems, Whole House Systems, and Water Softener Systems for rent and purchase. 
                <a href="https://water-pro.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View project
                </a>
            </>
        ),
        id: "2",
    },
    {

        image: "/assets/project3.png",
        task: "Diction masters is an Edutech software that helps individual and schools student to speak correct diction.",
        id: "3",
    }
]

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

const testimonials = [

    {
        id: 1,
        image: "./assets/project1.png",
        name: "YOLANDA ",
        designation: "CEO of Waterpro"
    }
    
]

const Portfolio = () => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)
    const [inorder, setInOrder] = useState(true)
    

    const updateCarousel = (index = 0) => {
        setInOrder(false)
        setCurrentIndex(index)
    }

    useEffect(() => {

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

    return (
        <div className='h-full w-full py-[10%]'>

            <section className="font-[600] text-[#0094c7] mb-20 text-center relative  sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]">
                <h1>Some of the projects we have designed and built for our clients.</h1>

                
            </section>

            <section>
                

                <ul className='grid md:grid-cols-2 grid-cols-1 gap-5 text-left text-[#000] flex items-center justify-center'>
                    {
                        projects.map(({ image, task}, index) => (
                            <li key={index}
                                className='relative flex items-center justify-center overflow-hidden  bg-white rounded-[15px] min-h-[700px]'
                            >
                                <img
                                    src={image}
                                    alt=''
                                    className='absolute top-[0] right-[0px]'
                                    style={{
                                        height: '70%',
                                        width: '100%',
                                    
                                    }}
                                />
                                <div className='absolute bottom-[0] left-[0px] bg-white/90 text-[2rem]'
                                style={{
                                    height:" 30%",
                                    width:"100%",
                                    
                                }}>
                                    
                                    <p className='text-[20px] mt-[20px]'>{task}</p>
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
                                        XStakUp delivered an exceptional website for Waterpro. Their team was professional, responsive, and truly understood our needs. The website is modern, user-friendly, and has significantly boosted our online presence. Highly recommend Xstakup for anyone looking for top-notch web development.


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
                                    key={index} className={`cursor-pointer h-[18px] w-[18px] border-[1px] flex items-center justify-center ${currentIndex === index ? 'border-[#0094c7]' : 'border-[transparent]'}  rounded-full `}>
                                    <div className='w-[8px] h-[8px] bg-[#0094c7] rounded-full' />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Portfolio;
