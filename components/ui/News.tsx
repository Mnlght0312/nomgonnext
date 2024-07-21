import React from 'react'

interface News {
    id: number;
    title: string;
    description: string;
    link: string;
    date: string
}

export const newsData: News[] = [
    {
        id: 1,
        title: 'Шинэ мэдээ',
        description: 'Харилцагч танд 2023 оны Nissan Patrol маркын автомашиныг бага хүүтэй, урт хугацаатай төлбөрийн уян хатан нөхцөлтэй зээлээр авах алтан боломжыг санал болгож байна.',
        link: 'https://www.facebook.com/photo/?fbid=872174341387509&set=a.503528424918771',
        date: '2024-07-01'
    },
    {
        id: 2,
        title: 'Бизнесийн зээлийн хүү буурлаа',
        description: 'Бизнес эрхлэгч та бизнесээ өргөжүүлэх хүсэлтэй байгаа бол 7200-6666 дугаараас хамгийн шуурхай бизнес зээлийн талаарх мэдээлэл аваарай.',
        link: 'https://www.facebook.com/photo/?fbid=851591236779153&set=a.503528424918771',
        date: '2024-07-16'
    },
    {
        id: 3,
        title: 'МАШИН МЕХАНИЗМЫН ЗЭЭЛИЙН ТӨВ',
        description: 'Барилга, Уул уурхайн бүх төрлийн хүнд даацын машин механизм барьцаалсан орлого нотлохгүй ШУУРХАЙ ЗЭЭЛ-г олгож байна.',
        link: 'https://www.facebook.com/photo/?fbid=848186600452950&set=a.503528424918771',
        date: '2024-07-20'
    },
]
const News = () => {
    return (
        <div className='py-10 md:py-20 md: px-4 md:px-0 max-w-screen-xl mx-auto'>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
                Мэдээ{" "}
                <span className="text-yellow-500">мэдээлэл</span>
            </h1>
            <div className='flex flex-col md:flex-row gap-6 items-center'>
            {newsData.map((item, index) => (
                    <div key={index} className="max-w-lg md:max-w-xl border border-b-2 rounded-xl">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 text-white">{item.title.slice(0,1).toLocaleUpperCase() + item.title.slice(1).toLocaleLowerCase()}</h2>
                            <p className="text-gray-600">{item.description.slice(0,90)}...</p>
                            <div className='flex justify-between items-center mt-6'>
                            <p className="text-sm text-gray-500 text-end">Огноо: {item.date}</p>
                            <a href={item.link} className="text-blue-500 hover:text-blue-600 block">Дэлгэрэнгүй</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News