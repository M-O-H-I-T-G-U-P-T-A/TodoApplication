import React from 'react'

const Footer = () => {
  let footerStyle={
      position: "relative",
      top: "90vh",
      width: "100%",
      border:"1px solid red"
  }
  return (
    <div className='bg-dark text-light py-1' style={footerStyle}>
      <p className='text-center'>
        copyright &copy; MyTodoList.com
      </p>
    </div>
  )
}

export default Footer
