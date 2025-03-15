import { faCircleInfo, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Indicator = () => {

  const [isClose, setIsClose] = useState(false);

  return (

    <div className='flex flex-row gap-3 left-3 absolute top-[20%] z-10 bg-white/80 pt-8 p-5 shadow-2xl rounded-2xl text-black md:text-[14px] lg:text-[15px] scale-90 lg:scale-100'>
      {!isClose && (<>
        <div className='flex flex-row gap-3'>
          <div className="w-[16px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#63eb63,#3dc63d,#116719,#ff0,#e60000,#9b0000)]"></div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className="w-[16px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#9FDFFF,#5F9FFF,#3F7FFF)]"></div>

        </div>
        <FontAwesomeIcon icon={faCircleInfo} className='absolute top-1 left-1/2 -translate-x-1/2 font-bold text-blue-500 cursor-pointer text-[20px]'
          onClick={() => setIsClose(true)}
        />
      </>
      )}

      {isClose && (<>
        <div className='flex flex-row gap-3'>
          <div className="w-[16px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#63eb63,#3dc63d,#116719,#ff0,#e60000,#9b0000)]"></div>
          <div className='flex flex-col justify-evenly'>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#63eb63] before:mr-2 before:rounded-full flex items-center">
              Overcast
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#3dc63d] before:mr-2 before:rounded-full flex items-center">
              Drizzle
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#116719] before:mr-2 before:rounded-full flex items-center">
              Light rain
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#ff0] before:mr-2 before:rounded-full flex items-center">
              Moderate rain
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#e60000] before:mr-2 before:rounded-full flex items-center">
              Shower
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#9b0000] before:mr-2 before:rounded-full flex items-center">
              Hail
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className="w-[16px] h-[200px] rounded-2xl bg-[linear-gradient(to_bottom,#9FDFFF,#5F9FFF,#3F7FFF)]"></div>
          <div className='flex flex-col justify-between'>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#9FDFFF] before:mr-2 before:rounded-full flex items-center">
              Light theme
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#5F9FFF] before:mr-2 before:rounded-full flex items-center">
              Moderate
            </p>
            <p className="before:content-[''] before:inline-block before:h-[18px] before:w-[18px] before:bg-[#3F7FFF] before:mr-2 before:rounded-full flex items-center">
              Heavy
            </p>
          </div>
        </div>
        <div className="flex flex-row absolute top-1 w-full items-center">
          <h2 className="absolute top-1 ">Rain</h2>
          <h2 className="absolute top-1 left-1/2  -translate-x-1/2">Snow</h2>
          <FontAwesomeIcon icon={faX} className=' absolute right-8 top-1 font-bold cursor-pointer '
            onClick={() => setIsClose(false)}
          />
        </div>
      </>
      )
      }

    </div>
  )
}
export default Indicator