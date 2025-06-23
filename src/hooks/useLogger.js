import { useEffect } from 'react';

const useLogger = (action, data) => {
  useEffect(() => {
    
    console.log(`Action: ${action}`, data);
    
  
  }, [action, data]);
};

export default useLogger;