import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Aktifkan worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  pdfFile: string;
};

function PDFViewer(props: Props) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={props.pdfFile}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFViewer;
