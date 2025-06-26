



export default function TextContent( {text1,text2} ) {
  
  return (
    <>
      <div className="flex justify-center items-center gap-2 ">
        <h1 className="xl:text-5xl xm:text-3xl text-gray-600 whitespace-nowrap">{text2} {text1}</h1>
        <p className=" h-1 w-10 font-bold bg-amber-500"></p>
      </div>
    </>
  )
}