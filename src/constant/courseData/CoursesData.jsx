import Nazara from "../../assets/coursesImages/qaida.jpg";
import Translation from "../../assets/coursesImages/translation.jpg";
import Tafsser from "../../assets/coursesImages/tafseer.jpg";
import DarseNazami from "../../assets/coursesImages/derseNazami.jpg";
import FazUloom from "../../assets/coursesImages/farzUloom.jpg";
import DuaBook from "../../assets/coursesImages/duaBook.jpg";
import { Link } from "react-router";

const CoursesData = [
  {
    img: Nazara,
    hadding: "Qaida & Nazra",
    paragaraph:
      "Learn Quran Nazra for fluent reading and accurate recitation. Master proper pronunciation and correct letter origins through Tajweed. This ensures a precise and spiritually enriching Quranic recitation.",
    enroll: (
      <Link className="mainButton " to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: Translation,
    hadding: "Tarjamat ul Quran",
    paragaraph:
      "Our Quran translation program offers profound understanding of divine rulings and commandments, Allah's comprehensive guidance. This study empowers you to apply Quranic wisdom.",
    enroll: (
      <Link className="mainButton" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: Tafsser,
    hadding: "Tafseer Course",
    paragaraph:
      "In this comprehensive course, students will diligently read, translate, and explain the Holy Quran. They will also receive personalized and extra attention from our highly experienced and qualified teachers.",
    enroll: (
      <Link className="mainButton" to="/registration">
        Apply Now
      </Link>
    ),
  },

  {
    img: DarseNazami,
    hadding: "Dars-e-Nizami",
    paragaraph:
      "Dars-e-Nizami offers a comprehensive Islamic education, covering Quran, Hadith, Fiqh, Arabic language, & logic. It's a traditional curriculum for deep religious scholarship, of Islamic sciences.",
    enroll: (
      <Link className="mainButton" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: FazUloom,
    hadding: "Farz Uloom",
    paragaraph:
      "In this vital Farz Uloom course, you will learn the basic fundamental rulings of Sharia via a comprehensive book, which is indeed obligatory for every sane male and female.",
    enroll: (
      <Link className="mainButton" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: DuaBook,
    hadding: "Dua Book",
    paragaraph:
      "Encourage your children to learn essential duas from a very tender age. Our comprehensive Dua Book consists of numerous vital supplications that your kids should start memorizing at an early, crucial age.",
    enroll: (
      <Link className="mainButton" to="/registration">
        Apply Now
      </Link>
    ),
  },
];
export default CoursesData;
