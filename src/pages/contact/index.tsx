
const Contact = () => {
    return (
        <div className='h-full w-full py-[10%] flex flex-col items-center'>
            <section className="flex flex-col items-center font-[600] text-center relative  sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]">
                <h1>Contact Us</h1>
                <p className='mt-[8px] text-[#444] text-[1rem] font-[400] sm:max-w-[70%]'>
                    Looking for the solution that best fits your business needs? Fill out the contact form and our Sales team will be in touch.    </p>

            </section>


            <form className="mt-[3rem] max-w-[651px] md:w-[651px] sm:w-[600px] w-[100%] p-[40px] border-[1px] rounded-[10px] min-h-[500px]">
                <div className="flex items-center sm:flex-row flex-col gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem]" htmlFor="firstname">First Name</label>
                        <input id="firstname" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                    <div className="w-[100%]">
                        <label htmlFor="lastname" className=" text-[0.875rem]">Last Name</label>
                        <input id="lastname" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label htmlFor="email" className=" text-[0.875rem]">Email</label>
                        <input id="email" type="email" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem]" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" className="text-[0.875rem] px-[10px] mt-[7px] h-[50px] w-[100%] border-[1px] outline-none rounded-[8px]" />
                    </div>

                </div>

                <div className="flex items-center gap-4 mb-[2rem]">
                    <div className="w-[100%]">
                        <label className=" text-[0.875rem]" htmlFor="phone">What are you looking to build?</label>
                        <textarea placeholder="Tell us more"
                            className="mt-[7px] w-[100%] block border-[1px] rounded-[8px] p-[10px] h-[100px]"
                        >

                        </textarea>
                    </div>

                </div>



                <div className='mt-[2rem] flex '>
                    <button
                        className='hover:text-[#603bd0] hover:border-[1px] hover:border-[#603bd0] hover:bg-[#fff] sm:text-[1rem] text-[0.85rem] bg-[#603bd0] font-[600] text-[#FFF] rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[50px] h-[45px] sm:w-[183px] w-[150px] '>Send Message</button>
                </div>


            </form>




        </div>
    )
}

export default Contact