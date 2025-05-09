import React from "react";
// import { administrations } from '@/data'
interface Admin {
  id: number;
  name: string;
  img: string;
  education: string[];
  workExp: string[];
}
export const administrations: Admin[] = [
  {
    id: 1,
    name: "Ж. Батсайхан <br/> Зөвлөх",
    img: "/imgs/profile1.PNG",
    education: ["Баклавр Хууль"],
    workExp: [
      "2005-УИХ гишүүний туслах",
      "2012-УИХ даргын туслах",
      "2017-Монгол Улсын Ерөнхийлөгчийн Тамгын газрын лавлагаа",
      "2022-Хөтөлт Номгон ББСБ Дагаж мөрдөх мэргэжилтэн",
    ],
  },
  {
    id: 2,
    name: "А. Эрдэнэдорж <br/> Гүйцэтгэх захирал",
    img: "/imgs/profile2.PNG",
    education: ["ОУ худалдааны менежер баклавр", "Бизнесийн удирдлага магистр"],
    workExp: [
      "2010-Далайн тогтох ХХК эдийн засагч",
      "2012-Нутгийн Буян групп ерөнхий менежер",
      "2020-Хөтөлт Номгон ХХК Гүйцэтгэх захирал",
    ],
  },
  {
    id: 3,
    name: "Л.Бат-Орших <br/> ТУЗ-ын дарга",
    img: "/imgs/profile3.PNG",
    education: [
      "Менеджмент, Гадаад худалдаа баклавр",
      "Бизнесийн удирдлага магистр",
    ],
    workExp: [
      "2000-Нутгийн буян групп үүсгэн байгуулагч",
      "2009-Хөтөлт Номгон ББСБ үүсгэн байгуулагч",
      "2020-Нутгийн буян групп ерөнхий захирал",
    ],
  },
  {
    id: 4,
    name: "Б. Отгонжаргал <br/> ТУЗ-ийн гишүүн",
    img: "/imgs/profile4.PNG",
    education: ["Нягтлан бодох баклавр"],
    workExp: ["2011-Нутгийн буян групп ХХК Гүйцэтгэх захирал"],
  },
  {
    id: 5,
    name: "Б.Анударь <br/> ТУЗ-ийн гишүүн",
    img: "/imgs/profile5.PNG",
    education: [
      "Бизнесийн удирдлага баклавр",
      "ОУ-ын Бизнесийн удирдлага магистр",
    ],
    workExp: ["2022-Нутгийн буян проперти ХХК Гүйцэтгэх захирал"],
  },
  {
    id: 6,
    name: "Б.Билэгтсайхан <br/> ТУЗ-ийн бие даагч гишүүн",
    img: "/imgs/profile6.PNG",
    education: [
      "Бизнес, ЭЗ баклавр",
      "Бизнесийн удирдлага магистр",
      "Бизнесийн удирдлага доктор",
    ],
    workExp: [
      "2007-Хадгаламж банк эдийн засагч",
      "2016-barilga.mn ХХК Эрдэм шинжилгээний албаны дарга",
      "2018-Gobi JSC Бизнесийн шинжилгээний хэлтсийн дарга",
      "2021-Эм Ай Си Жи ХХК гүйцэтгэх захирал",
      "2023-Хөтөлт Номгон ББСБ ХХК ТУЗ-ийн гишүүн",
    ],
  },
];
function AboutUs() {
  return (
    <div id="about">
      <div className="py-10 md:py-20 mt-10 md:mt-20 px-4 md:px-0 max-w-screen-xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          Бидний <span className="text-yellow-500">тухай</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src="/imgs/us.png"
            className="w-full md:w-1/2 rounded-2xl mb-6 md:mb-0"
            alt="Our team"
          />
          <p className="text-justify text-sm md:text-base max-w-xl">
            Манай байгууллага нь 2010 онд үндэсний 100 хувь хөрөнгө оруулалттай
            байгуулагдсан. Бид хэрэглэгчдэдээ ойр байж, бизнес эрхлэгчдийн өмнө
            тулгарч буй санхүүгийн асуудлыг оновчтой тодорхойлж бүтээгдэхүүн
            үйлчилгээгээ илүү өргөтгөн сайжруулсаар байна. Бизнесийн болон
            хэрэглээний зээлийн бүтээгдэхүүнээс гадна Хүнд даацын машин механизм
            худалдан авах санхүүгийн түрээсийн үйлчилгээ, Бизнесийн зээлийн
            шугам гэх зэрэг бүтээгдэхүүн үйлчилгээнүүдийг үе шаттай нэвтрүүлсээр
            байна.
          </p>
          
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-5 md:mt-10 mb-10 md:mb-20">
  {/* Эрхэм зорилго */}
  <div className="flex-1">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
      Эрхэм <span className="text-yellow-500">Зорилго</span>
    </h2>
    <p className="text-justify text-sm md:text-base max-w-xl mx-auto">
      Санхүүгийн бүтээгдэхүүн үйлчилгээгээр дамжуулан харилцагч,
       хамтран ажиллагчдыг эерэг, хүчирхэг нийгэм, эдийн засаг цогцлоход 
      тулах цэг нь болж ажиллах .
    </p>
  </div>

  {/* Үнэт зүйлс */}
  <div className="flex-1">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
      Үнэт <span className="text-yellow-500">Зүйлс</span>
    </h2>
    <p className="text-justify text-sm md:text-base max-w-xl mx-auto">
      Бидний үнэт зүйл бол ёс зүйтэй үнэнч, шударга хамт олон болон  Харилцагч, үйлчлүүлэгчийн хамтын ажиллагаа юм.
    </p>
  </div>
</div>

      {/* <div className="py-10 md:py-20 mt-10 md:mt-20 px-4 md:px-0 max-w-screen-xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-yellow-500">
          Удирдлагууд
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          {administrations.map((admin) => (
            <div
              key={admin.id}
              className={`admin-card rounded-lg shadow-md ${
                [2, 5].includes(admin.id)
                  ? "mt-[20px]"
                  : [3, 4].includes(admin.id)
                  ? "mt-[40px]"
                  : ""
              }`}
            >
              <img
                src={admin.img}
                alt={admin.name}
                className="w-24 h-24 rounded-xl"
              />
              <div>
                <h4
                  className="text-base font-semibold"
                  dangerouslySetInnerHTML={{
                    __html: admin.name,
                  }}
                ></h4>
                <ul className="education-list text-justify">
                  <h5 className="text-yellow-500 text-sm">Боловсрол</h5>
                  {admin.education.map((edu, index) => (
                    <li key={index} className="text-[12px]">
                      &#10095; {edu}
                    </li>
                  ))}
                </ul>
                <ul className="work-exp-list text-justify">
                  <h5 className="text-yellow-500 text-sm">Ажлын туршлага</h5>
                  {admin.workExp.map((exp, index) => (
                    <li key={index} className="text-[12px]">
                      &#10095; {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
