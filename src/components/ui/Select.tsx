import React, { useState } from 'react';

const Select = ({ value, onValueChange, onOpenChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleOpen = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onOpenChange) onOpenChange(newState);
  };

  const handleSelect = (val) => {
    setSelectedValue(val);
    if (onValueChange) onValueChange(val);
    setIsOpen(false);
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center justify-between px-3 py-2 border rounded-md cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-gray-500">
          {value ? children.find(child => child.props.value === value)?.props.children || "Select" : "Select"}
        </span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 6.5L7.5 9.5L10.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          <div className="py-1">
            {React.Children.map(children, child => (
              <div 
                key={child.props.value}
                className="px-3 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSelect(child.props.value)}
              >
                {child.props.children}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;