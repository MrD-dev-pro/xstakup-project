import React from "react"
const items = [
    {
        title: "Address",
        icon: "/assets/Nigeria.svg"
    },
]
const Contact = () => {
    return (
        <div className='h-full w-full py-[10%] flex flex-col items-center'>
       
        <div className="cont">
            
         <section className=" mt-[0.5rem] max-w-[651px] md:w-[651px] sm:w-[600px] w-[100%] p-[40px] min-h-[500px] ml-20">
            <div className="ml-20 ">
                <h1 className="text-[4.5rem] font-bold text-[#0094c7]">Contact Sales</h1>
                <p className='mt-[8px] text-[#444] text-[17px] font-[500]'>
                    Looking for the solution that best fits your business needs? Fill out the contact form and our  team will be in touch as soon as possible.    </p>
                    <hr />
                    <div>
                        
                        <img src="./assets/Mockup1.png" alt="light-bulb" 
                        className="mt-5 "/>
                    </div>
            </div>
            </section>
            
            <div className="mr-40 bg-[white] mt-10 mb-10">

            <form className="mt-[3rem] max-w-[651px] md:w-[651px] sm:w-[600px] w-[100%] p-[40px] border-[1px] rounded-[10px] min-h-[500px]">
                <div className="flex items-center sm:flex-row flex-col gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem] font-[500]" htmlFor="firstname">First Name</label>
                        <input id="firstname" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                    <div className="w-[100%]">
                        <label htmlFor="lastname" className=" text-[0.875rem] font-[500]">Last Name</label>
                        <input id="lastname" className="font-[500] text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label htmlFor="email" className="font-[500] text-[0.875rem]">Email</label>
                        <input id="email" type="email" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem] font-[500]" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>

                </div>

                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem] font-[500]" htmlFor="phone">What do you want to build with XStakUp?</label>
                        <textarea placeholder="Tell us more"
                            className="mt-[7px] w-[100%] block border-[1px] rounded-[8px] p-[10px] h-[100px]"
                        >

                        </textarea>
                    </div>

                </div>



                <div className='mt-[2rem] flex '>
                    <button
                        className='hover:text-[#0094c7] hover:border-[1px] 
                        hover:border-[#0094c7] hover:bg-[#fff] sm:text-[1rem] 
                        text-[0.85rem] bg-[#0094c7] font-[600] text-[#fff] 
                        rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[50px] 
                        h-[45px] sm:w-[183px] w-[150px] '>Send Message</button>
                </div>


            </form>
        </div>
    </div>

        <div style={
            {
                backgroundImage: "url('assets/Mockup2.png')",
                backgroundSize:"cover",
                width:"800px",
                 height: "600px",
                 border: "2px solid #d3cfcf",
                 marginTop:"200px",
                 marginLeft:"40px",
                 justifyContent:"center"
            }
        }>
            <div >
                {
                    items.map(({ icon  }) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="flex space-x-40  ml-20 mt-20">
                                <div className="flex items-center gap-[10px] mb-[15px] mt-[-3px]">
                                    <img
                                        src={icon}
                                        alt="nigeria"
                                    />
                                    
                                </div>
                                <div className="mt-[50px] item-center">
                                    <p className=" text-[3rem] text-center">Nigeria</p>
                                    <p className="text-[1.5rem] text-center"> 19 Allen Road, Surulere </p>
                                    <p className="text-[1.5rem] text-center"> Lagos State, Nigeria.</p>
                                </div>
                                
                                

                                
                        </div>
                    
                    ))
                }
            </div>
        </div>

    </div>
    )
}

export default Contact