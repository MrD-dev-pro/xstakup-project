import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    
    const toTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [showSideMenu, setShowSideMenu] = useState(false)

    const navigate = useNavigate();

    const [showSubItems, setShowSubItems] = useState({
        selected: "",
        show: false
    })
    const navItems = [
        {
            link: "/about-us",
            label: "About us"
        },
        {
            link: "/Portfolio",
            label: "Portfolio"
        },
        {
            label: "Services",
            subItems: [
                {
                    link: "/services#app-development",
                    label: "App Development."
                },
                {
                    link: "/services#block",
                    label: "Blockchain Dev."
                },
                {
                    link: "/services#branding",
                    label: "Brand Identity"
                },
                {
                    link: "/services#product",
                    label: "Product Design"
                },
            ]
        },
        {
            link: "/contact-us",
            label: "Let's Talk",
            isButton: true
        },
    ]

    const handleToggleShowSubItems = (item: string) => {
        if (showSubItems.selected !== item) {
            setShowSubItems({
                selected: item,
                show: true
            })
        } else {
            setShowSubItems(prev => ({ ...prev, show: !prev.show }))
        }
    }

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

    useEffect(() => {
        document.body.style.overflow = showSideMenu ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSideMenu]);

    return (
        <nav className=' z-[100] h-[104px] w-[100%] flex items-center justify-between 
         sticky top-0 backdrop-blur-md bg-white/30 '>
            <NavLink to={'/'}>
                <div className='logo'>
                    <img src='/assets/real-logo.png' alt='logo' width= '250px' height='210px'
                    className='bg-transparent' onClick={toTop}/>
                </div>
            </NavLink>
            <ul className='md:flex hidden items-center gap-[30px] text-[17px] font-[500] mr-20'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer flex items-center gap-[4px] relative mr-10 ${
                            item.isButton ? '' : 'hover:underline'
                        }`}
                        onClick={() => handleToggleShowSubItems(item.label)}
                    >
                        {/* Render button for "Let's Talk" or other labels */}
                        {item.isButton ? (
                            <button
                                onClick={() => handleNavigation({ link: item.link })}
                                className="lets-talk-button no-underline hover:no-underline"
                           onClickCapture={toTop} >
                                {item.label}
                            </button>
                        ) : (
                            <a href={item.link} className="hover:text-[#0094c7] no-underline">
                                {item.label}
                            </a>
                        )}

                        {/* Display dropdown icon for subItems */}
                        {item.subItems?.length && (
                            <svg
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                viewBox='0 0 512 512'
                                height='1em'
                                width='1em'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='48'
                                    d='m112 184 144 144 144-144'
                                ></path>
                            </svg>
                        )}

                        {/* Render subItems if selected */}
                        {item.subItems?.length && item.label === showSubItems.selected && showSubItems.show && (
                            <ul className='z-[100000000] flex flex-col gap-[8px] absolute top-[35px] w-[180px] p-[16px] py-[16px] text-[0.875rem] rounded-[5px] bg-white drop-shadow-md'>
                                {item.subItems.map((sub, index) => (
                                    <li className='h-[40px] font-[400]' key={index}>
                                        <button
                                            onClick={() => {
                                                const links = sub.link.split('#');
                                                handleNavigation({ link: links[0], hash: links[1] });
                                            }}
                                            className='hover:text-[#0094c7] hover:underline'
                                        >
                                            {sub.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;
