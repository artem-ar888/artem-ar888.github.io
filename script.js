document.getElementById('downloadPdf').addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;

  // Выбираем нужный блок (лучше обернуть весь контент в div id="resume-content")
  const element = document.body;

  // Превращаем элемент в картинку
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL('image/png');

  // Задаем параметры PDF (А4 формат)
  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  // Рассчитываем размеры картинки под лист А4
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  // Добавляем изображение в PDF
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

  // Автосохранение
  pdf.save('portfolio-arafailov.pdf');
});
