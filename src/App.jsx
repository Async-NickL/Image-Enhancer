import React from 'react'
import ImagePreviewer from './components/ImagePreviewer'
import ImageUploader from "./components/ImageUploader";
const App = () => {
  return (
    <div className='flex  text-center justify-center items-center flex-col p-10 w-screen relative'>
      <h1 className='text-xl uppercase font-extrabold'>AI-Powered Image Enhancer</h1>
      <p className='mb-10 font-light text-black/70'>Enhance your images effortlessly with our advanced AI technology. It's free and no login is required. Simply upload your image to get started.</p>
      <ImagePreviewer/>
      <ImageUploader/>
    </div>
  )
}

export default App
