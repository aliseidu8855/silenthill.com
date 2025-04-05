import React, { createContext, useState } from 'react';

const DonationModalContext = createContext();

const DonationModalProvider = ({ children }) => {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <DonationModalContext.Provider value={{ showDonate, setShowDonate }}>
      {children}
    </DonationModalContext.Provider>
  );
};

export { DonationModalContext, DonationModalProvider };