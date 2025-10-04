import React from 'react';
import './GoogleMap.css';

const GoogleMap = ({ center, zoom = 10, className = "" }) => {
  // Google Maps embed URL for Bratislava, Slovakia
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172137.76554966406!2d17.00396345!3d48.1485965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89360aca6197%3A0x631f9b82fd884368!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2s!4v1696518193000!5m2!1sen!2s";

  return (
    <div className={`google-map-container ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map - PatrikVision Location"
        className="google-map-iframe"
      />
    </div>
  );
};

export default GoogleMap;
