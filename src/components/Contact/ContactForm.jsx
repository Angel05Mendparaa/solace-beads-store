import React from 'react';
import { Send } from 'lucide-react';

const subjects = ['Order Issue', 'Custom Request', 'Collaboration', 'Just Saying Hi!'];

const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 bg-white border-[6px] border-black p-8 md:p-10 shadow-[12px_12px_0px_0px_#000]">
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-black uppercase text-sm mb-2 text-black">Your Name</label>
          <input type="text" placeholder="WHAT DO WE CALL YOU?" required className="solace-input" />
        </div>
        <div>
          <label className="block font-black uppercase text-sm mb-2 text-black">Email Address</label>
          <input type="email" placeholder="WHERE DO WE REPLY?" required className="solace-input" />
        </div>
      </div>

      <div>
        <label className="block font-black uppercase text-sm mb-3 text-black">What's this about?</label>
        <div className="flex flex-wrap gap-3">
          {subjects.map(subject => (
            <label key={subject} className="solace-pill-label">
              <input type="radio" name="subject" value={subject} defaultChecked={subject === 'Just Saying Hi!'} className="sr-only solace-pill-radio" />
              <span>{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-black uppercase text-sm mb-2 text-black">Your Message</label>
        <textarea 
          placeholder="TYPE YOUR MESSAGE HERE..." 
          required 
          rows="5" 
          className="solace-input resize-none"
        />
      </div>

      <button 
        type="submit" 
        className="self-start flex items-center gap-3 bg-[#000] hover:bg-[#FFDA22] text-white hover:text-black border-[4px] border-black px-10 py-4 font-black uppercase text-lg shadow-[6px_6px_0px_#F5689E] hover:shadow-[2px_2px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all group"
      >
        <span>Send Message</span>
        <Send strokeWidth={3} className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

    </form>
  );
};

export default ContactForm;