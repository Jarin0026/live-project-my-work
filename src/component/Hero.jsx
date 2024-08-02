import React,{useState} from "react";
import logo from "../images/logo.webp";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="head flex justify-between text-semibold text-white py-4 pl-20 pr-10 max-xl:flex-col justify-center items-center gap-5 max-sm:hidden ">
        <div className="flex gap-5 max-lg:flex-wrap justify-center">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-phone"></i>
            <span className="">Ph: +91 9105666371</span>
          </div>

          <div className="line max-lg:hidden"></div>

          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-envelope"></i>
            <span>littlescholars.kashipur@gmail.com</span>
          </div>

          <div className="line max-lg:hidden"></div>

          <div className="flex justify-center items-center gap-2">
            <i className="fa-solid fa-map"></i>
            <span>Bhalla Farm Pratapur, Ramnagar Road, Kashipur</span>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <i className="fa-brands fa-facebook cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <i className="fa-brands fa-instagram cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <i className="fa-brands fa-youtube cursor-pointer p-2 rounded-3xl hover:bg-black"></i>
          <a href="#">e-Care Login</a>
        </div>
      </div>

      <div className="animeBg py-3 text-white font-medium">
        <div className="anime flex flex-row gap-10">
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
          <a href="#" className="whitespace-nowrap">
            📖 REGISTRATION OPEN FOR SESSION 2024-25. Click here 📖
          </a>
        </div>
      </div>

      <nav className="sticky top-0 z-20 w-full flex flex-row justify-between items-center py-5 px-20  bg-white  max-xl:px-5">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <div className="text-base font-semibold max-xl:hidden">
          <ul className="flex ">
            <li className="dropdown">
              <div className="menu py-3 mb-4">
                <a href="#">About us</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Founder's Desk</a>
                </li>
                <li>
                  <a href="#">Principal's Desk</a>
                </li>
                <li>
                  <a href="#">School Management</a>
                </li>
                <li>
                  <a href="#">Managing Committee</a>
                </li>
                <li>
                  <a href="#">Principal & Policies</a>
                </li>
                <li>
                  <a href="#">Infrastructure </a>
                </li>
                <li>
                  <a href="#">Photo Gallery</a>
                </li>
                <li>
                  <a href="#">Video Gallery</a>
                </li>
                <li>
                  <a href="#">Media Gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Admission</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Admission Helpdesk / School Visit</a>
                </li>
                <li>
                  <a href="#">Admission Procedure</a>
                </li>
                <li>
                  <a href="#">Registration</a>
                </li>
                <li>
                  <a href="#">Fee Structure</a>
                </li>
                <li>
                  <a href="#">Scholarship</a>
                </li>
                <li>
                  <a href="#">School Timings</a>
                </li>
                <li>
                  <a href="#">FAQ's</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <div className="menu py-3 mb-4">
                <a href="#">Student Life</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Academics</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Swimming Pool Form</a>
                </li>
                <li>
                  <a href="#">Blood Donation Form</a>
                </li>
                <li>
                  <a href="#">Co-Curricular</a>
                </li>
                <li>
                  <a href="#">Socio-Cultural Development</a>
                </li>
                <li>
                  <a href="#">Counselling</a>
                </li>
                <li className="dropdown">
                  <div>
                    <a href="#">Council Guidlines</a>
                    <i class="fa-solid fa-chevron-right p-1"></i>
                  </div>
                  <ul className="submenu sub-menu-right">
                    <li>
                      <a href="#">Student Form</a>
                    </li>
                    <li>
                      <a href="#">Parent Form</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Achievements</a>
                </li>
                <li>
                  <a href="#">Events Calendar</a>
                </li>
                <li>
                  <a href="#">Toppers</a>
                </li>
                <li>
                  <a href="#">Cabinet</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">News & Calendar</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Student Hand Book</a>
                </li>
                <li>
                  <a href="#">Newsletter / Scholar Times</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Mandatory Disclosures</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Book List</a>
                </li>
                <li>
                  <a href="#">Safety Certificates & Affiliations</a>
                </li>
                <li>
                  <a href="#">CBSE-OASIS</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="menu py-3 mb-4">
                <a href="#">Contact Us</a>
                <i class="fa-solid fa-chevron-down p-1"></i>
              </div>
              <ul className="submenu">
                <li>
                  <a href="#">Reach Us</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Guest Book</a>
                </li>
                <li>
                  <a href="#">Managing Committee</a>
                </li>
                <li>
                  <a href="#">Principal & Policies</a>
                </li>
                <li>
                  <a href="#">Infrastructure </a>
                </li>
                <li>
                  <a href="#">Photo Gallery</a>
                </li>
                <li>
                  <a href="#">Video Gallery</a>
                </li>
                <li>
                  <a href="#">Media Gallery</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div 
        className="xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
          <i class="fa-solid fa-bars text-2xl"></i>
        </div>
      </nav>

      <div 
      className={`hamburger h-[100%] ${
        isOpen ? "block" : "hidden"
      }`}
      >
        <div 
        onClick={() => setIsOpen(!isOpen)}
        >
        <i className="fa-solid fa-xmark text-3xl text-white cursor-pointer p-2"></i>
        </div>
        <ul className="accordion text-xl">
          <li className="accordion-item">
            <input type="checkbox" id="about-us" className="accordion-toggle" />
            <label for="about-us" className="accordion-header">
              About us <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Founder's Desk</a>
              </li>
              <li>
                <a href="#">Principal's Desk</a>
              </li>
              <li>
                <a href="#">School Management</a>
              </li>
              <li>
                <a href="#">Managing Committee</a>
              </li>
              <li>
                <a href="#">Principal & Policies</a>
              </li>
              <li>
                <a href="#">Infrastructure</a>
              </li>
              <li>
                <a href="#">Photo Gallery</a>
              </li>
              <li>
                <a href="#">Video Gallery</a>
              </li>
              <li>
                <a href="#">Media Gallery</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input
              type="checkbox"
              id="admission"
              className="accordion-toggle"
            />
            <label for="admission" className="accordion-header">
              Admission <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Admission Helpdesk / School Visit</a>
              </li>
              <li>
                <a href="#">Admission Procedure</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Fee Structure</a>
              </li>
              <li>
                <a href="#">Scholarship</a>
              </li>
              <li>
                <a href="#">School Timings</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input
              type="checkbox"
              id="student-life"
              className="accordion-toggle"
            />
            <label for="student-life" className="accordion-header">
              Student Life <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Academics</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Swimming Pool Form</a>
              </li>
              <li>
                <a href="#">Blood Donation Form</a>
              </li>
              <li>
                <a href="#">Co-Curricular</a>
              </li>
              <li>
                <a href="#">Socio-Cultural Development</a>
              </li>
              <li>
                <a href="#">Counselling</a>
              </li>
              <li class="accordion-item">
                <input
                  type="checkbox"
                  id="council-guidelines"
                  className="accordion-toggle"
                />
                <label for="council-guidelines" className="accordion-header">
                  Council Guidelines{" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </label>
                <ul className="accordion-content">
                  <li>
                    <a href="#">Student Form</a>
                  </li>
                  <li>
                    <a href="#">Parent Form</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Achievements</a>
              </li>
              <li>
                <a href="#">Events Calendar</a>
              </li>
              <li>
                <a href="#">Toppers</a>
              </li>
              <li>
                <a href="#">Cabinet</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input
              type="checkbox"
              id="news-calendar"
              className="accordion-toggle"
            />
            <label for="news-calendar" className="accordion-header">
              News & Calendar <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Student Hand Book</a>
              </li>
              <li>
                <a href="#">Newsletter / Scholar Times</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input
              type="checkbox"
              id="mandatory-disclosures"
              className="accordion-toggle"
            />
            <label for="mandatory-disclosures" className="accordion-header">
              Mandatory Disclosures <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Book List</a>
              </li>
              <li>
                <a href="#">Safety Certificates & Affiliations</a>
              </li>
              <li>
                <a href="#">CBSE-OASIS</a>
              </li>
            </ul>
          </li>
          <li className="accordion-item">
            <input
              type="checkbox"
              id="contact-us"
              className="accordion-toggle"
            />
            <label for="contact-us" className="accordion-header">
              Contact Us <i className="fa-solid fa-chevron-down"></i>
            </label>
            <ul className="accordion-content">
              <li>
                <a href="#">Reach Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Guest Book</a>
              </li>
              <li>
                <a href="#">Managing Committee</a>
              </li>
              <li>
                <a href="#">Principal & Policies</a>
              </li>
              <li>
                <a href="#">Infrastructure</a>
              </li>
              <li>
                <a href="#">Photo Gallery</a>
              </li>
              <li>
                <a href="#">Video Gallery</a>
              </li>
              <li>
                <a href="#">Media Gallery</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
