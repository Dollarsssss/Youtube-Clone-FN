import React, { useEffect} from 'react'

function Card({ content }) {
    useEffect(()=>{
        console.log(content);
    },[])

    const convertPublicDate = (date) =>{
        const public_date = new Date(date)
        const today = new Date()
        const difference_time = today.getTime() - public_date.getTime()
        const difference_day = Math.round(difference_time / 86400000);
        return difference_day
    } 

    const convertView = (view_count) => {
        let text = ''
        if(view_count >= 1000 &&  view_count < 10000){
            view_count /=1000
            text = view_count + ' พัน ครั้ง'

        } else if (view_count >= 10000 && view_count < 10000) {
            view_count /=10000
            text = view_count + ' หมื่น ครั้ง'

        } else if (view_count >= 100000 && view_count < 1000000) {
            view_count /=100000
            text = view_count + ' แสน ครั้ง'

        } else if (view_count >= 1000000 && view_count < 10000000) {
            view_count /=1000000
            text = view_count + ' ล้าน ครั้ง'
        } else {
            text = view_count + ' ครั้ง'
        }

        return text;
    }

   
    return (
        <>
            <div className='item-content'>
                <div className='img-cover'>
                    <img src={content.video_thumbnail} alt="" />
                </div>
                <div className='item-info'>
                    <div className='img-channel'>
                        <img src={content.channel_profile_picture} alt="" />
                    </div>
                    <div className='item-info-text'>
                        <h4 className='text-title'>{content.video_title}</h4>
                        <p className='text-channel'>{content.channel_name}</p>
                        <p className='text-countWatch'>
                        {convertView(content.view_count)} • {convertPublicDate(content.video_created_at)} วันที่ผ่านมา 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card