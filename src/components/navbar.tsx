import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [showSideMenu, setShowSideMenu] = useState(false)

    const navigate = useNavigate();

    const [showSubItems, setShowSubItems] = useState({
        selected: "",
        show: false
    })
    const navItems = [
        {
            link: "/",
            label: "Home"
        },
        {
            // link:"/",
            label: "Services",
            subItems: [
                {
                    link: "/services#web-development",
                    label: "Web Development"
                },
                {
                    link: "/services#mobile-development",
                    label: "Mobile Development"
                },
                {
                    link: "/services#logo",
                    label: "Product Design"
                },
                {
                    link: "/services#branding",
                    label: "Brand Identity"
                },
            ]
        },
        {
            link: "/about-us",
            label: "About Us"
        },
        {
            link: "/contact-us",
            label: "Contact Us"
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
        // setShowSideMenu(false)
        navigate(link);

        if (hash)
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
    };

    useEffect(() => {
        document.body.style.overflow = showSideMenu ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showSideMenu]);

    return (
        <nav className='z-[100] h-[104px] w-[100%] flex items-center justify-between'>
            <NavLink to={'/'}>
                <img src='/assets/logo-1.png' alt='logo' className='h-[30px] object-contain' />
            </NavLink>
            <ul className='md:flex hidden items-center gap-[30px] text-[1rem] font-[500] '>
                {
                    navItems.map((item, index) => (
                        <li key={index} className='cursor-pointer  flex items-center gap-[4px] relative '
                            onClick={() => handleToggleShowSubItems(item.label)}
                        >
                            <a href={item.link} className='hover:text-[#1354dc]'>
                                {item.label}
                            </a>

                            {item.subItems?.length && <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184 144 144 144-144"></path></svg>}


                            {(item.subItems?.length && item.label === showSubItems.selected && showSubItems.show) && <ul className='z-[100000000] flex flex-col gap-[8px] absolute top-[35px] w-[180px] p-[16px] py-[16px] text-[0.875rem] rounded-[5px] bg-white drop-shadow-md'>
                                {
                                    item.subItems.map((sub, index) => (
                                        <li className='h-[40px] font-[400]'>
                                            <button onClick={() => {
                                                const links = sub.link.split('#');

                                                handleNavigation({ link: links[0], hash: links[1] })

                                            }} className='hover:text-[#1354dc]'>
                                                {sub.label}
                                            </button>

                                        </li>
                                    ))
                                }
                            </ul>}

                        </li>
                    ))
                }
            </ul>

            <button className={`md:hidden block hamburger ${showSideMenu ? 'active' : ''} z-[1000000000]`}
                onClick={() => setShowSideMenu(prev => !prev)}
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>

            </button>

            {showSideMenu && <div className='sidemenu left-0 flex items-center justify-center  w-[100%] fixed h-[100vh] bg-white top-[0] z-[1000]'>
                <ul className='flex flex-col gap-[3rem]'>
                    {
                        navItems.map((item, index) => (
                            <li key={index} className='cursor-pointer  flex items-center gap-[4px] relative '
                                onClick={() => handleToggleShowSubItems(item.label)}
                            >
                                <a href={item.link} className='hover:text-[#1354dc]'>
                                    {item.label}
                                </a>

                                {item.subItems?.length && <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184 144 144 144-144"></path></svg>}


                                {(item.subItems?.length && item.label === showSubItems.selected && showSubItems.show) && <ul className='z-[100000000] flex flex-col gap-[8px] absolute top-[35px] w-[180px] p-[16px] py-[16px] text-[0.875rem] rounded-[5px] bg-white drop-shadow-md'>
                                    {
                                        item.subItems.map((sub, index) => (
                                            <li className='h-[40px] font-[400]'>
                                                <button onClick={() => {
                                                    const links = sub.link.split('#');

                                                    handleNavigation({ link: links[0], hash: links[1] })

                                                }} className='hover:text-[#1354dc]'>
                                                    {sub.label}
                                                </button>

                                            </li>
                                        ))
                                    }
                                </ul>}

                            </li>
                        ))
                    }

                </ul>
            </div>}
        </nav>
    )
}

export default Navbar