import React from "react";

const Resume = () => {

  return(
    <div id="pdf-content" style={{ width: '800px', padding: '40px', fontFamily: 'Inter, Arial, sans-serif', background: '#fff', color: '#222', boxShadow: '0 0 8px #ccc' }}>
      <h1 style={{ marginBottom: '0.2em', fontSize: '2.5em', fontWeight: 800 }}>John Doe</h1>
      <p style={{ margin: 0, fontSize: '1.1em' }}>Frontend Developer | johndoe@email.com | (555) 123-4567 | New York, NY</p>
      <hr style={{ margin: '1.2em 0' }} />
      <section style={{ marginBottom: '1.2em' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '0.3em' }}>Summary</h2>
        <p style={{ margin: 0 }}>Creative and detail-oriented Frontend Developer with 3+ years of experience building responsive web applications using React, JavaScript, and modern CSS. Passionate about UI/UX and delivering pixel-perfect solutions.</p>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '0.3em' }}>Skills</h2>
        <ul style={{ margin: 0, paddingLeft: '1.2em', columns: 2 }}>
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 &amp; CSS3</li>
          <li>TypeScript</li>
          <li>Redux</li>
          <li>Git &amp; GitHub</li>
          <li>Figma</li>
          <li>REST APIs</li>
        </ul>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '0.3em' }}>Experience</h2>
        <div>
          <strong>Frontend Developer</strong> — Acme Corp, New York, NY<br />
          <span style={{ fontSize: '0.95em', color: '#555' }}>Jun 2022 – Present</span>
          <ul style={{ margin: '0.2em 0 0.7em 1.2em' }}>
            <li>Developed and maintained 10+ React web apps for enterprise clients.</li>
            <li>Collaborated with designers to implement modern, accessible UIs.</li>
            <li>Optimized app performance, reducing load times by 30%.</li>
          </ul>
        </div>
        <div>
          <strong>Web Developer Intern</strong> — Beta Solutions, New York, NY<br />
          <span style={{ fontSize: '0.95em', color: '#555' }}>Jan 2021 – May 2022</span>
          <ul style={{ margin: '0.2em 0 0.7em 1.2em' }}>
            <li>Assisted in building landing pages and dashboards using React and Bootstrap.</li>
            <li>Wrote unit tests and improved code coverage by 20%.</li>
          </ul>
        </div>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h2 style={{ fontSize: '1.3em', marginBottom: '0.3em' }}>Education</h2>
        <div>
          <strong>B.Sc. in Computer Science</strong> — NYU, New York, NY<br />
          <span style={{ fontSize: '0.95em', color: '#555' }}>2017 – 2021</span>
        </div>
      </section>
      <section>
        <h2 style={{ fontSize: '1.3em', marginBottom: '0.3em' }}>Projects</h2>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          <li><strong>Portfolio Website:</strong> Personal site built with React and Vite, featuring project showcases and a blog.</li>
          <li><strong>Task Manager App:</strong> Full-stack MERN app for team productivity, with real-time updates and notifications.</li>
        </ul>
      </section>
    </div>
  )
}

export default Resume;
