import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import React from 'react';



const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    

    const serviceRoutes = [
        { link: '/services', hash: 'app-development' },
        { link: '/services', hash: 'block' },
        { link: '/services', hash: 'branding' },
        { link: '/services', hash: 'product' }
    ];

    const handleNavigation = (route: { link: string; hash: string }) => {
        navigate(`${route.link}#${route.hash}`);
    };

    const services = [
        'App Development',
        'Blockchain Dev.',
        'Brand Identity',
        'Product Design'
    ];
    const toTop =()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    }
    

    return (
        <footer className=' w-[100%] bg-[#0094c7] text-white py-[2.5rem] px-[10%]'>

            <div className='md:max-w-[45%] '>
                <h1 className='sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[17px]'>What are you building today?</h1>
                <p className='mt-[8px] text-[17px] font-[400]'>Turn your vision into a market-ready product with XStakUp.</p>

                <div className='mt-[2rem] flex '>
                    <button
                        onClick={() => navigate('/contact-us')} onClickCapture={toTop}

                        className='hover:text-[#fff] hover:bg-[#0094c7] hover:border-[1px] hover:border-[#fff] sm:text-[1rem] text-[17px] bg-[#FFF] font-[600] text-[#0094c7] rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] h-[50px] sm:w-[183px] w-[150px] '>Let&apos;s Talk</button>
                </div>

            </div>
        <div className='footer_body'>
            <div className='mt-[5px] mr-[75px] ml-[-25px]'>
                <NavLink to={'/'}>
                    <img src='/assets/footer-logo.png' alt='logo' className=' h-[150px] object-contain ' onClick={toTop}/>
                    
                </NavLink>
                
            </div>
            <div className=''>
                <div className='all_components'>

                    
                    <div className='component_2'>
                    
                    <li className='font-[600] text-[23px] list-none'>Services</li>
            {services.map((service, index) => (
                <li
                    key={index}
                    className='list-none cursor-pointer'
                    onClick={() => handleNavigation(serviceRoutes[index])}
                >
                    {service}
                </li>
            ))}
                    
                    </div>
                       
                    <div className='component_1'>
                        
                            <li className='font-[600]  text-[23px] list-none mb-[8px]'>Company</li>
                            <NavLink to='/about-us'>
                            <li className='list-none'  onClick={toTop}>About Us</li>
                            </NavLink>
                            <NavLink to='/Privacy' >     
                            <li className='list-none' onClick={toTop}> Privacy Policy</li> 
                            </NavLink>
                            <NavLink to='/Legal'>
                                <li className='list-none ' onClick={toTop}>T&C</li>
                            </NavLink>
                       
                        
                        
                </div>
                    <div className='component_1'>
                        
                            <li className='font-[600] mb-[.5rem] text-[23px] list-none'>Contact Us</li>

                            <li className='list-none'>Get in touch with us.</li>
                            <a href="tel:+2348062894114 ">
                                <li className='list-none '>Nigeria: +234 (806) 289 4114   </li>
                            </a>
                            <a href="tel:+2349050261635">
                            <li className='list-none '>Nigeria: +234 (905) 026 1635</li>
                            </a>
                            <li className='list-none '>
                            <a href="mailto:build@xstakup.com">build@xstakup.com</a>
                            </li>
                        
                </div>
                </div>
                </div>
   
            </div>
            <div className='mt-[20px]'>
          <button onClick={toTop} className=''><FaArrowUp title='back to top' className="sticky top-4 text-green-500 mr-2" size={24} /></button>    
            
            </div>
            
            <div className='copyRight'>
                
                <p className='text-[18px]'>Copyright © XStakUp 2025.  All rights reserved</p>
            <div className='copyRight_sub'>
                    <a
                        className='ml-[30px]'
                        href="https://www.linkedin.com/xstakup/" target="_blank" rel="noreferrer noopener">
                        <svg width="25" height="25" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.6025 3.9375C5.6025 5.49113 4.35375 6.75 2.8125 6.75C1.27125 6.75 0.0225 5.49113 0.0225 3.9375C0.0225 2.385 1.27125 1.125 2.8125 1.125C4.35375 1.125 5.6025 2.385 5.6025 3.9375ZM5.625 9H0V27H5.625V9ZM14.6048 9H9.01575V27H14.6059V17.5511C14.6059 12.2974 21.3885 11.8676 21.3885 17.5511V27H27V15.6026C27 6.73763 16.9628 7.0605 14.6048 11.4244V9Z" fill="white"></path></svg>
                    </a>
                    <a className='ml-[40px]' href="https://www.instagram.com/xstakup/" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox='0 0 28 28' fill="none">
                            <path fill="#fff" d="M27.728 8.176c-.065-1.477-.304-2.493-.646-3.373a6.785 6.785 0 0 0-1.608-2.466 6.843 6.843 0 0 0-2.46-1.602C22.128.392 21.118.154 19.64.088 18.152.018 17.68.001 13.905.001c-3.775 0-4.248.017-5.73.082-1.478.065-2.493.304-3.373.646a6.784 6.784 0 0 0-2.466 1.608 6.846 6.846 0 0 0-1.603 2.46c-.342.886-.58 1.896-.646 3.374C.017 9.659 0 10.13 0 13.906c0 3.775.016 4.248.081 5.73.066 1.478.305 2.494.647 3.374.353.934.901 1.77 1.608 2.466a6.844 6.844 0 0 0 2.46 1.602c.886.342 1.896.581 3.373.646 1.483.066 1.956.082 5.73.082 3.776 0 4.248-.016 5.731-.082 1.477-.065 2.493-.304 3.373-.646a7.112 7.112 0 0 0 4.068-4.068c.342-.886.581-1.896.647-3.373.065-1.483.081-1.956.081-5.73 0-3.776-.005-4.248-.07-5.73Zm-2.503 11.352c-.06 1.358-.288 2.091-.479 2.58a4.612 4.612 0 0 1-2.64 2.64c-.488.19-1.227.418-2.58.478-1.466.065-1.906.081-5.615.081-3.71 0-4.156-.016-5.617-.081-1.358-.06-2.091-.288-2.58-.478a4.278 4.278 0 0 1-1.597-1.038 4.323 4.323 0 0 1-1.037-1.596c-.19-.49-.419-1.228-.478-2.58-.065-1.467-.082-1.907-.082-5.617s.017-4.155.082-5.616c.06-1.358.288-2.091.478-2.58a4.226 4.226 0 0 1 1.043-1.597c.45-.462.994-.815 1.597-1.037.488-.19 1.227-.419 2.58-.478 1.466-.065 1.906-.082 5.616-.082 3.715 0 4.155.017 5.616.082 1.358.06 2.091.288 2.58.478a4.275 4.275 0 0 1 1.597 1.037c.462.45.815.994 1.038 1.597.19.489.418 1.227.478 2.58.065 1.467.081 1.906.081 5.616s-.016 4.145-.081 5.611Z">
                            </path>
                            <path fill="#fff" d="M13.905 6.763a7.144 7.144 0 0 0-7.143 7.143c0 3.943 3.2 7.142 7.143 7.142 3.943 0 7.142-3.199 7.142-7.142 0-3.944-3.199-7.143-7.142-7.143Zm0 11.776a4.634 4.634 0 1 1 .001-9.268 4.634 4.634 0 0 1-.001 9.268ZM22.997 6.481a1.668 1.668 0 1 1-3.335 0 1.668 1.668 0 0 1 3.335 0Z">
                            </path>
                        </svg>
                    </a>
                    <a className='ml-[30px]' href="https://x.com/xstakup" target="_blank" rel="noreferrer noopener">
                        <img src="/assets/x-perfect.png" alt="X" width = '53' height = '53' />
                    </a>
                    <a className='ml-[30px]' href="" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox='0 0 13 28' fill="none">
                            <path fill="#fff" d="M9.954 3.83h2.105V.164C11.696.114 10.447 0 8.992 0c-3.035 0-5.114 1.91-5.114 5.418v3.23H.53v4.098h3.35V23.06h4.105V12.748h3.214l.51-4.099H7.983V5.826c.001-1.185.32-1.996 1.97-1.996Z">
                            </path>
                        </svg>
                    </a>

                </div>

            </div>
        
           
        </footer>
    )
}

export default Footer