'use client'

// src/app/page.tsx
import Image from "next/image";
import "./styles.css";
import { useState } from "react";

const program = [
  {
    day: "April 15, Wednesday",
    items: [
      {
        time: "19:00 – 20:30",
        type: "event",
        title: "Welcome reception and gathering"
      }
    ]
  },

  {
    day: "April 16, Thursday",
    items: [
      { time: "09:00", type: "invited", speaker: "Kristian Franze", title: "The mechanochemical regulation of brain development" },
      { time: "09:30", type: "invited", speaker: "Felix B. Engel", title: "Beyond the Centrosome: Microtubule Networks Orchestrating Mechanical Signaling to the Nucleus" },
      { time: "10:00", type: "student", speaker: "Konstantin Michel", title: "" },
      { time: "10:15", type: "student", speaker: "Farzahneh Aavani", title: "" },
      { time: "10:30", type: "student", speaker: "Sushil Dubey", title: "" },
      { time: "10:45", type: "student", speaker: "Mathis Greiler", title: "" },
      { time: "11:00 – 11:30", type: "break", title: "Coffee break" },
      { time: "11:30", type: "invited", speaker: "Rocio López-Posadas", title: "TBA" },
      { time: "12:00", type: "invited", speaker: "Jacopo Di Russo", title: "Cell loss disrupts mechanical homeostasis to drive retinal pigment epithelium ageing-like phenotype in vitro" },
      { time: "12:30", type: "student", speaker: "Melanie Johrden", title: "" },
      { time: "12:45", type: "student", speaker: "Raphael Tönshoff", title: "" },
      { time: "13:00", type: "student", speaker: "Rose Alkhateeb", title: "" },
      { time: "13:15", type: "student", speaker: "Iris Doolar", title: "" },
      { time: "13:30 – 14:00", type: "break", title: "Coffee break / mini lunch" },
      { time: "14:00 – 16:00", type: "highlight", title: "Poster session & lunch" },
      { time: "16:00 – 18:00", type: "highlight", title: "Social activities & city visit" },
      { time: "18:00", type: "highlight", title: "Conference dinner" }
    ]
  },

  {
    day: "April 17, Friday",
    items: [
      { time: "09:00", type: "invited", speaker: "Ben Fabry", title: "Biophysics of immune cell migration" },
      { time: "09:30", type: "invited", speaker: "Sara Kaliman", title: "Mechanical Phenotyping of Blood Cells using Deformability Cytometry" },
      { time: "10:00", type: "student", speaker: "Xin Yang", title: "" },
      { time: "10:15", type: "student", speaker: "Alejandro Gomez", title: "" },
      { time: "10:30 – 10:45", type: "break", title: "Coffee break" },
      { time: "10:45", type: "invited", speaker: "Jona Kayser", title: "AI-guided discovery of physics-informed tumor therapies" },
      { time: "11:15", type: "student", speaker: "Anil Can", title: "" },
      { time: "11:30", type: "student", speaker: "Tiana Tietz", title: "" },
      { time: "11:45", type: "student", speaker: "Marlene Menke & Veronica Donde", title: "" },
      { time: "12:15", type: "highlight", title: "Wrap-up and goodbye" }
    ]
  }
];

