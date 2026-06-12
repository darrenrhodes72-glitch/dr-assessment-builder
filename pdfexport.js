async function generatePDF(){
const { jsPDF }=window.jspdf;
const pdf=new jsPDF();
pdf.text("DR Assessment Builder Professional",10,10);
pdf.text("Project: "+currentAssessment.project||"",10,20);
pdf.save("DR-RAMS.pdf");
}