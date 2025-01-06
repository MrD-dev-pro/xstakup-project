import { useNavigate } from "react-router-dom"

const services = [
    {
        id: "web-development",
        title: "Web Development",
        image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: ""
    },
    {
        id: "mobile-development",

        title: "Mobile Development",
        image: "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: ""
    },
    {
        id: "logo",

        title: "Logo Development",
        image: "https://plus.unsplash.com/premium_photo-1683133723694-f5eff1e4c047?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: ""
    },
    {
        id: "branding",

        title: "Branding",
        image: "https://plus.unsplash.com/premium_photo-1661328251929-c530c82c59a4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: ""
    },
]
const Services = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full w-full py-[10%]'>
            <div className='md:max-w-[55%] w-[100%] mb-[3rem]'>
                <h1 className='sm:text-[3rem] text-[2rem] max-[400px]:text-[2.3rem]'>We are a team of product people, designers and developers who help companies build great products.</h1>
                <p className='mt-[8px] text-[1rem] font-[400]'>We love products. We believe that design is a collaborative process, and together we can make outstanding products.</p>

                <div className='mt-[2rem]'>
                    <button
                        onClick={() => navigate('/contact-us')}
                        className='hover:text-[#603bd0] hover:border-[1px] hover:border-[#603bd0] hover:bg-[#fff] sm:text-[1rem] text-[0.85rem] bg-[#603bd0] font-[600] text-[#FFF] rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] h-[50px] sm:w-[183px] w-[150px] '>Let's Talk</button>
                </div>

            </div>


            <div className='mb-[3rem] w-[100%] flex flex-col gap-[3rem]'>
                {
                    services.map((service, index) => (

                        <section id={service.id} key={index} className={`pt-[3rem] flex  gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse  flex-col-reverse' : 'md:flex-row flex-col'} border-b-[1px] pb-[3rem]`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className='md:max-w-[50%] w-[100%]'
                            />

                            <div>
                                <h4 className='font-[600] text-[1.5rem] mb-[8px]'>{service.title}</h4>
                                <p className='text-[0.875rem] text-[#444]'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae accusantium dignissimos quisquam dolorum. Dignissimos obcaecati quod magni, similique veniam, nisi sint illo, rerum amet sed ipsum officia sequi. Assumenda, qui!
                                    Fugit, quasi ipsam aliquam illo eaque aperiam veritatis libero dolore maxime, minima rerum quae iste eius fugiat magnam placeat. Beatae, doloribus tempore! Id eius voluptate cumque tempora. Nesciunt, accusamus laboriosam.
                                    Vel vero, accusamus ex quasi rem cum eum! Molestiae quibusdam repellat iusto! Et, nesciunt dicta iusto modi voluptatum quasi? Nemo accusantium non earum soluta sapiente magni sequi nesciunt repellendus quos?
                                    Provident nisi minima, debitis omnis fugiat eius quis natus, ex reiciendis deserunt amet odit enim repellat unde obcaecati, ratione consectetur mollitia tempore sed quam? Qui sunt quod ipsa magni aspernatur!
                                    Harum dicta pariatur modi quia accusamus voluptas a laboriosam cum laudantium vitae eius praesentium totam, adipisci ex minus voluptate reprehenderit autem porro quae, sapiente dolore saepe deleniti sed odit. Optio!

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