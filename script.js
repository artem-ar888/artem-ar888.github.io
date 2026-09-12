document.getElementById('downloadPdf').addEventListener('click', () => {
  const element = document.body;

  const opt = {
    margin: 0.5,
    filename: 'portfolio-arafailov.pdf',
    image: { type: 'jpeg', quality: 0.9 }, // Настройки сжатия
    html2canvas: { scale: 1.5 }, // Масштаб
    jsPDF: { unit: 'in', format: 'a4' },
  };

  html2pdf().set(opt).from(element).save();
});
