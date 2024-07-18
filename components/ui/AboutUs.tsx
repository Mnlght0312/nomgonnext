import React from 'react'
import { loanConditions } from '@/data'

function AboutUs() {
    return (
        <div className='py-20 mt-20'>
            <h1 className="heading my-10">
                Бидний{" "}
                <span className="text-yellow-500">тухай</span>
            </h1>
            <span className='text-justify'>
             Манай байгууллага нь 2010 онд үндэсний 100 хувь хөрөнгө оруулалттай байгуулагдсан. Бид хэрэглэгчдэдээ ойр байж, бизнес эрхлэгчдийн өмнө тулгарч буй санхүүгийн асуудлыг оновчтой тодорхойлж бүтээгдэхүүн үйлчилгээгээ илүү өргөтгөн сайжруулсаар байна. Бизнесийн болон хэрэглээний зээлийн бүтээгдэхүүнээс гадна Хүнд даацын машин механизм худалдан авах санхүүгийн түрээсийн үйлчилгээ, Бизнесийн зээлийн шугам гэх зэрэг бүтээгдэхүүн үйлчилгээнүүдийг үе шаттай нэвтрүүлсээр байна.
            </span>
            {/* <table className='border-solid loanTable my-[30px] bg-blue-950'>
                <tr>
                    <th></th>
                    <th>Бизнесийн шуурхай зээл</th>
                    <th>Бизнесийн зээл</th>
                </tr>
                {loanConditions.map((e,index)=>{
                    if(e.col2 === e.col3){
                        return (
                            <tr key={index}>
                                <td className='w-[200px]'>{e.col1}</td>
                                <td colSpan={2}>{e.col2}</td>
                            </tr>
                        )
                    } else {
                        return (
                            <tr key={index}>
                                <td className='w-[200px]'>{e.col1}</td>
                                <td>{e.col2}</td>
                                <td>{e.col3}</td>
                            </tr>
                        )
                    }
                })}
            </table> */}
        </div>
    )
}

export default AboutUs