import { useEffect } from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function PDF() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1)
    }

    useEffect(()=>{
        setPageNumber(1)
    }, [])

  return (
    <>
        <div className='data'>
        <div className='card'>
          <img src='https://scontent.ffor46-1.fna.fbcdn.net/v/t39.30808-6/237580619_3092465117678737_5187426180627265322_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3Ip3-5RoLt0AX9JWv04&_nc_ht=scontent.ffor46-1.fna&oh=00_AT80plK5XJKfDuZm5x0t5uDc2-sbE0qdVNmRw3iMEYjDLQ&oe=633415B4' className='imgCard' alt='#' />
          <div className='divDesc'>
            <h4>Mariano António Vunge</h4>
            <i>Estudante de Engenharia da Computação</i>
            <span>Desenvolvedor FullStrack JavaScript</span>
          </div>
        </div>
      </div> 
      <div className='center'>
        <Document file="/pdfFile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page height={600}  pageNumber={pageNumber} />
            {/* {URL.createObjectURL(pageNumber) numPages={numPages}} */}
        </Document>
        <p>
            Page {pageNumber} of {numPages}
        </p>
      </div>
        </>
  )
}
