import { Award, Check, Globe, Users, Video } from "lucide-react";
import AboutImg from "../../../assets/aboutImg.jpg";
export default function About() {
  return (
    <div className="aboutBg bg-light py-5" id="about">
      <div className="container" id="about">
        {/* Header Section */}
        <div className="text-center mb-5 mt-3 mt-md-4">
          <h1 className="display-4 fw-bold text-dark mb-3">About Us</h1>
          <div className="bottomLine mx-auto mb-3"></div>
          <p className="text-center lead text-muted mt-md-3">
            Established in 2020 with a mission to spread Quranic education
            worldwide
          </p>
        </div>
        {/* Main Content Section */}
        <div className="row">
          {/* Left Image Section */}
          <div className="col-lg-5 d-flex justify-content-center align-items-center ">
            <div className=" position-relative">
              <img
                src={AboutImg}
                alt="Student learning Quran online"
                width={600}
                height={480}
                className="aboutImg img-fluid rounded-4"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* /* Right Content Section */}
          <div className="col-lg-7 d-flex flex-column justify-content-center aboutRight">
            <div className="ps-lg-1">
              <h2 className="aboutRight h2 fw-bold mb-4">
                Your Trusted Partner in Islamic Education
              </h2>
              <p className="text-muted mb-4">
                "Our Academy, established in Pakistan in 2020 by the esteemed <strong>Mufti Sufyan Sarwar Madni</strong>, is a premier institution committed to delivering exceptional Quranic education to a global student body. Under his vision and guidance, we have rapidly become a prominent online Islamic academy. Our curriculum is designed to be comprehensive, offering courses that include Quran recitation with Tajweed, memorization of the Quran (Hifz ul Quran), Namaz & Kalmas, Arabic language, and various Islamic studies."
              </p>
              <p className="text-muted mb-4 ">
                We are distinguished by our team of highly qualified male and
                female educators. These teachers are not only fluent in English
                but are also deeply dedicated to providing one-on-one,
                personalized instruction to every student. This commitment
                ensures that each learner receives the attention they need to
                succeed in their spiritual and educational journey.
              </p>

              {/* <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="featureIcon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Flexible Scheduling
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="featureIcon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      One-on-One Classes
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="featureIcon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Progress Tracking
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="featureIcon rounded-circle d-flex align-items-center justify-content-center me-3">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-muted fw-medium">
                      Affordable Fees
                    </span>
                  </div>
                </div>
              </div> */}
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="featureDiv d-flex align-items-center p-3  rounded-3 shadow-sm">
                    <div className=" me-3">
                      <Users size={24} className="featureBadges" />
                    </div>
                    <span className="fw-semibold text-dark">
                      Qualified Teachers
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="featureDiv d-flex align-items-center p-3  rounded-3 shadow-sm">
                    <div className="me-3">
                      <Globe size={24} className="featureBadges" />
                    </div>
                    <span className="fw-semibold text-dark">
                      International Students
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="featureDiv d-flex align-items-center p-3  rounded-3 shadow-sm">
                    <div className="me-3">
                      <Video size={24} className="featureBadges" />
                    </div>
                    <span className="fw-semibold text-dark">
                      Live Online Classes
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="featureDiv d-flex align-items-center p-3  rounded-3 shadow-sm">
                    <div className="me-3">
                      <Award size={24} className="featureBadges" />
                    </div>
                    <span className="fw-semibold text-dark">Certification</span>
                  </div>
                </div>
              </div>
              {/* Quote Section */}
              {/* <div className="leftLineQuote p-3 mb-4 rounded-3">
                <p className="fst-italic text-muted mb-2">
                  "The best of you are those who learn the Quran and teach it to
                  others."
                </p>
                <p className="fw-medium text-dark mb-0">- Sahih Bukhari</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
