import features from "../../constant/whyChooseUs/WhyChooseUs";
export default function ChooseUs() {
  return (
    <section className="whyChooseUs py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Us?</h2>
            <p className="lead text-muted">
              We're committed to providing exceptional Quranic education,
              delivering results that exceed your spiritual and academic
              expectations.
            </p>
          </div>
        </div>
        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <div className="d-inline-flex align-items-center justify-content-center bgIcon  bg-opacity-10 rounded-circle">
                        <IconComponent size={40} className="iconColor" />
                      </div>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                    <p className="card-text text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
