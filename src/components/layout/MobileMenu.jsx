import React from "react";

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex justify-end items-start p-4 md:hidden">
      
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" 
        onClick={onClose}
      />

    
      <div 
        className="relative mt-16 w-56 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl p-4 animate-fadeInScale"
        role="dialog"
        aria-modal="true"
      >
        <nav className="flex flex-col">
          {navLinks.map((item, index) => (
            <React.Fragment key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onClose}
                className="py-3 px-4 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-violet-500/20 rounded-xl transition-all duration-200"
              >
                {item.label}
              </a>
              
              {index !== navLinks.length - 1 && (
                <div className="h-px bg-zinc-800/50 mx-2 my-1" />
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;