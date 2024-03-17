import Navbar from "./components/navbar/Navbar";
import styles from "./layout.module.css"
import "./globals.css";

export const metadata = {
  title: "HealthTrack",
  description: "Your all in one fitness platform",
};

export default function RootLayout({ children }) {
  // children in this context refers to the active page
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
