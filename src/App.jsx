import { React, useState } from "react";
import ImagePreviewer from "./components/ImagePreviewer";
import ImageUploader from "./components/ImageUploader";
import DownloadBtn from "./utils/DownloadBtn";
import {GetEnhancedImage} from "./utils/ApiCall"

const App = () => {
  const [image, setImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [Loading, setLoading] = useState(false);

  const UploadHandler = async (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setLoading(true);
    try {
      const enhancedImageUrl = await GetEnhancedImage(file);
      setenhancedImage(enhancedImageUrl);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans text-center justify-center items-center flex-col p-10 w-full relative bg-black text-white bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:25px_25px] overflow-x-hidden">
      <h1 className="text-2xl uppercase font-extrabold">
        AI-Powered Image Enhancer
      </h1>
      <p className="mb-10 text-xs font-sans text-white/50">
        Enhance your images effortlessly with our advanced AI technology. It's
        free and no login is required. Simply upload your image to get started.
      </p>
      <ImageUploader setImage={setImage} UploadHandler={UploadHandler} />
      <ImagePreviewer
        loading={Loading}
        image={image}
        enhancedImage={enhancedImage}
      />
      {enhancedImage && !(Loading) && image && (
          <DownloadBtn enhancedImageUrl={enhancedImage} />
      )}
    </div>
  );
};

export default App;
