import React, { useCallback } from 'react';
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
    <div className="flex flex-col gap-4">
      
      {/* Dropzone Area */}
      <div 
        {...getRootProps()} 
        className={`flex flex-col items-center justify-center text-center p-6 sm:p-8 border-[3px] border-black border-dashed rounded-2xl bg-[#FAF8F0] cursor-pointer transition-colors ${
          isDragActive ? 'bg-[#FFDA22]/20 border-solid' : 'hover:border-[#F5689E]'
        }`}
      >
        <input {...getInputProps()} />
        <Image strokeWidth={1.5} className="w-10 h-10 sm:w-12 sm:h-12 text-black/60 mb-3" />
        
        <p className="font-semibold uppercase tracking-widest text-xs sm:text-sm text-black mb-1">
          {isDragActive ? "Drop the vibe here!" : "Drag 'n' drop vibes"}
        </p>
        <p className="font-medium text-xs text-black/60 mb-4">
          or click to browse photos (Max 3)
        </p>
        
        <span className="inline-block bg-white text-black/70 font-medium text-[10px] italic px-3 py-1.5 border-[2px] border-black rounded-full max-w-[280px]">
          Have a Pinterest pin or inspiration photo? I'd love to see it!
        </span>
      </div>

      {/* Previews */}
      {files.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {files.map((file, index) => (
            <div key={index} className="relative w-20 h-20 sm:w-24 sm:h-24 border-[2px] border-black rounded-xl bg-white p-1 flex-shrink-0">
              <img 
                src={file.preview} 
                alt={`Preview ${index}`} 
                className="w-full h-full object-cover rounded-lg"
                onLoad={() => { URL.revokeObjectURL(file.preview) }} // clear memory
              />
              <button 
                type="button"
                onClick={() => removeFile(file)}
                className="absolute -top-2 -right-2 bg-black text-white p-1 rounded-full border-2 border-black hover:bg-[#F5689E] transition-colors"
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