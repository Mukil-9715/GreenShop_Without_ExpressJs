import React from 'react'
import { Button } from 'react-bootstrap'
import blogpic1 from "../../Asset/blog6.jpg" 
import blogpic2 from "../../Asset/blog2.jpg" 
import blogpic3 from "../../Asset/blog5.jpg" 
import blogpic4 from "../../Asset/blog3.jpg" 


const Blog = () => {
  return (
    <div className='blogs '>
        <div className= 'texthclr fs-2 fw-bolder'>
            OUR BLOGS POSTS
        </div>
        <div className='textpclr w-50 text-wrap my-3'> 
            Explore the green world of plamt care and discover the secrets to nurtering thriving indoor blooms in our home garderning blog.
        </div>
        <div className='d-flex mb-5 mt-4 '>
            <div className='cards-img  h-100 me-5'>
                <img className='rounded' src={blogpic1} alt=""width="295px" />
                <div className='m-3'>
                    <div className='fs-5 fw-bold texthclr'>Catcus & Succulent Care Tips</div>
                    <div className='fs-6 text-wrap  textpclr py-3'>Cati are succulent are easy care plants for any home or patio</div>
                    <Button className="btns-wtoutline  mb-3">READ MORE &gt;</Button>
                </div>
            </div>
            <div className='cards-img  h-100 mx-5'>
                <img className='rounded' src={blogpic2} alt=""width="295px" />
                <div className='m-3'>
                    <div className='fs-5 fw-bold texthclr'>Top 10 Succylents for Your Home</div>
                    <div className='fs-6 text-wrap  textpclr py-3'>Best in hanging baskets. prefers medium to high light.</div>
                    <Button className="btns-wtoutline  mb-3">READ MORE &gt;</Button>
                </div>
            </div>
            <div className='cards-img  h-100 mx-5'>
                <img className='rounded' src={blogpic3} alt=""width="295px" />
                <div className='m-3'>
                    <div className='fs-5 fw-bold texthclr'>Cacti & Succulents Care Tips</div>
                    <div className='fs-6 text-wrap  textpclr py-3'>Cacti & Succulent thrive in container and because most are...</div>
                    <Button className="btns-wtoutline  mb-3">READ MORE &gt;</Button>
                </div>
            </div>
            <div className='cards-img  h-100 mx-5'>
                <img className='rounded' src={blogpic4} alt="" width="295px"    />
                <div className='m-3'>
                    <div className='fs-5 fw-bold texthclr'>Best Houseplants Room By Room</div>
                    <div className='fs-6 text-wrap  textpclr py-3'>The benefits of houseplant are endless. In addition to...</div>
                    <Button className="btns-wtoutline  mb-3">READ MORE &gt;</Button>
                </div>
            </div>
           

        </div>
    </div>
  )
}

export default Blog 