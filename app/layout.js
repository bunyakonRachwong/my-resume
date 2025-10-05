import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/about';
import SkillPage from '../components/skill';
import EducationPage from '../components/Education';


import "./globals.css";



export const metadata = {
  title: "My Resume",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
