import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone'; // need to run: npm install react-dropzone
import { Image, X } from 'lucide-react';

const UploadBox = ({ files, setFiles }) => {
  
  const onDrop = useCallback(acceptedFiles => {
    // Basic preview generation
    const newFiles = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, [setFiles]);

  const removeFile = (fileToRemove) => {
    setFiles(prev => prev.filter(file => file !== fileToRemove));
    URL.revokeObjectURL(fileToRemove.preview); // clean up memory
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': []}, // Accept images only
    maxFiles: 3
  });

  return (
    <div className="grid md:grid-cols-3 gap-6 items-start">
      
      {/* Dropzone Area */}
      <div 
        {...getRootProps()} 
        className={`md:col-span-2 flex flex-col items-center justify-center text-center p-8 border-[4px] border-black border-dashed bg-[#FAF8F0] cursor-pointer transition-colors ${
          isDragActive ? 'bg-[#FFDA22]/20 border-solid' : 'hover:border-[#F5689E]'
        }`}
      >
        <input {...getInputProps()} />
        <Image strokeWidth={1.5} className="w-16 h-16 text-black/60 mb-4" />
        
        <p className="font-black uppercase text-lg text-black mb-1">
          {isDragActive ? "Drop the vibe here!" : "Drag 'n' drop vibes"}
        </p>
        <p className="font-bold text-sm text-black/70 mb-4">
          or click to browse photos (Max 3)
        </p>
        
        <span className="inline-block bg-white text-black font-bold uppercase text-[11px] px-3 py-1 border-[2px] border-black shadow-[3px_3px_0px_#000]">
          "Have a Pinterest pin or inspiration photo? I'd love to see it!"
        </span>
      </div>

      {/* Previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {files.map((file, index) => (
            <div key={index} className="relative aspect-square border-[3px] border-black bg-white p-1 shadow-[3px_3px_0px_#000]">
              <img 
                src={file.preview} 
                alt={`Preview ${index}`} 
                className="w-full h-full object-cover"
                onLoad={() => { URL.revokeObjectURL(file.preview) }} // clear memory
              />
              <button 
                type="button"
                onClick={() => removeFile(file)}
                className="absolute -top-2 -right-2 bg-black text-white p-1 rounded-full border-2 border-black hover:bg-[#F5689E]"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadBox;