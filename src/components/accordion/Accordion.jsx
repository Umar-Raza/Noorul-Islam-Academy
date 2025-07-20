import React from "react";

export const Accordion = () => {
  return (
    <div className="container accordion-container my-5">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              What is a Noorul Islam Academy?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Noorul Islam Academy</strong> is an educational
              institution dedicated to teaching the Holy Quran and various
              aspects of Islamic studies. These academies aim to help Muslims
              (and sometimes non-Muslims interested in learning) connect with
              the Quran on a deeper level, through recitation, memorization,
              understanding, and application of its teachings in daily life.
              Many have transitioned to or were founded as online platforms to
              reach a global audience, leveraging technology to make Quranic
              education accessible.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Mission and Vision
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              The core mission of most Quran academies revolves around spreading
              authentic Quranic knowledge and fostering a strong connection
              between individuals and the Quran. Their vision often includes:
              <ul>
                <li>
                  <strong>Reviving the centrality of the Quran:</strong>
                  Encouraging the Quran to be a guiding principle in daily life,
                  rather than just a ceremonial or cultural book.
                </li>
                <li>
                  <strong>Empowering individuals:</strong> Providing
                  comprehensive courses that foster a deep understanding and
                  connection with the Quran.
                </li>
                <li>
                  <strong>Combining tradition with technology:</strong>
                  Utilizing modern tools and platforms to deliver high-quality
                  Quranic education, often with the support of qualified
                  instructors and personalized attention.
                </li>
                <li>
                  <strong>Nurturing spiritual growth:</strong> Helping students
                  develop a love for the Quran and live according to its
                  principles.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accessibility and Learning Formats
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Many Quran academies, especially the "online" ones, emphasize
              accessibility and flexibility:
              <ul>
                <li>
                  <strong>Online Learning:</strong> Classes are typically
                  conducted virtually through platforms like Zoom, Google Meet,
                  or WhatsApp, allowing students to learn from the comfort of
                  their homes, anywhere in the world.
                </li>
                <li>
                  <strong>One-on-One Sessions:</strong> Many academies offer
                  personalized one-on-one classes, ensuring individual attention
                  from qualified male or female tutors.
                </li>
                <li>
                  <strong>Flexible Timings:</strong> Students can often schedule
                  classes at their convenience, accommodating various time zones
                  and busy schedules.
                </li>
                <li>
                  <strong>Free Trial Classes:</strong> Many academies offer free
                  demo classes to allow prospective students to experience their
                  teaching methods before committing.
                </li>
                <li>
                  <strong>Multilingual Tutors:</strong> To cater to a global
                  audience, tutors often have proficiency in multiple languages
                  (e.g., English, Urdu, Arabic).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              What are the Benefits of Learning from a Quran Academy?
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              {/* spell-checker: disable */}
              Enrolling in a Quran academy offers numerous benefits for
              individuals seeking to deepen their connection with the Holy Book:
              <ul>
                <li>
                  <strong>Structured Learning Environment:</strong> Academies
                  provide a systematic and progressive curriculum, ensuring a
                  foundational understanding before moving to advanced concepts.
                  This structured approach is often more effective than
                  self-study.
                </li>
                <li>
                  <strong>Expert Guidance:</strong> Learning from qualified and
                  experienced teachers with certified knowledge and proper
                  Ijazah ensures accurate pronunciation, Tajweed application,
                  and understanding of the Quran's meanings.
                </li>
                <li>
                  <strong>Flexible Timings:</strong> Students can often schedule
                  classes at their convenience, accommodating various time zones
                  and busy schedules.
                </li>
                <li>
                  <strong>Personalized Attention (especially online):</strong>{" "}
                  Many online academies offer one-on-one sessions, allowing
                  teachers to tailor lessons to a student's individual pace,
                  strengths, and areas needing improvement. This personalized
                  approach can lead to more effective learning outcomes.
                </li>
              </ul>
              {/* spell-checker: enable */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
