import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import resumeImage from 'figma:asset/ed81f36cb5597e971481da336cac929b301679e5.png';
import { jsPDF } from 'jspdf';

export function ResumePage() {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create PDF from image
    const createPDF = async () => {
      try {
        const img = new Image();
        img.src = resumeImage;
        
        img.onload = () => {
          // Create PDF with letter size (8.5 x 11 inches)
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: 'letter'
          });

          // Calculate dimensions to fit the page
          const pageWidth = 8.5;
          const pageHeight = 11;
          const imgWidth = img.width;
          const imgHeight = img.height;
          const ratio = imgWidth / imgHeight;
          
          let width = pageWidth;
          let height = pageWidth / ratio;
          
          // If height exceeds page height, scale down
          if (height > pageHeight) {
            height = pageHeight;
            width = pageHeight * ratio;
          }

          // Center the image on the page
          const x = (pageWidth - width) / 2;
          const y = (pageHeight - height) / 2;

          pdf.addImage(resumeImage, 'PNG', x, y, width, height);
          
          // Create blob URL for viewing
          const blob = pdf.output('blob');
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
          setIsLoading(false);
        };
      } catch (error) {
        console.error('Error creating PDF:', error);
        setIsLoading(false);
      }
    };

    createPDF();

    // Cleanup
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  const handleDownload = async () => {
    const img = new Image();
    img.src = resumeImage;
    
    img.onload = () => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'letter'
      });

      const pageWidth = 8.5;
      const pageHeight = 11;
      const imgWidth = img.width;
      const imgHeight = img.height;
      const ratio = imgWidth / imgHeight;
      
      let width = pageWidth;
      let height = pageWidth / ratio;
      
      if (height > pageHeight) {
        height = pageHeight;
        width = pageHeight * ratio;
      }

      const x = (pageWidth - width) / 2;
      const y = (pageHeight - height) / 2;

      pdf.addImage(resumeImage, 'PNG', x, y, width, height);
      pdf.save('Trinity_Esquivel_Resume.pdf');
    };
  };

  return (
    <div className="min-h-screen bg-[#E5DDD5] px-4 py-8 md:px-12 md:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[#7A1A1A] hover:text-[#7A1A1A]/60 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Back to Portfolio</span>
        </Link>

        {/* Header with download button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl tracking-tight text-[#7A1A1A]">RESUME</h1>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A1A1A] text-white hover:bg-[#7A1A1A]/80 transition-colors rounded"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
        </div>

        {/* PDF Viewer */}
        {isLoading ? (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-[#7A1A1A]">Loading resume...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={pdfUrl}
              className="w-full h-[calc(100vh-250px)] min-h-[800px]"
              title="Trinity Esquivel Resume"
            />
          </div>
        )}
      </div>
    </div>
  );
}