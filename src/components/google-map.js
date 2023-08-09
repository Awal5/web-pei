import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9419.910594023731!2d107.64580764118155!3d-6.940155524644584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e80cb4190791%3A0xbb8346b63e75311b!2sPT%20Pindad%20Enjiniring%20Indonesia!5e0!3m2!1sid!2sid!4v1691582050314!5m2!1sid!2sid"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
