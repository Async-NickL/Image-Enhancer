import React from 'react'

const ImageUploader = () => {
  return (
    <div className='h-[40vh] w-[90vw] border-2 border-gray-700 relative p-2'>
      <label htmlFor="fileUpload" className='w-full h-full border-2 border-dashed border-gray-700/70 text-xl text-black hover:border-blue-500 active:text-black/50 flex items-center justify-center'>
        Click to upload an image
      </label>
      <input id="fileUpload" type="file" accept='image/*' className='hidden'/>
    </div>
  )
}

export default ImageUploader
