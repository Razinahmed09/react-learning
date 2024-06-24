import { useState } from 'react'
import './App.css'
import './component/navigation'
import Navigation from './component/navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        

        <div className="container m-auto">
          <div className="row flex justify-center items-center py-20">
            <div className="w-[50%]">
              <div>
                <h1 className='text-[65px] font-black leading-none'>YOUR FEET 
                  DESERVE
                  THE BEST</h1>
                  <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque delectus pariatur ipsum voluptatem animi magni at ea mollitia provident. Fugit eveniet quo ratione earum ipsam! Rerum debitis nemo quidem.</p>
                  <div className='flex gap-8'>
                    <a
                    href=""
                    className='bg-red-600 rounded-full py-2 px-3 text-white '
                    >
                     Shop Now 
                    </a>
                    <a 
                    href="" className='text-gray-700 border-2 border-color: rgb(100 116 139); py-2 px-2'>
                      Category
                    </a>
                  </div>
                  <div className='pt-5'>
                    <img src="/img/shop.png" alt="" />
                  </div>
              </div>
            </div>
            <div className="w-[50%]">
                <div className='flex justify-center items-center'>
                  <img src="/img/shoe_image.png" alt="" className='h-auto w-auto'/>
                </div>
            </div>
          </div>
        </div>
      </div>

    </>,
    <Navigation/>
  )
}

export default App
