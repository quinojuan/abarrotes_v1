import { jsPDF } from 'jspdf';

export const PDFGenerator = () => {
  const generatePDF = () => {
    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Agregar texto al documento
    doc.text('Hello world!', 10, 10);

    // Guardar el documento con un nombre de archivo
    doc.save('example.pdf');
  };

  return (
    <div>
      <h1>Generador de PDF</h1>
      <button onClick={generatePDF}>Generar PDF</button>
    </div>
  );
};