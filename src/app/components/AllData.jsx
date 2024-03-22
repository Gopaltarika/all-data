"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const AllData = () => {
    const [data, setdata] = useState("Tab1")

    const changeTab = (event) => {
        setdata(event.target.value);
    }

    return (
        <div>
            <nav className='h-[100px] flex justify-center w-full fixed bg-white'>
                <div className="max-w-[1140px] mx-auto px-3 w-full flex justify-between  items-center">
                    <label htmlFor="month">
                        <select id="month" className='border-[2px] px-3 border-black py-2 rounded-2xl' onChange={changeTab}>
                            <option value="Tab1" className='text-[20px] font-semibold'>March</option>
                            <option value="Tab2" className='text-[20px] font-semibold'>April</option>
                            <option value="Tab3" className='text-[20px] font-semibold'>May</option>
                            <option value="Tab4" className='text-[20px] font-semibold'>June</option>
                            <option value="Tab5" className='text-[20px] font-semibold'>July</option>
                            <option value="Tab6" className='text-[20px] font-semibold'>August</option>
                            <option value="Tab7" className='text-[20px] font-semibold'>September</option>
                            <option value="Tab8" className='text-[20px] font-semibold'>October</option>
                            <option value="Tab9" className='text-[20px] font-semibold'>November</option>
                            <option value="Tab10" className='text-[20px] font-semibold'>December</option>
                        </select>
                    </label>
                    <Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg></Link>
                </div>
            </nav>
            <header className='pt-[100px]'>
                <div className='max-w-[1140px] mx-auto px-3'>
                    <div>{data === "Tab1" && (
                        <div className='flex flex-row flex-nowrap -mx-3'>
                            <div className="w-5/12 px-3 flex flex-col gap-10">
                                <h2 className='font-semibold text-[25px]'>Swiper Slider With Html :-</h2>
                                <h2 className='font-semibold text-[25px]'> next.js basic :-<span className='block'>(props , routing, map , object) </span></h2>
                                <h2 className='font-semibold text-[25px]'> 248 Labs :-</h2>
                                <h2 className='font-semibold text-[25px]'> Cloopp :-</h2>
                                <h2 className='font-semibold text-[25px] pt-5'> Live Test Home Page :-</h2>
                                <h2 className='font-semibold text-[25px] '> Form Validation In React :-</h2>
                                <h2 className='font-semibold text-[25px] '> Html Setup in Vite :-</h2>
                                <h2 className='font-semibold text-[25px] pt-5'> Swiper Slider in React :-</h2>
                            </div>
                            <div className='w-7/12 px-3 flex flex-col gap-7'>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/swiper-slider-with-html.git" target='_blank'>https://github.com/Gopaltarika/swiper-slider-with-html.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://swiper-slider-with-html.vercel.app/" target='_blank'>https://swiper-slider-with-html.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/demo-app.git" target='_blank'>https://github.com/Gopaltarika/demo-app.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href=" https://demo-app-theta-henna.vercel.app/" target='_blank'> https://demo-app-theta-henna.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/labs284.git" target='_blank'>https://github.com/Gopaltarika/labs284.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://labs284.vercel.app/" target='_blank'> https://labs284.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/cloopp.git" target='_blank'>https://github.com/Gopaltarika/cloopp.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://choopp.vercel.app/" target='_blank'> https://choopp.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/Home-Page.git" target='_blank'>https://github.com/Gopaltarika/Home-Page.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://home-page-chi-two.vercel.app/" target='_blank'> https://home-page-chi-two.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/my-form.git" target='_blank'>https://github.com/Gopaltarika/my-form.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://my-form-beta.vercel.app/" target='_blank'> https://my-form-beta.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/vite-project-setup.git" target='_blank'>https://github.com/Gopaltarika/vite-project-setup.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://vite-project-setup-eight.vercel.app/" target='_blank'> https://vite-project-setup-eight.vercel.app/</a>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex gap-5 items-center'>
                                        <h3>GitHub Link :-</h3>
                                        <a href="https://github.com/Gopaltarika/my-react-swiper.git" target='_blank'>https://github.com/Gopaltarika/my-react-swiper.git</a>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <h3>Vercel Link :-</h3>
                                        <a href="https://my-react-swiper.vercel.app/" target='_blank'> https://my-react-swiper.vercel.app/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}</div>
                    {data === "Tab2" && (<h1>april</h1>)}
                    {data === "Tab3" && (<h1>may</h1>)}
                    {data === "Tab4" && (<h1>june</h1>)}
                    {data === "Tab5" && (<h1>july</h1>)}
                    {data === "Tab6" && (<h1>august</h1>)}
                    {data === "Tab7" && (<h1>September</h1>)}
                    {data === "Tab8" && (<h1>October</h1>)}
                    {data === "Tab9" && (<h1>November</h1>)}
                    {data === "Tab10" && (<h1>December</h1>)}
                </div>
            </header>
        </div>
    )
}

export default AllData
