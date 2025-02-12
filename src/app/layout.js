import Footer from "@/components/footer/Footer";
import "./globals.css";
import styles from "./page.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles["component-wrapper"]}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
