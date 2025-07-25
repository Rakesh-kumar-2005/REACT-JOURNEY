import React from 'react'

const Button = ({title, id, leftIcon, rightIcon, containerClass}) => {
  return (
      <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <spam className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div>{title}</div>
        </spam>
        {rightIcon}
      </button>
  )
}

export default Button
