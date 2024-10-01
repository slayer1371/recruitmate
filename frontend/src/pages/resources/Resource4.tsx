import NavBar from "../../components/NavBar";
import PDFViewer from "../../components/pdfviewer";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// function Resource4(){
//     const pdfFile = "src/data/Recruiting Standards-5d7a188.pdf";
//     return <div>
//             <NavBar />
//             <PDFViewer pdfFile={pdfFile} />
//         </div>
// }
// export default Resource4;

import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Resource4() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="src/data/Recruiting Standards-5d7a188.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Resource4;