import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

export default function Page() {
  return (
    <div>
      <Welcome />
      <Faq />
      <Footer />
    </div>
  );
}