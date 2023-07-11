import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <h3>KarigarPK</h3>
        <p>Pakistan's 1st Mouse Accessory Store</p>
        <ul class="socials">
          <li>
            <a href="https://www.instagram.com/karigarpk/" target="_blank">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="http://wa.me/+923253508242" target="_blank">
              <i class="fa-brands fa-whatsapp fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="mailto:karigarpk.store@gmail.com" target="_blank">
              <i class="fa-regular fa-envelope fa-lg"></i>
            </a>
          </li>
          <li>
            <div className="vertical-bar"></div>
          </li>
          <li>
            <a href="sms:+923253508242">
              <i class="fa-solid fa-comment-sms"></i>
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;{year} <a>KarigarPK</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
