import React from "react";
import Resume from "/src/Components/Resume";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Header = () => {

  function handleDownloadCV() {
    const input = document.getElementById("pdf-content");
    if (!input) {
      alert("Browser error! Please refresh the page and try again.");
      return;
    }
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Mawande JohnPaul CV.pdf');
      alert("You have downloaded my CV as a pdf.");
    }).catch((err) => {
      alert("Failed to generate PDF: " + err);
    });
  }

    return (
      <header>
        <div className="nav-bar">
          <a className="nav-tab" href="#me">Me</a>
          <a className="nav-tab" href="#services">Services</a>
          <a className="nav-tab" href="#projects">Projects</a>
          <a className="nav-tab" href="#reasons">Why me?</a>
        </div>
        <button className="resume-button" onClick={handleDownloadCV}>Resume</button>
        <div id="pdf-content" style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <Resume />
        </div>
      </header>
    );
  }

export default Header;
