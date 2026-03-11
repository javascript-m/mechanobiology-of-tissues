// src/app/page.tsx
import Image from "next/image";
import "./styles.css";

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
            The conference <strong>Mechanobiology Meets Physics</strong> 
            brings together researchers from physics, biology, engineering, and quantitative sciences to understand how mechanical principles shape cellular and tissue behavior. 
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
            <li><strong>Location: </strong>MPI for Physics and Medicine</li>
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
            Submission deadline: <strong>March 26, 2026</strong>
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

          <p>
            The poster session provides an opportunity for participants
            to receive feedback, exchange ideas, and explore potential
            collaborations in a relaxed and interactive environment.
          </p>
        </section>

        {/* SPEAKERS and ORGANISERS */}
        <section className="section">
          <h2 className="section-title">Invited Speakers</h2>

          <ul className="list">
            <li>Sara Kaliman</li>
            <li>Kristian Franze</li>
          </ul>

          <h2 className="section-title">Organisers</h2>
          <ul className="list">
            <li>Ana Sunčana Smith</li>
          </ul>
        </section>
          
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Mechanobiology of Tissues Conference</p>
      </footer>

    </div>
  );
}