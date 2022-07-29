import React from 'react'
import CardDetailItem from '../CardDetail/CardDetailItem'
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"

export default function Index(props) {
  return (
    <div className=' flex justify-center items-center px-8 '>
        <CardDetailItem Heading="Complex geometric shapes made of triangle using multiple colors" imgUrl={img1}  detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae iusto quisquam dolor, possimus officiis qui doloremque harum error, hic impedit commodi magni?"  />
        <CardDetailItem Heading="Complex geometric shapes made of triangle using multiple colors" imgUrl={img2}   detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae iusto quisquam dolor, possimus officiis qui doloremque harum error, hic impedit commodi magni?"  />
        <CardDetailItem Heading="Complex geometric shapes made of triangle using multiple colors" imgUrl={img3}   detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae iusto quisquam dolor, possimus officiis qui doloremque harum error, hic impedit commodi magni?"  />
    </div>
  )
}
