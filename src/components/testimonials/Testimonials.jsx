import React, { useState } from "react";
import Slider from "react-slick";

export default function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Aamir Nadeem",
      role: "Qaida and Nazra Student",
      city: "London, UK",
      text: "I am Aamir Nadeem From London, UK. My son Taaha is taking online Quran classes from Mufti Sufyan 's Noor ul Islam Academy. I am very happy with the hard work of Mufti Sufyan SB . My son Taaha is getting batter day by day .Mufti SB is very friendly with kids .His teaching method is very outstanding .I  highly recommend Noor ul Islam Academy for online Quran classes.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Ali Rizvi",
      role: "Qaida and Nazra Student",
      city: "Dubai",
      text: "I’m Ali Rizvi from Dubai, and my daughter did her Quran classes online with Noor ul Islam Academy. She had read the Quran before, but Mufti Sufyan  Sahab started from the beginning with her. This time, her pronunciation and understanding got so much better. Really happy with the effort by Mufti Sufyan Sahab and the Noor ul Islam Academy. Great job!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Neha Khan",
      role: "Nazra Quran",
      city: "Canada",
      text: "I’m Neha Khan from Canada، and my son Ali Jabir completed his Quran for the first time with the help and guidance of Mufti Sufyan Sahab through Noor ul Islam Academy. He began with Qaida, and Mufti Sahab ensured his pronunciation was clear and accurate every step of the way. The classes were interactive, engaging, and perfectly suited for kids. My son genuinely enjoyed attending each session, Mufti Sufyan’s friendly and patient approach made a big difference. Grateful for the effort and dedication. Highly recommend!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ];
  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate avatar background color based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#8B4513', //(Saddle Brown)
      '#2F4F4F',//(Dark Slate Gray)
      '#556B2F',//(Dark Olive Green)
      '#8B008B ',//(Dark Magenta)
      '#4B0082', //(Indigo)
      '#800000 ',//(Maroon)
      '#008B8B '//(Dark Cyan)
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Avatar Component with fallback to initials
  const Avatar = ({ testimonial }) => {
    const [imageError, setImageError] = useState(false);

    if (testimonial.image && !imageError) {
      return (
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="rounded-circle"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            border: "4px solid #fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
          onError={() => setImageError(true)}
        />
      );
    }

    // Fallback to initials avatar
    return (
      <div
        className="rounded-circle d-flex align-items-center justify-content-center"
        style={{

          backgroundColor: getAvatarColor(testimonial.name),

        }}
      >
        {getInitials(testimonial.name)}
      </div>
    );
  };
  return (
    <div className="testimonialsDiv py-12 min-h-screen ">
      <div className="container mx-auto px-4 ">
        <div className="row justify-content-center">
          <div className=" col-12 col-md-8 my-5">
            <div className="testimonialCol">
              <h1 className="display-4 fw-bold text-center">Testimonials</h1>
              <div className="bottomLine mx-auto mb-3"></div>
              <p className="text-muted text-center mb-3">
                Feedback from our students, what they say about us.
              </p>
              <div className="card w-100 p-5">
                <Slider {...settings} className="testimonial_slider">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial_item">
                      <div className="testimonial_image d-flex justify-content-center mb-4">
                        <Avatar testimonial={testimonial} />
                      </div>
                      <div
                        className="rating d-flex justify-content-center mb-3"
                        style={{ fontSize: "2rem", lineHeight: 1 }}
                      >
                        {"★".repeat(testimonial.rating)}
                        {"☆".repeat(5 - testimonial.rating)}
                      </div>
                      <div className="testimonial_content text-center">
                        <p className="text fst-italic">{testimonial.text}</p>
                        <h4 className="name text-bold">{testimonial.name}</h4>
                        <p className="role text-muted">{testimonial.city}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
