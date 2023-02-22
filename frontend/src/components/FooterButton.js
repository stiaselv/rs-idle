import React, { useState } from 'react'

export const FooterButton = (e) => {

  let open = useState(false);

  let footerOpen = () => {
    return open(true)
  }

  let footerClose = () => {
    return open(false)
  }

  if (open) {
    return (
      <div>
        <button className="absolute group" onClick={ footerOpen }>
          <div className="absolute flex mar overflow-hidden items-center justify-center justify-self-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 duration-200 shadow-md border">
            <div className="transform transition-all duration-300 origin-center overflow-hidden group-focus:-rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
              </svg>
            </div>
          </div>
        </button>
      </div>  
    )
  } else {
    return (
      <div>
        <button className="absolute group" onClick={ footerClose }>
          <div className="absolute flex mar overflow-hidden items-center justify-center justify-self-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 duration-200 shadow-md border">
            <div className="transform transition-all duration-300 origin-center overflow-hidden group-focus:-rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
            </div>
          </div>
        </button>
      </div>
      
    )
  }
  
}
