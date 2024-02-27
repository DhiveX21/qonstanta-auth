import React, { useState } from "react";
import jsPDF from "jspdf";

const useCertificate = () => {
  const generateLandscapeCertificate = async (
    templateRef: any,
    filename: string
  ) => {
    const content = templateRef.current ?? templateRef;

    if (!content) {
      return;
    }
    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    pdf.setPage(1);
    pdf.addFont("/fonts/Nunito-Bold.ttf", "nunito", "bold");
    pdf.addFont("/fonts/Nunito-ExtraBold.ttf", "nunito", "extraBold");
    pdf.addFont("/fonts/Nunito-ExtraLight.ttf", "nunito", "extraLight");
    pdf.addFont("/fonts/Nunito-Light.ttf", "nunito", "light");
    pdf.addFont("/fonts/Nunito-Medium.ttf", "nunito", "medium");
    pdf.addFont("/fonts/Nunito-Regular.ttf", "nunito", "regular");
    pdf.addFont("/fonts/Nunito-SemiBold.ttf", "nunito", "semiBold");
    pdf.addFont("/fonts/Nunito-Black.ttf", "nunito", "black");
    pdf.html(content, {
      callback: function (doc) {
        // Save the PDF
        doc.save(`${filename}.pdf`);
      },
      x: 0,
      y: 0,
      width: 296.4, //target width in the PDF document
      windowWidth: 1121, //window width in CSS pixels
    });
  };

  return {
    generateLandscapeCertificate,
  };
};

export default useCertificate;
