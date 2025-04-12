import './globals.css';

export const metadata = {
  title: 'Lovas Energy Services',
  description: 'Comprehensive burner management and combustion control solutions for the oil and gas industry',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
} 