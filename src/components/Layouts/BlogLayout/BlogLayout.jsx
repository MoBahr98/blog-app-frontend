import React from 'react'
import BlogNavbar from './BlogNavbar'
import Footer from "../../layouts/Footer";

const BlogLayout = ({children, activeMenu}) => {
  return (
    <div className="bg-white pb-30">
      <BlogNavbar activeMenu={activeMenu}/>

      <div className="container mx-auto px-5 md:px-0 mt-10">{children}</div>
      <Footer />
    </div>
  )
}

export default BlogLayout