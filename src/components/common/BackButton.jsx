import Iconify from './Iconify'

const BackButton = () => {
  return (
    <div className='w-full flex justify-center bg-white items-center rounded-full h-full'>
      <Iconify className="text-[#0D0D26] text-xl mr-[2px] sm:mr-1 sm:text-2xl" icon="tabler:chevron-left" />
    </div>
  )
}

export default BackButton
