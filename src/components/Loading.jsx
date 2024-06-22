import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/404');
    }, 2000); // Simulasi waktu loading selama 2 detik

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="text-center grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8 w-screen">
      <div className="text-gray-600 text-2xl">
        <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
        Loading...
      </div>
    </div>
  );
};

export default Loading;
