import React from 'react'

function AboutUs() {
    return (
        <div className='py-10 md:py-20 mt-10 md:mt-20 px-4 md:px-0 max-w-screen-xl mx-auto'>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                Бидний{" "}
                <span className="text-yellow-500">тухай</span>
            </h1>
            <div className='flex flex-col md:flex-row gap-6 items-center'>
                <img src="/imgs/us.png" className="w-full md:w-1/2 rounded-2xl mb-6 md:mb-0" alt="Our team" />
                <p className='text-justify text-sm md:text-base max-w-xl'>
                    Манай байгууллага нь 2010 онд үндэсний 100 хувь хөрөнгө оруулалттай байгуулагдсан. Бид хэрэглэгчдэдээ ойр байж, бизнес эрхлэгчдийн өмнө тулгарч буй санхүүгийн асуудлыг оновчтой тодорхойлж бүтээгдэхүүн үйлчилгээгээ илүү өргөтгөн сайжруулсаар байна. Бизнесийн болон хэрэглээний зээлийн бүтээгдэхүүнээс гадна Хүнд даацын машин механизм худалдан авах санхүүгийн түрээсийн үйлчилгээ, Бизнесийн зээлийн шугам гэх зэрэг бүтээгдэхүүн үйлчилгээнүүдийг үе шаттай нэвтрүүлсээр байна.
                </p>
            </div>
        </div>
    )
}

export default AboutUs