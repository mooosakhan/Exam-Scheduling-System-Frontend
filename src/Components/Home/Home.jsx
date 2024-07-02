import React, {
  useState,
  useEffect,
} from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="home">
      <div className="time">
        <div className="datetime">
          <div className="clock">
            {formatTime(currentTime)}
          </div>
          <div className="date">
            {formatDate(currentTime)}
          </div>
        </div>
      </div>
      <div className="home-btn">
        <div
          className="btn"
          onClick={() => navigate("/teachers")}>
          Teachers
        </div>
        <div
          className="btn-2"
          onClick={() => navigate("/classrooms")}>
          Classrooms
        </div>
        <div
          className="btn-3"
          onClick={() => navigate("/scheduling")}>
          Scheduling
        </div>
      </div>
    </div>
  );
};

export default Home;
