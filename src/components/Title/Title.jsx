import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='text-center text-[#8b0000]  font-semibold uppercase mt-[50px] mb-2'>
      <p>{subTitle}</p>
      <h2 className='text-[#8b0000]  md:font-bold md:text-2xl normal-case '>{title}</h2>
    </div>
  )
}

export default Title
