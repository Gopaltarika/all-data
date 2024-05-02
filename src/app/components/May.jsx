import React from 'react'

const May = () => {
  return (
    <div className='flex flex-row flex-nowrap -mx-3'>
    <div className="w-5/12 px-3 flex flex-col gap-10">
        <h2 className='font-semibold text-[25px]'>Kodeden :-</h2>
    </div>
    <div className='w-7/12 px-3 flex flex-col gap-7'>
        <div className='flex flex-col'>
            <div className='flex gap-5 items-center'>
                <h3>GitHub Link :-</h3>
                <a href="https://github.com/Gopaltarika/Kodeden.git" target='_blank'>https://github.com/Gopaltarika/Kodeden.git</a>
            </div>
            <div className='flex gap-5 items-center'>
                <h3>Vercel Link :-</h3>
                <a href="https://kodeden-teal.vercel.app/" target='_blank'>https://kodeden-teal.vercel.app/</a>
            </div>
        </div>
      
    </div>
  
</div>
  )
}

export default May
