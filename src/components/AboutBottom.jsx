import './aboutBottom.css'

const AboutBottom = () => {
  return (
    <div className='flex justify-center items-end w-full h-[65vh] z-0 '>
        <div className='bg-[#D7FFC2] w-[764px] h-[372px] rounded-xl flex items-center flex-col justify-center gap-8 p-10'>
            <div className="text-[48px]">
                <span className='text-[#004449]'>Booked. </span>
                <span className='text-[#004449]'>Going. </span>
                <span className='text-[#007A83]'>Gone. </span>
            </div>

            <p className='text-center text-[14px]'>Most deals are 40-90% off normal prices with great itineraries from the best airlines. If it's not an amazing deal, we won't send it.</p>
            <button className='bg-[#483CFF] text-white py-2 px-4 rounded-full w-[140px] h-[100px] '>Get <br /> Free <br /> Flight</button>
        </div>
    </div>
  )
}
export default AboutBottom