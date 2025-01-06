import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className='w-[100%] bg-[#4f2fae] text-white py-[2.5rem] px-[10%]'>

            <div className='md:max-w-[45%] '>
                <h1 className='sm:text-[3.3125rem] text-[2.12rem] max-[400px]:text-[2.7rem]'>What will you build today?</h1>
                <p className='mt-[8px] text-[1rem] font-[400]'>Leverage our world-class engineering teams to get your ideas and projects up and running quickly.</p>

                <div className='mt-[2rem] flex '>
                    <button
                        onClick={() => navigate('/contact-us')}

                        className='hover:text-[#fff] hover:bg-[#4f2fae] hover:border-[1px] hover:border-[#fff] sm:text-[1rem] text-[0.85rem] bg-[#FFF] font-[600] text-[#603bd0] rounded-full sm:px-[1rem] px-[1rem] py-[8px] sm:h-[56px] h-[50px] sm:w-[183px] w-[150px] '>Let's Talk</button>
                </div>

            </div>

            <div className='flex justify-between md:flex-row flex-col gap-[3rem]'>
                <div className='md:flex-row flex-col flex items-start gap-[3rem] mt-[3rem] text-[0.875rem]'>

                    <ul className='flex flex-col gap-[1rem] '>
                        <li className='font-[600] mb-[.5rem] text-[1rem]'>Services</li>

                        <li>Web Development</li>
                        <li>Mobile Development</li>
                        <li>Logo Development</li>
                        <li>Branding</li>
                    </ul>
                    <ul className='flex flex-col gap-[1rem] '>
                        <li className='font-[600] mb-[.5rem] text-[1rem]'>Company</li>

                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                    <ul className='flex flex-col gap-[1rem] '>
                        <li className='font-[600] mb-[.5rem] text-[1rem]'>Contact Us</li>

                        <li>Feel free to get in touch with us.</li>
                        <li>Nigeria: +234 (800) 000 0000</li>
                        <li>email@xstakup.com</li>
                    </ul>
                </div>

                <div className='flex items-start gap-4'>
                    <a
                        className=''
                        href="https://ng.linkedin.com/company/enyata" target="_blank" rel="noreferrer noopener">
                        <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.6025 3.9375C5.6025 5.49113 4.35375 6.75 2.8125 6.75C1.27125 6.75 0.0225 5.49113 0.0225 3.9375C0.0225 2.385 1.27125 1.125 2.8125 1.125C4.35375 1.125 5.6025 2.385 5.6025 3.9375ZM5.625 9H0V27H5.625V9ZM14.6048 9H9.01575V27H14.6059V17.5511C14.6059 12.2974 21.3885 11.8676 21.3885 17.5511V27H27V15.6026C27 6.73763 16.9628 7.0605 14.6048 11.4244V9Z" fill="white"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/enyatahq/" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox='0 0 28 28' fill="none">
                            <path fill="#fff" d="M27.728 8.176c-.065-1.477-.304-2.493-.646-3.373a6.785 6.785 0 0 0-1.608-2.466 6.843 6.843 0 0 0-2.46-1.602C22.128.392 21.118.154 19.64.088 18.152.018 17.68.001 13.905.001c-3.775 0-4.248.017-5.73.082-1.478.065-2.493.304-3.373.646a6.784 6.784 0 0 0-2.466 1.608 6.846 6.846 0 0 0-1.603 2.46c-.342.886-.58 1.896-.646 3.374C.017 9.659 0 10.13 0 13.906c0 3.775.016 4.248.081 5.73.066 1.478.305 2.494.647 3.374.353.934.901 1.77 1.608 2.466a6.844 6.844 0 0 0 2.46 1.602c.886.342 1.896.581 3.373.646 1.483.066 1.956.082 5.73.082 3.776 0 4.248-.016 5.731-.082 1.477-.065 2.493-.304 3.373-.646a7.112 7.112 0 0 0 4.068-4.068c.342-.886.581-1.896.647-3.373.065-1.483.081-1.956.081-5.73 0-3.776-.005-4.248-.07-5.73Zm-2.503 11.352c-.06 1.358-.288 2.091-.479 2.58a4.612 4.612 0 0 1-2.64 2.64c-.488.19-1.227.418-2.58.478-1.466.065-1.906.081-5.615.081-3.71 0-4.156-.016-5.617-.081-1.358-.06-2.091-.288-2.58-.478a4.278 4.278 0 0 1-1.597-1.038 4.323 4.323 0 0 1-1.037-1.596c-.19-.49-.419-1.228-.478-2.58-.065-1.467-.082-1.907-.082-5.617s.017-4.155.082-5.616c.06-1.358.288-2.091.478-2.58a4.226 4.226 0 0 1 1.043-1.597c.45-.462.994-.815 1.597-1.037.488-.19 1.227-.419 2.58-.478 1.466-.065 1.906-.082 5.616-.082 3.715 0 4.155.017 5.616.082 1.358.06 2.091.288 2.58.478a4.275 4.275 0 0 1 1.597 1.037c.462.45.815.994 1.038 1.597.19.489.418 1.227.478 2.58.065 1.467.081 1.906.081 5.616s-.016 4.145-.081 5.611Z">
                            </path>
                            <path fill="#fff" d="M13.905 6.763a7.144 7.144 0 0 0-7.143 7.143c0 3.943 3.2 7.142 7.143 7.142 3.943 0 7.142-3.199 7.142-7.142 0-3.944-3.199-7.143-7.142-7.143Zm0 11.776a4.634 4.634 0 1 1 .001-9.268 4.634 4.634 0 0 1-.001 9.268ZM22.997 6.481a1.668 1.668 0 1 1-3.335 0 1.668 1.668 0 0 1 3.335 0Z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/EnyataHQ" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox='0 0 28 28' fill="none">
                            <path fill="#fff" d="M28.435 2.651c-1.024.45-2.116.748-3.254.892A5.616 5.616 0 0 0 27.665.422a11.288 11.288 0 0 1-3.581 1.367 5.646 5.646 0 0 0-9.77 3.862c0 .448.038.878.13 1.288-4.695-.23-8.85-2.48-11.64-5.908a5.686 5.686 0 0 0-.774 2.855A5.656 5.656 0 0 0 4.54 8.58a5.578 5.578 0 0 1-2.552-.696v.062a5.674 5.674 0 0 0 4.525 5.55c-.46.125-.96.186-1.48.186-.362 0-.727-.021-1.07-.097.732 2.237 2.809 3.881 5.278 3.935a11.348 11.348 0 0 1-7.003 2.409c-.463 0-.908-.021-1.352-.078a15.9 15.9 0 0 0 8.665 2.535c10.393 0 16.075-8.61 16.075-16.072 0-.25-.009-.49-.02-.73a11.267 11.267 0 0 0 2.83-2.933Z">
                            </path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/Enyata.Community/" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="21" viewBox='0 0 13 28' fill="none">
                            <path fill="#fff" d="M9.954 3.83h2.105V.164C11.696.114 10.447 0 8.992 0c-3.035 0-5.114 1.91-5.114 5.418v3.23H.53v4.098h3.35V23.06h4.105V12.748h3.214l.51-4.099H7.983V5.826c.001-1.185.32-1.996 1.97-1.996Z">
                            </path>
                        </svg>
                    </a>

                </div>
            </div>


            <div className='mt-[3rem]'>
                <img src='/assets/logo.png' alt='logo' className='h-[30px] object-contain' />

                <p className='mt-[2rem]'>Copyright © Xstakup 2025</p>
            </div>
        </footer>
    )
}

export default Footer