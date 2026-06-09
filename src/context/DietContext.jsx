import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

const DietContext = createContext();

export const useDiet = () => {
  const context = useContext(DietContext);
  if (!context) {
    throw new Error('useDiet must be used within a DietProvider');
  }
  return context;
};

export const DietProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default to 'all' if no diet is set
  const [diet, setDietState] = useState(() => {
    return searchParams.get('diet') || localStorage.getItem('chatpati_diet_pref') || 'all';
  });

  // Sync state when URL search params change
  useEffect(() => {
    const urlDiet = searchParams.get('diet');
    if (urlDiet && ['all', 'veg', 'non-veg'].includes(urlDiet)) {
      setDietState(urlDiet);
      localStorage.setItem('chatpati_diet_pref', urlDiet);
    }
  }, [searchParams]);

  const setDiet = (newDiet) => {
    if (!['all', 'veg', 'non-veg'].includes(newDiet)) return;
    
    setDietState(newDiet);
    localStorage.setItem('chatpati_diet_pref', newDiet);
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams);
    newParams.set('diet', newDiet);
    
    navigate({
      pathname: location.pathname,
      search: newParams.toString()
    }, { replace: true, preventScrollReset: true });
  };

  return (
    <DietContext.Provider value={{ diet, setDiet }}>
      {children}
    </DietContext.Provider>
  );
};
