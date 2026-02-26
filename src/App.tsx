import { Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/site-layout";
import { NotFound } from "@/pages/not-found";
import { Home } from "@/pages/home";
import { About } from "@/pages/about";
import { Projects } from "@/pages/projects";
import { Speaking } from "@/pages/speaking";
import { Contact } from "@/pages/contact";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
