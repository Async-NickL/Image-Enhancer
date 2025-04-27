import React from 'react'

const ImageUploader = ({ setImage, UploadHandler }) => {
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      UploadHandler(file);
    }
  };

  return (
    <div className='h-[40vh] w-[90vw] border-2 border-gray-400 relative p-2 bg-black/30 rounded-lg'>
      <label htmlFor="fileUpload" className='w-full h-full font-bold transition-all duration-200 border-2 border-dashed border-gray-400/70 text-xl text-white hover:border-blue-400 hover:text-blue-400 active:text-white/50 flex flex-col items-center justify-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Click to upload an image
      </label>
      <input id="fileUpload" type="file" accept='image/*' className='hidden' onChange={handleImageChange}/>
    </div>
  )
}

export default ImageUploader
