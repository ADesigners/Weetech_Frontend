// import React, { useState, useEffect } from "react";
// import { FaCalendarAlt } from "react-icons/fa";

// const ProjectCard = ({ images, name, date }) => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div className="project-card wow fadeInUp">
//       <div className="pro-img">
//         {images.map((img, idx) => (
//           <img
//             key={img}
//             src={img}
//             alt=""
//             className={`project-fade-img${current === idx ? " active" : ""}`}
//             style={{ opacity: current === idx ? "1" : "0" }}
//           />
//         ))}
//       </div>
//       <div className="pro-txt">
//         <div className="pro-name">
//           <h5>{name}</h5>
//         </div>
//         <div className="pro-date">
//           <FaCalendarAlt className="date-icon" /> <p>{date}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const projectsData = [
//   {
//     images: [
//       "/images/sec1.png",
//       "/images/sec2.png",
//       "/images/sec3.png",
//       "/images/sec4.png",
//     ],
//     name: "Sec Council",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/GGM1.png",
//       "/images/GGM2.png",
//       "/images/GGM3.png",
//       "/images/GGM4.png",
//     ],
//     name: "Golden Gallop Marketing",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/Cip1.png",
//       "/images/Cip2.png",
//       "/images/Cip3.png",
//       "/images/Cip4.png",
//     ],
//     name: "Cipherly",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/RAT1.png",
//       "/images/RAT2.png",
//       "/images/RAT3.png",
//       "/images/RAT4.png",
//     ],
//     name: "Reveal Affirm Testify",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/PGA1.png",
//       "/images/PGA2.png",
//       "/images/PGA3.png",
//       "/images/PGA4.png",
//     ],
//     name: "Patel Gupta & Associates",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/PG1.png",
//       "/images/PG2.png",
//       "/images/PG3.png",
//       "/images/PG4.png",
//     ],
//     name: "Raj Paying Guests",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/CFN1.png",
//       "/images/CFN2.png",
//       "/images/CFN3.png",
//       "/images/CFN4.png",
//     ],
//     name: "CraftyNodes",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/magb1.png",
//       "/images/magb2.png",
//       "/images/magb3.png",
//       "/images/magb4.png",
//     ],
//     name: "Magnet Boosting",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/cipco1.png",
//       "/images/cipco2.png",
//       "/images/cipco3.png",
//       "/images/cipco4.png",
//     ],
//     name: "Cipco Pharmaceuticals",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/rr1.png",
//       "/images/rr2.png",
//       "/images/rr3.png",
//       "/images/rr4.png",
//     ],
//     name: "RR Computers",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/stf1.png",
//       "/images/stf2.png",
//       "/images/stf3.png",
//       "/images/stf4.png",
//     ],
//     name: "Standfill India",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/cine1.png",
//       "/images/cine2.png",
//       "/images/cine3.png",
//       "/images/cine4.png",
//     ],
//     name: "Cinephile",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/tfwf1.png",
//       "/images/tfwf2.png",
//       "/images/tfwf3.png",
//       "/images/tfwf4.png",
//     ],
//     name: "TFWF Laboratories",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/casino1.png",
//       "/images/casino2.png",
//       "/images/casino3.png",
//       "/images/casino4.png",
//     ],
//     name: "Casino Online App",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/vew1.png",
//       "/images/vew2.png",
//       "/images/vew3.png",
//       "/images/vew4.png",
//     ],
//     name: "Vishwakarma Engineering Works",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/orl1.png",
//       "/images/orl2.png",
//       "/images/orl3.png",
//       "/images/orl4.png",
//     ],
//     name: "On Request Lab",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/calpha1.png",
//       "/images/calpha2.png",
//       "/images/calpha3.png",
//       "/images/calpha4.png",
//     ],
//     name: "Casino Alpha",
//     date: "2025",
//   },
//   {
//     images: [
//       "/images/mgv1.png",
//       "/images/mgv2.png",
//       "/images/mgv3.png",
//       "/images/mgv4.png",
//     ],
//     name: "Mega Virality",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/gro1.png",
//       "/images/gro2.png",
//       "/images/gro3.png",
//       "/images/gro4.png",
//     ],
//     name: "Gro High Institute",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/law1.png",
//       "/images/law2.png",
//       "/images/law3.png",
//       "/images/law4.png",
//     ],
//     name: "Advocate Website",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/rajwada1.png",
//       "/images/rajwada2.png",
//       "/images/rajwada3.png",
//       "/images/rajwada4.png",
//     ],
//     name: "Rajwada Paying Guests",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/ngo1.png",
//       "/images/ngo2.png",
//       "/images/ngo3.png",
//       "/images/ngo4.png",
//     ],
//     name: "NGO Cybite",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/chem1.png",
//       "/images/chem2.png",
//       "/images/chem3.png",
//       "/images/chem4.png",
//     ],
//     name: "Chemtech India",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/Pa1.png",
//       "/images/Pa2.png",
//       "/images/Pa3.png",
//       "/images/Pa4.png",
//     ],
//     name: "Shrees Shiva Amba",
//     date: "Month, 20XX",
//   },
//   {
//     images: [
//       "/images/dfk1.png",
//       "/images/dfk2.jpeg",
//       "/images/dfk3.jpeg",
//       "/images/dfk4.jpeg",
//     ],
//     name: "Dev Kripa Finance",
//     date: "Month, 20XX",
//   },
// ];

// const INITIAL_VISIBLE = 6;

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);

//   const handleToggle = () => setShowAll((prev) => !prev);

//   // Determine which projects to show
//   const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_VISIBLE);

