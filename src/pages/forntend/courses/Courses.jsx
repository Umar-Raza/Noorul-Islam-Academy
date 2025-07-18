import React from "react";
import CoursesData from "../../../constant/courseData/CoursesData";

export default function Courses() {
  return (
    <div className="container" id="courses">
      <div className="row">
        <div className="col mt-5">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark">Courses</h1>
            <div className="bottomLine mx-auto mb-3"></div>
            <p className="text-muted lead">
              Holistic Islamic learning journeys for every generation.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {CoursesData.map((items, index) => (
          <div
            className="col-sm-6 col-md-4 col-lg-4 mt-4 courseCard"
            key={index}
          >
            <div className="card h-100">
              <div className="card-body p-0 d-flex flex-column justify-content-between h-100">
                <div className="zoom h-100">
                  <img
                    className="card-img-top"
                    src={items.img}
                    alt="course images"
                  />
                </div>
                <div className="card-block">
                  <h5 className="card-title text-center">{items.hadding}</h5>

                  <p className="card-text small">{items.paragaraph}</p>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center w-100">
                  <span className="">{items.enroll}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card card-inverse card-info">
          <img class="card-img-top" src={image1} />
          <div class="card-block">
            <h4 class="card-title">Tawshif Ahsan Khan</h4>
            <div class="card-text">
              Tawshif is a web designer living in Bangladesh.
            </div>
          </div>
          <div class="card-footer">
            <small>Last updated 3 mins ago</small>
            <button class="btn btn-info float-right btn-sm">Follow</button>
          </div>
        </div>
      </div> */
}
