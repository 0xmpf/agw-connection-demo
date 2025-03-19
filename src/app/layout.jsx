import AbstractProvider from '../components/AbstractProvider';
import './globals.css';

export const metadata = {
  title: 'Abstract Wallet Demo',
  description: 'Connect to Abstract Mainnet via AGW',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AbstractProvider>
          {children}
        </AbstractProvider>
      </body>
    </html>
  );
}