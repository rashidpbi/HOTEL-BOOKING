import React from "react";
import BrandIcon from "../../assets/images/2361.jpg";
function FooterContent() {
  return (
    <div className="bg-zinc-200">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
        <div className="">
          <img
            src={BrandIcon}
            style={{ height: 180, width: 180 }}
            alt="brandicon"
          />
        </div>
        <div className="grid">
          <div>LEGAL</div>
          <div>
            <a href="">Privacy Policy</a>
          </div>
          <div>
            <a href="">Licensing</a>
          </div>
          <div>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
        <div className="grid">
          <div>COMPANY</div>
          <div><a href="">About</a></div>
          <div><a href="">Contact Us</a></div>
          <div><a href="">Blog</a></div>
        </div>
        <div className="grid">
          <div>CONTACT US</div>
          <div>Banglore,India</div>
          <div>rashidpbi111@gmail.com</div>
          <div>icons</div>
        </div>
      
      </div>
      <div className="flex">copyright</div>
    </div>
  );
}

export default FooterContent;