//   return (
//     <section className="projects-section section-margin" id="projects-section">
//       <div className="inner-width">
//         <div className="section-heading">
//           <div className="smaller-heading">
//             <p>DISCOVER THE IMPACT OF OUR INNOVATIVE SOLUTIONS.</p>
//           </div>
//           <div className="larger-heading">
//             <h2>Our Featured Projects</h2>
//           </div>
//         </div>
//         <div className="projects">
//           <div className="projects-wrapper">
//             {visibleProjects.map((project, idx) => (
//               <ProjectCard
//                 key={project.name + idx}
//                 images={project.images}
//                 name={project.name}
//                 date={project.date}
//               />
//             ))}
//           </div>
//           {projectsData.length > INITIAL_VISIBLE && (
//             <div className="pro-btn" onClick={handleToggle}>
//               {showAll ? "Show Less" : "Show More"}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// ProjectCard component
const ProjectCard = ({ images, name, date, current }) => {
  return (
    <>
      <div className="pro-img">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`project-fade-img${current === idx ? " active" : ""}`}
            style={{ opacity: current === idx ? "1" : "0" }}
          />
        ))}
      </div>
      <div className="pro-txt">
        <div className="pro-name">
          <h5>{name}</h5>
        </div>
        <div className="pro-date">
          <FaCalendarAlt className="date-icon" /> <p>{date}</p>
        </div>
      </div>
    </>
  );
};

const projectsData = [
  {
    images: [
      "/images/sec1.png",
      "/images/sec2.png",
      "/images/sec3.png",
      "/images/sec4.png",
    ],
    name: "Sec Council",
    date: "2024",
  },
 
  {
    images: [
      "/images/Cip1.png",
      "/images/Cip2.png",
      "/images/Cip3.png",
      "/images/Cip4.png",
    ],
    name: "Cipherly",
    date: "2023",
  },
  
  
  {
    images: [
      "/images/PG1.png",
      "/images/PG2.png",
      "/images/PG3.png",
      "/images/PG4.png",
    ],
    name: "Raj Paying Guests",
    date: "2025",
  },

  {
    images: [
      "/images/stf1.png",
      "/images/stf2.png",
      "/images/stf3.png",
      "/images/stf4.png",
    ],
    name: "Standfill India",
    date: "2023",
  },
  
  
  {
    images: [
      "/images/casino1.png",
      "/images/casino2.png",
      "/images/casino3.png",
      "/images/casino4.png",
    ],
    name: "Casino Online App",
    date: "Month, 2024",
  },
 
  {
    images: [
      "/images/orl1.png",
      "/images/orl2.png",
      "/images/orl3.png",
      "/images/orl4.png",
    ],
    name: "On Request Lab",
    date: "Month, 2025",
  },
  {
    images: [
      "/images/calpha1.png",
      "/images/calpha2.png",
      "/images/calpha3.png",
      "/images/calpha4.png",
    ],
    name: "Casino Alpha",
    date: "Month, 2024",
  },

  {
    images: [
      "/images/gro1.png",
      "/images/gro2.png",
      "/images/gro3.png",
      "/images/gro4.png",
    ],
    name: "Gro High Institute",
    date: "Month, 2025",
  },
  {
    images: [
      "/images/law1.png",
      "/images/law2.png",
      "/images/law3.png",
      "/images/law4.png",
    ],
    name: "Advocate Website",
    date: "Month, 2025",
  },
  {
    images: [
      "/images/rajwada1.png",
      "/images/rajwada2.png",
      "/images/rajwada3.png",
      "/images/rajwada4.png",
    ],
    name: "Rajwada Paying Guests",
    date: "Month, 2025",
  },
  
  {
    images: [
      "/images/Pa1.png",
      "/images/Pa2.png",
      "/images/Pa3.png",
      "/images/Pa4.png",
    ],
    name: "Shrees Shiva Amba",
    date: "Month, 2024",
  },
  {
    images: [
      "/images/dfk1.png",
      "/images/dfk2.jpeg",
      "/images/dfk3.jpeg",
      "/images/dfk4.jpeg",
    ],
    name: "Dev Kripa Finance",
    date: "Month, 2024",
  },
];

const INITIAL_VISIBLE = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentImgIndexes, setCurrentImgIndexes] = useState({});

  const handleToggle = () => setShowAll((prev) => !prev);

  // Timer for image slideshow for each project
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndexes((prev) => {
        const updated = {};
        (showAll
          ? projectsData
          : projectsData.slice(0, INITIAL_VISIBLE)
        ).forEach((_, i) => {
          const prevIdx = prev[i] || 0;
          const len = projectsData[i].images.length;
          updated[i] = (prevIdx + 1) % len;
        });
        return updated;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [showAll]);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, INITIAL_VISIBLE);

  return (
    <section className="projects-section section-margin" id="projects-section">
      <div className="inner-width">
        <div className="section-heading wow fadeInUp" data-wow-delay=".3s">
          <div className="smaller-heading">
            <p>DISCOVER THE IMPACT OF OUR INNOVATIVE SOLUTIONS.</p>
          </div>
          <div className="larger-heading">
            <h2>Our Featured Projects</h2>
          </div>
        </div>
        <div className="projects">
          <div className="projects-wrapper">
            {visibleProjects.map((project, idx) => (
              <div
                key={project.name + idx}
                className="project-card wow fadeInUp"
                data-wow-delay={`${(idx * 0.2).toFixed(1)}s`}
              >
                <ProjectCard
                  images={project.images}
                  name={project.name}
                  date={project.date}
                  current={currentImgIndexes[idx] || 0}
                />
              </div>
            ))}
          </div>
          {projectsData.length > INITIAL_VISIBLE && (
            <div className="pro-btn" onClick={handleToggle}>
              {showAll ? "Show Less" : "Show More"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
