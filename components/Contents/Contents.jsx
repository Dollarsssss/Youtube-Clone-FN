import React, { useState , useEffect} from 'react'
import './Contents.css'
import axios from 'axios'
import Tags from '../Tags/Tags'
import Card from '../Card/Card'


function Contents() {

  const [videos, setVideos] = useState([]);
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState('')

    useEffect(() => {

      let controller = new AbortController()
      const signal = controller.signal

      const loadData = async () => {
      
        try{
          setLoading(true)
          let respones = await axios.get(`http://localhost:3000/`,{signal})
          
          setVideos(respones.data)
          setError('')

        }catch(err){
          setError('Error loading ', err.messsage)

        }finally{
          setLoading(false)
        }
      }

      loadData()
      return () => controller.abort()

    }, [])


  return (
    <section id='contents'>
      <Tags></Tags>
    <section className='container-content'>
      <div className='item-wrapper'>
        {videos.map((video,index)=>(
          <Card key={index} content={video}/>
        ))}
      </div>
        <section className='content-twos'>
          <div className='item-content-twos'>
            <div className='img-cover'>
              <img src='https://via.placeholder.com/231x400' alt="" />
            </div>
            <div className='item-info-text'>
              <h4 className='text-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum eos aperiam molestiae excepturi doloremque neque voluptatum error sed quasi.</h4>
              <p className='text-countWatch'> การดู 1.6 แสน </p>
            </div>
          </div>
          <div className='item-content-twos'>
            <div className='img-cover'>
              <img src='https://via.placeholder.com/231x400' alt="" />
            </div>
            <div className='item-info-text'>
              <h4 className='text-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum eos aperiam molestiae excepturi doloremque neque voluptatum error sed quasi.</h4>
              <p className='text-countWatch'> การดู 1.6 แสน </p>
            </div>
          </div>
          <div className='item-content-twos'>
            <div className='img-cover'>
              <img src='https://via.placeholder.com/231x400' alt="" />
            </div>
            <div className='item-info-text'>
              <h4 className='text-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum eos aperiam molestiae excepturi doloremque neque voluptatum error sed quasi.</h4>
              <p className='text-countWatch'> การดู 1.6 แสน </p>
            </div>
          </div>
          <div className='item-content-twos'>
            <div className='img-cover'>
              <img src='https://via.placeholder.com/231x400' alt="" />
            </div>
            <div className='item-info-text'>
              <h4 className='text-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum eos aperiam molestiae excepturi doloremque neque voluptatum error sed quasi.</h4>
              <p className='text-countWatch'> การดู 1.6 แสน </p>
            </div>
          </div>
          <div className='item-content-twos'>
            <div className='img-cover'>
              <img src='https://via.placeholder.com/231x400' alt="" />
            </div>
            <div className='item-info-text'>
              <h4 className='text-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum eos aperiam molestiae excepturi doloremque neque voluptatum error sed quasi.</h4>
              <p className='text-countWatch'> การดู 1.6 แสน </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Contents