import { useEffect, useRef } from "react";

import historyMain from "../../assets/images/history/history-main.png";
import historyCooking from "../../assets/images/history/history-cooking.png";
import historyPan from "../../assets/images/history/history-pan.png";

import "./History.css";

const History = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentSection.classList.add("history-section--show");
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="history" className="history-section" ref={sectionRef}>
      <div className="history-container">
        {/* ==================== History top content ==================== */}

        <div className="history-top">
          <span className="history-count">01</span>

          <h2 className="history-title">
            Emperor&apos;s Cooking Dynasty: The History Of Our Cuisine
          </h2>

          <div className="history-copy">
            <p>
              Our esteemed chef, renowned for their passion and expertise in
              seafood cuisine, elevates the freshest catches into culinary works
              of art that will delight your senses. With an unwavering dedication
              to sourcing the highest quality seafood, our chef is deeply
              committed to sustainability and responsible fishing practices,
              ensuring that each ingredient is not only delicious but also
              ethically sourced.
            </p>

            <p>
              Drawing inspiration from global flavors and techniques, our chef
              combines traditional culinary wisdom with innovative approaches to
              create unforgettable dishes. From succulent crab cakes with a hint
              of Cajun spice to seared tuna atop a bed of vibrant seaweed salad.
            </p>
          </div>
        </div>

        {/* ==================== History image gallery ==================== */}

        <div className="history-gallery">
          <figure className="history-image history-image--main">
            <img src={historyMain} alt="Chef preparing fresh seafood" />
          </figure>

          <figure className="history-image history-image--top">
            <img src={historyCooking} alt="Chef cooking seafood in a pan" />
          </figure>

          <figure className="history-image history-image--bottom">
            <img src={historyPan} alt="Fresh seafood being cooked" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default History;