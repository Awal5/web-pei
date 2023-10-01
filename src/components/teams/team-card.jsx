import React from "react";
import Image from "react-bootstrap/Image";

const TeamCard = ({ management }) => {
  //  desctructuring props management
  const {
    name,
    image,
    position,
    description,
    facebook,
    twitter,
    linkedin,
  } = management;
  return (
    <div className="singleTM">
      <div className="tm_img">
        <img src={`http://localhost:4000/images/${image}`} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            <a href={`htts://www.facebook.com/${facebook}`}>
              <span>Facebook</span>
            </a>
            <a href={`https://www.twitter.com/${twitter}`}>
              <span>Twitter</span>
            </a>
            <a href={`https://www.linkedin.com/in/${linkedin}`}>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{position}</h6>
      </div>
    </div>
  );
};

export default TeamCard;
