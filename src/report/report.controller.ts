import { Controller, Get, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  async generateReport(@Res() res: Response) {
    let date = new Date().toLocaleString();
    const html = `
      <html>
        <head>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { color: #336699; }
          </style>
        </head>
        <body>
          <div style="width: 100%">
            <img width="100px" height="100px" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/160895854/original/619327f7be8d830e8a997856c5a0381ef53f992c/brands-high-class-logo.jpg" alt=""/>
          </div>
          <h1>Loan Report</h1>
          <p>Customer: John Doe</p>
          <p>Date: ${date}</p>
          <table border="1px" cellspacing="0" cellpadding="5" width="100%">
            <tr><th>Date</th><th>Amount</th><th>Status</th></tr>
            <tr><td>2025-05-01</td><td>$1000</td><td>Paid</td></tr>
          </table>
        </body>
      </html>
    `;

    const pdf = await this.reportService.generatePdfFromHtml(html);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="report.pdf"',
      'Content-Length': pdf.length,
    });

    res.end(pdf);
  }

}
