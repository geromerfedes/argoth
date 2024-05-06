import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from '../layout/Layout';
import { Home, NotFound } from "../views";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main id="main_app sky-gym">
          <Routes>
            {/* Views */}
            <Route path="/" element={<Home />} />
            {/* Not Found */}
            <Route path="*" element={<NotFound /> } />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes;