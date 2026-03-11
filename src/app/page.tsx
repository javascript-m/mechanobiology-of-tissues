// src/app/page.tsx
import Image from "next/image";
import "./styles.css";

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
      { time: "09:00", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "09:30", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "10:00", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "10:30", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "11:00 – 11:30", type: "break", title: "Coffee break" },
      { time: "11:30", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "12:00", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "12:30", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "13:00", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "13:30 – 14:00", type: "break", title: "Coffee break / mini lunch" },
      { time: "14:00 – 16:00", type: "highlight", title: "Poster session & lunch" },
      { time: "16:00 – 18:00", type: "highlight", title: "Social activities & city visit" },
      { time: "18:00", type: "highlight", title: "Conference dinner" }
    ]
  },

  {
    day: "April 17, Friday",
    items: [
      { time: "09:00", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "09:30", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "10:30 – 10:45", type: "break", title: "Coffee break" },
      { time: "10:45", type: "invited", speaker: "TBA", title: "Title TBA" },
      { time: "11:15", type: "student", speaker: "TBA", title: "Title TBA" },
      { time: "12:15", type: "highlight", title: "Wrap-up and goodbye" }
    ]
  }
];

export default function Home() {
  return (
    <div className="landing-page">

      {/* HERO */}
      <header className="header">
        <h1 className="title">Mechanobiology of Tissues</h1>
        <p className="subtitle">
          April 15–17, 2026 | Max-Planck-Zentrum für Physik und Medizin
        </p>
        {/* <p className="hero-description">
          A conference bringing together researchers from physics, biology,
          engineering, and quantitative sciences to explore how mechanical
          forces shape cellular and tissue behavior.
        </p> */}
      </header>

      {/* MAIN GRID */}
      <div className="content-grid">

        {/* ABOUT SECTION */}
        <section className="section">
          <h2 className="section-title">About the Conference</h2>

          <p>
            <strong>Mechanobiology</strong> studies how physical forces and mechanical
            properties influence biological systems across multiple scales,
            from individual cells to complex tissues. Understanding these
            interactions is essential for advancing knowledge in
            developmental biology, tissue engineering, and biomedical
            physics.
          </p>

          <p>
            The conference <strong>Mechanobiology of Tissues</strong> brings together researchers from physics, biology and engineering to understand how mechanical principles shape cellular and tissue behavior. 
          </p>

          <p>
            Participants will have the opportunity to present their work,
            discuss emerging research directions, and establish connections
            across disciplines.
          </p>
        </section>

        {/* PROGRAM SECTION */}
        <section className="section">
          <h2 className="section-title">Dates & Location</h2>

          <ul className="list">
            <li><strong>Dates: </strong>April 15 – April 17, 2026</li>
            <li><strong>Location: </strong>Max-Planck-Zentrum für Physik und Medizin</li>
          </ul>

          <p>
            The meeting will include invited talks, student presentations,
            and a poster session designed to foster discussion and
            collaboration among participants.
          </p>

          <h2 className="section-title">Program Highlights</h2>

          <h3></h3>
          <ul className="list">
            <li>Invited lectures from leading researchers</li>
            <li>Student talks selected from submitted abstracts</li>
            <li>Poster session and networking discussions</li>
            <li>Informal scientific discussions and collaboration opportunities</li>
          </ul>
        </section>

        {/* ABSTRACT SUBMISSION */}
        <section className="section">
          <h2 className="section-title">Abstract Submission</h2>

          <p>
            We invite young investigators and students to submit abstracts
            for oral presentations. Selected participants will present
            their research during dedicated student talk sessions.
          </p>

          <ul className="list">
            <li>Available talk slots: 12</li>
            <li>Duration: <strong>15 minutes</strong></li>
          </ul>

          <p>
            If you would like to present your work, please submit your
            abstract through the submission form below.
          </p>

          <a
            className="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC-BzqCK6JPmVC_ZrRES_g9Hp9WPT9YuYxZ89TpSSsh-IELg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Abstract
          </a>

          <p>
            Submission deadline: <strong>March 23, 2026</strong>
          </p>
        </section>

        {/* POSTER SESSION */}
        <section className="section">
          <h2 className="section-title">Poster Session</h2>

          <p>
            In addition to oral presentations, the conference will host
            a <strong>poster session</strong> where students and researchers can present
            their work and engage in scientific discussions.
          </p>

          <ul className="list">
            <li>Format: A0, portrait</li>
          </ul>

          <p>
            The poster session provides an opportunity for participants
            to receive feedback, exchange ideas, and explore potential
            collaborations in a relaxed and interactive environment.
          </p>

          <p>
            Titles deadline: <strong>March 26, 2026</strong>
          </p>
        </section>

        {/* SPEAKERS and ORGANISERS */}
        <section className="section">
          <h2 className="section-title">Invited Speakers</h2>

          <ul className="list">
            <li>Prof. Dr. Kristian Franze</li>
            <li>Dr. Sara Kaliman</li>
            <li>Dr. Jona Kayser</li>
          </ul>

          <h2 className="section-title">Organisers</h2>
          <ul className="list">
            <li>Prof. Dr. Ana Sunčana Smith</li>
          </ul>
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
                        <span className="talk-type student">Student/Postdoc talk</span>
                        <span className="talk-speaker">{item.speaker}</span>
                        <span className="talk-title">{item.title}</span>
                      </>
                    )}

                    {(item.type === "break" ||
                      item.type === "highlight" ||
                      item.type === "event") && (
                      <span className="program-special">{item.title}</span>
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