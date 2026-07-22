// app/print/page.tsx — THE PRINT ROUTE. Composes all 10 profile pages in
// order and applies the fixed-page-size print stylesheet. This is the exact
// route scripts/generate-pdf.mjs navigates to and exports as a PDF.
import "../print.css";
import { IconSprite } from "@/components/profile/Icons";
import CoverPage from "@/components/profile/CoverPage";
import AboutPage from "@/components/profile/AboutPage";
import WhyUsPage from "@/components/profile/WhyUsPage";
import ServicesPage from "@/components/profile/ServicesPage";
import ProductsPage from "@/components/profile/ProductsPage";
import CoveragePage from "@/components/profile/CoveragePage";
import BrandsPage from "@/components/profile/BrandsPage";
import LocationsPage from "@/components/profile/LocationsPage";
import FaqPage from "@/components/profile/FaqPage";
import ContactPage from "@/components/profile/ContactPage";

export default function PrintPage() {
  return (
    <>
      <IconSprite />
      <CoverPage />
      <AboutPage />
      <WhyUsPage />
      <ServicesPage />
      <ProductsPage />
      <CoveragePage />
      <BrandsPage />
      <LocationsPage />
      <FaqPage />
      <ContactPage />
    </>
  );
}