const posters = [
  {
    id: 1,
    author: "Aman Kumar Sharma",
    title: "Mechanistic cues driving the formation of domes in multi-layered skin epithelia"
  },
  {
    id: 2,
    author: "Effie Tsichlia",
    title: "Hypoxia-Responsive Extracellular Vesicles Orchestrate Angiogenic Niches in a Small-Cell-Lung-Cancer-on-a-Chip Model"
  },
  {
    id: 3,
    author: "Elena Honscheid",
    title: "Keratin Network Defects: A Gateway to Lysosomal Dysfunction?"
  },
  {
    id: 4,
    author: "Felix Reul",
    title: "Photodegradable Hydrogels for On-Demand Modeling of Age-Related Spatiotemporal ECM Deformation"
  },
  {
    id: 5,
    author: "Hannah Kubiza",
    title: "Substrate stiffness affects maturation and beating direction of airway epithelium possibly via planar cell polarity signaling"
  },
  {
    id: 6,
    author: "Henriette Jopp",
    title: "Kinase activity profiling of keratinocytes in response to monolayer compression"
  },
  {
    id: 7,
    author: "Liubov Imaylova",
    title: "Development of a soft and adhesive microelectrode array to monitor endometrial receptivity"
  },
  {
    id: 8,
    author: "Maciej Weroniczak-Ballod",
    title: "Refinement of collagen properties for maintaining mechanobiological relevance of rete ridges in biofabricated skin"
  },
  {
    id: 9,
    author: "Madhura Ramani",
    title: "Density-dependent stiffness modulates cellular deformation in MDCK monolayers"
  },
  {
    id: 10,
    author: "Marco Buzio",
    title: "3D micropatterning of PEDOT:PSS/Gelatin conductive hydrogels via two-photon lithography for soft bioelectronics"
  },
  {
    id: 11,
    author: "Marlene Menke",
    title: "Towards a Personalized Chemotherapy-Induced Peripheral Neuropathy Model using patient stem cell-derived neurons"
  },
  {
    id: 12,
    author: "Narmin Abasova",
    title: "Solid shear, no fear: resilience response of epithelial tissue"
  },
  {
    id: 13,
    author: "Pinar Keskin Oduncu",
    title: "Directing the differentiation of iPSCs toward mesenchymal stromal cells through co-culture approaches"
  },
  {
    id: 14,
    author: "Vera Nischalke",
    title: "UV-Micropatterning for high-throughput generation of embryoid bodies"
  },
  {
    id: 15,
    author: "Veronica Donde",
    title: "Morphological alterations in hiPSC-derived sensory neurons from a Nav1.7-linked congenital insensitivity to pain patient"
  },
  {
    id: 16,
    author: "Werner W. Franke",
    title: "How a novel category of cell junctions supports contraction of smooth muscle cell bundles"
  }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPosters, setShowPosters] = useState(false);

  return (
    <div className="landing-page">

      {/* HERO */}
      {/* <header className="header">
        <h1 className="title">Mechanobiology of Tissues</h1>
        <p className="subtitle">
          April 15–17, 2026 | Max-Planck-Zentrum für Physik und Medizin
        </p>
        <p className="hero-description">
          A meeting to bring together the mechanobiology communities of Aachen and Erlangen.
        </p>
      </header> */}

      <header className="header">
        <div className="hero-image-wrapper">
          <Image
            src="/headline.png" // your generated title image
            alt="Mechanobiology of Tissues"
            fill
            className="hero-image"
            priority
          />
        </div>
      </header>

      {/* MAIN GRID */}
      <div className="content-grid">

        {/* ABOUT SECTION */}
        <section className="section">
          <h2 className="section-title">About the Meeting</h2>

          <p>
            <strong>Mechanobiology</strong> studies how physical forces and mechanical
            properties influence biological systems across multiple scales,
            from individual cells to complex tissues. Understanding these
            interactions is essential for advancing knowledge in
            developmental biology, tissue engineering, and biomedical
            physics.
          </p>

          {/* <p>
            The conference <strong>Mechanobiology of Tissues</strong> brings together researchers from physics, biology and engineering to understand how mechanical principles shape cellular and tissue behavior. 
          </p>

          <p>
            Participants will have the opportunity to present their work,
            discuss emerging research directions, and establish connections
            across disciplines.
          </p> */}
        </section>

        {/* PROGRAM SECTION */}
        <section className="section">
          <h2 className="section-title">Dates & Location</h2>

          <ul className="list">
            <li><strong>Dates: </strong>April 15 – April 17, 2026</li>
            <li><strong>Location: </strong>Max-Planck-Zentrum für Physik und Medizin</li>
            <li><strong>Address: </strong>Kussmaulallee 2, 91054 Erlangen</li>
          </ul>

          {/* <p>
            The meeting will include invited talks, student presentations,
            and a poster session designed to foster discussion and
            collaboration among participants.
          </p> */}
          {/* MAP */}
          <div className="map-container">
            <img
              src="/map.png"
              alt="Conference location map"
              className="map-thumbnail"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* <h2 className="section-title">Program Highlights</h2>

          <h3></h3>
          <ul className="list">
            <li>Invited lectures from leading researchers</li>
            <li>Student talks selected from submitted abstracts</li>
            <li>Poster session and networking discussions</li>
            <li>Informal scientific discussions and collaboration opportunities</li>
          </ul> */}
        </section>

        {isOpen && (
        <div className="map-modal" onClick={() => setIsOpen(false)}>
          <img
            src="/map.png"
            alt="Map enlarged"
            className="map-full"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking image
          />
        </div>
      )}

        {/* ABSTRACT SUBMISSION */}
        <section className="section">
          <h2 className="section-title">Abstract Submission</h2>

          <p>
            Selected young investigators and students will present their research in 10 minute oral presentations. Others will have the opportunity to show their work in a poster session.
          </p>

          {/* <ul className="list">
            <li>Available talk slots: 12</li>
            <li>Duration: <strong>15 minutes</strong></li>
          </ul> */}

          {/* <p>
            If you would like to present your work, please submit your
            abstract through the submission form below.
          </p> */}

          {/* <a
            className="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC-BzqCK6JPmVC_ZrRES_g9Hp9WPT9YuYxZ89TpSSsh-IELg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Abstract
          </a>*/}

          <p>
            Deadline: <strong>March 29, 2026</strong>
          </p>
        </section>

        {/* POSTER SESSION */}
        <section className="section">
          <h2 className="section-title">Poster Session</h2>

          <p>
            Poster session will be held on April 16th where all young investigators will have the opportunity to present their work.
          </p>

          <ul className="list">
            <li>Format: A0, portrait</li>
          </ul>

          {/* <a
            className="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSee-SRUGLevHPfgP_kkTxiZTPeuEI83dMDtUso_VF9oXCw4DQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Title
          </a> */}

          <p>
            Deadline: <strong>March 29, 2026</strong>
          </p>
        </section>

        {/* SPEAKERS */}
        <section className="section">
          <h2 className="section-title">Invited Speakers</h2>

          <ul className="list">
            <li>Prof. Dr. Felix B. Engel</li>
            <li>Prof. Dr. Ben Fabry</li>
            <li>Prof. Dr. Kristian Franze</li>
            <li>Dr. Sara Kaliman</li>
            <li>Dr. Jona Kayser</li>
            <li>Dr. Rocio López-Posadas</li>
            <li>Dr. Jacopo Di Russo</li>
          </ul>
        </section>

        {/* ORGANISERS */}
        <section className="section">
          <h2 className="section-title">Organisers</h2>

          <ul className="list">
            <li>Madhura Ramani Dhatchayani</li>
          </ul>

          <p className="support-text">With the support of:</p>

          <div className="logos">
            {/* EAM + text */}
            <div className="logo-item">
              <img src="/eam.jpg" alt="EAM logo" className="logo" />
              <p className="logo-caption">(Ina Viebach)</p>
            </div>

            {/* ME3T logo */}
            <div className="logo-item">
              <img src="/me3t.png" alt="ME3T logo" className="logo" />
            </div>
          </div>
        </section>
          
      </div>

      <section className="program-wrapper">
        <h2 className="program-main-title">Detailed Program</h2>

        {program.map((day, i) => (
          <div key={i} className="program-day">

            <h3 className="program-day-title">{day.day}</h3>

            <div className="program-table">

              {day.items.map((item, j) => (
                <div key={j} className={`program-row ${item.type}`}>

                  <div className="program-time">{item.time}</div>

                  <div className="program-details">

                    {item.type === "invited" && (
                      <>
                        <span className="talk-type invited">Invited talk</span>
                        <span className="talk-speaker">{item.speaker}</span>
                        <span className="talk-title">{item.title}</span>
                      </>
                    )}

                    {item.type === "student" && (
                      <>
                        <span className="talk-type student">Contributed talk</span>
                        <span className="talk-speaker">{item.speaker}</span>
                        <span className="talk-title">{item.title}</span>
                      </>
                    )}

                    {(item.type === "break" ||
                      item.type === "highlight" ||
                      item.type === "event") && (
                      <span className="program-special">
                          {item.title} 
                          {item.title === "Poster session & lunch" && (
                          <div className="poster-inline-wrapper">

                            <button
                              className="poster-toggle small"
                              onClick={() => setShowPosters(!showPosters)}
                            >
                              {showPosters ? "Hide posters" : "Show posters"}
                            </button>

                            {showPosters && (
                              <div className="poster-inline-list">
                                {posters.map((poster) => (
                                  <div key={poster.id} className="poster-inline-item">
                                    <span className="poster-inline-number">{poster.id}.</span>
                                    <div>
                                      <span className="poster-inline-author">{poster.author}</span>
                                      <span className="poster-inline-title">{poster.title}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                          </div>
                          )}
                        </span>
                    )}
                  </div>



                </div>
              ))}

            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Mechanobiology of Tissues Conference</p>
      </footer>

    </div>
  );
}