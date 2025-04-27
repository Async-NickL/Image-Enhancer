import React from 'react'
import Loader from '../utils/Loader'

const ImagePreviewer = ({ image, loading, enhancedImage }) => {
  return (
    <div className='w-full mt-10 grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-10'>
        <div className="h-[70vh] border-2 border-gray-400 rounded-lg p-2 bg-black/30 flex flex-col items-center justify-center relative">
          <div className={`${image ? 'text-black' : 'text-white'} text-lg font-semibold mb-4 absolute top-1 z-10`}>Original Image</div>
          <div className="h-[100%] w-full flex items-center justify-center text-gray-400">
            {image ? (
              <img src={image} alt="Original" className="h-full w-full object-contain" />
            ) : (
              <p>No image uploaded yet</p>
            )}
          </div>
        </div>
        <div className="h-[70vh] border-2 relative border-gray-400 rounded-lg p-2 bg-black/30 flex flex-col items-center justify-center">
          <div className="text-white text-lg mb-4 top-1 font-semibold absolute">Enhanced Image</div>
          <div className="h-[100%] w-full flex items-center justify-center text-gray-400 relative">
            {image ? (
              enhancedImage && !(loading) ? (
                <>
                <img src={enhancedImage} className="h-full w-full object-contain" />
                </>
              ) : (
                loading && <Loader />
              )
            ) : (
              <p>Upload an image to see enhancement</p>
            )}
          </div>
        </div>
    </div>
  )
}

export default ImagePreviewer
