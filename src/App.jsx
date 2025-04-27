import React from 'react'
import ImagePreviewer from './components/ImagePreviewer'
import ImageUploader from "./components/ImageUploader";

const App = () => {
  return (
    <div className='min-h-screen flex font-sans text-center justify-center items-center flex-col p-10 w-screen relative bg-black text-white bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px]'>
      <h1 className='text-2xl uppercase font-extrabold'>AI-Powered Image Enhancer</h1>
      <p className='mb-10 text-xs font-medium text-white/70'>Enhance your images effortlessly with our advanced AI technology. It's free and no login is required. Simply upload your image to get started.</p>
      <ImageUploader/>
      <ImagePreviewer/>
    </div>
  )
}

export default App
