import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Check if user has scrolled to the bottom of the page
    if (parseInt(scrollHeight - scrollTop) === clientHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showButton && (
        <button className='top_me' onClick={scrollToTop} style={{ borderRadius:"10px", position: 'fixed', bottom: '85px', right: '20px', zIndex: '999',backgroundColor:"transparent",outline:"none",color:"#ffffff" }}>
       <i class="bi bi-arrow-up-circle"></i>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
