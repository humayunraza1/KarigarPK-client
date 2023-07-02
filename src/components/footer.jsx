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
            <a href="#">
              <i class="fa-brands fa-instagram fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-whatsapp fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-regular fa-envelope fa-lg"></i>
            </a>
          </li>
          <li>
            <div className="vertical-bar"></div>
          </li>
          <li>
            <a href="#">
              <i>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 513.49 513.14"
                >
                  <path
                    className="cls-1"
                    d="M134.35,.96s8.89,.18,19.89,8.49c0,0,7.67,5.97,11.8,15.89l4.46,10.7,19.81,47.54,15.73,37.76s2.23,5.04,2.92,11.76-.87,13.24-1.66,15.53-3.21,10.24-9.01,15.42-18.18,15.31-18.18,15.31l-21.52,17.59-13.45,10.99s11.76,24.28,13.26,25.21c0,0,15.05,25.22,20.13,30.64s18.24,26.5,40.66,45.79,39.68,33.56,57.86,43.68,28.8,15.38,28.8,15.38l40.4-49.3s14.97-22.19,46.3-11.6l48.51,20.21,36.63,15.26,10.86,4.52s30.96,11.06,23.2,47.4l-24,88s-5.22,27.19-38.6,29.5c0,0-39.79-.87-59.29-3.89s-64.03-10.45-96.33-23.88-34.09-14.32-57.79-26.24c-23.71-11.92-53.22-33.95-53.22-33.95,0,0-87.81-64.35-127.82-147.49,0,0-22.83-43.68-31.28-72.69S4.11,132.48,4.42,119.09c0,0-10.76-59.67,3.38-76.48,0,0,7.43-12.36,22.84-16.56S118.64,2.04,118.64,2.04c0,0,9.7-2.56,15.71-1.08Z"
                  />
                </svg>
              </i>
              <span id="number">03161278341</span>
            </a>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>
            copyright &copy;{year} <a href="#">KarigarPK</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
