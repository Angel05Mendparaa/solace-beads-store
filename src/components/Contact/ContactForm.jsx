import React from 'react';
import { Send } from 'lucide-react';

const subjects = ['Order Issue', 'Custom Request', 'Collaboration', 'Just Saying Hi!'];

const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8 bg-white/70 backdrop-blur-sm border border-black/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5">
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold uppercase tracking-widest text-xs mb-2 text-black/60">Your Name</label>
          <input type="text" placeholder="What do we call you?" required className="solace-input w-full" />
        </div>
        <div>
          <label className="block font-semibold uppercase tracking-widest text-xs mb-2 text-black/60">Email Address</label>
          <input type="email" placeholder="Where do we reply?" required className="solace-input w-full" />
        </div>
      </div>

      <div>
        <label className="block font-semibold uppercase tracking-widest text-xs mb-3 text-black/60">What's this about?</label>
        <div className="flex flex-wrap gap-3">
          {subjects.map(subject => (
            
            <label key={subject} className="solace-pill-label cursor-pointer rounded-full">
              <input type="radio" name="subject" value={subject} defaultChecked={subject === 'Just Saying Hi!'} className="sr-only solace-pill-radio" />
              <span>{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold uppercase tracking-widest text-xs mb-2 text-black/60">Your Message</label>
        <textarea 
          placeholder="Type your message here..." 
          required 
          rows="5" 
          className="solace-input w-full resize-none"
        />
      </div>

      <button 
        type="submit" 
        className="self-start flex items-center gap-3 bg-black hover:bg-[#FFDA22] text-white hover:text-black rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-sm transition-colors duration-300 group shadow-md hover:shadow-lg"
      >
        <span>Send Message</span>
        <Send strokeWidth={2.5} className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

    </form>
  );
};

export default ContactForm;