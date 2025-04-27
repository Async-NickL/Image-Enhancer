import React from 'react';

const DownloadBtn = ({ enhancedImageUrl }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(enhancedImageUrl);
      const blob = await response.blob();
      
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'enhanced-image.' + (blob.type.split('/')[1] || 'jpg');
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <button 
      onClick={handleDownload}
      className="cursor-pointer z-50 group relative mt-10 bg-white hover:bg-zinc-300 text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-48 h-12">
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden w-full">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Click to
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Download
          </span>
        </span>
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-135" viewBox="0 0 24 24">
          <circle fill="currentColor" r={11} cy={12} cx={12} />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="white" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
        </svg>
      </div>
    </button>
  );
}

export default DownloadBtn;
