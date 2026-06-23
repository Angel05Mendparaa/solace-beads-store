import React from 'react'

const Navbar = () => {
  return (
   <nav className="w-full border-b">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="flex items-center justify-between h-20">

      <div className="flex gap-4 text-sm md:text-base">
        <p>SHOP</p>
        <p>COLLECTIONS</p>
      </div>

      <h1 className="text-xl md:text-3xl font-semibold">
        SOLACE
      </h1>

      <div className="flex md:gap-4 text-sm md:text-base">
        <p>SEARCH</p>
        <p>CART</p>
      </div>

    </div>
  </div>
</nav>
  )
}
export default Navbar
