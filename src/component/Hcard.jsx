

const Hcard = ({dd}) => {



  return (
    <div>
      <div className='bg-red-600 w-80 h-[300px] flex flex-col justify-between items-center rounded-lg'>
        <div className="w-80 overflow-hidden rounded-lg">
            <img className='w-80' src={dd[3].photo} />
        </div>
        <h1 className=" font-bold m-2 text-nowrap text-white">{dd[1].title}</h1>
        <div className='flex bg-black text-white rounded-full items-center p-2 gap-1 mb-2'>
            <i className="fa-solid fa-eye"></i> <h1>{dd[2].view}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hcard