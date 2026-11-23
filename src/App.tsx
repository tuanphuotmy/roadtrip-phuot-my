import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';
import { TourList, CategoryPage } from './pages/Tours';
import { Destinations, DestinationDetail, Blog, PostPage, Share } from './pages/Content';
import { About, Agents, Contact, Legal, NotFound } from './pages/Info';

// Đường dẫn cũ của site Readdy → đường dẫn mới (giữ SEO)
function LegacyDestination() {
  const { id = '' } = useParams();
  return <Navigate to={`/diem-den/${id}`} replace />;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<TourList />} />
        <Route path="/tour/:slug" element={<TourDetail />} />
        <Route path="/loai-hinh/:slug" element={<CategoryPage group="loai-hinh" />} />
        <Route path="/nhu-cau/:slug" element={<CategoryPage group="nhu-cau" />} />
        <Route path="/quoc-gia/:slug" element={<CategoryPage group="quoc-gia" />} />
        <Route path="/theo-mua/:slug" element={<CategoryPage group="theo-mua" />} />
        <Route path="/diem-den" element={<Destinations />} />
        <Route path="/diem-den/:slug" element={<DestinationDetail />} />
        <Route path="/destination/:id" element={<LegacyDestination />} />
        <Route path="/destinations" element={<Navigate to="/diem-den" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/goc-chia-se" element={<Share />} />
        <Route path="/ve-phuot-my" element={<About />} />
        <Route path="/about" element={<Navigate to="/ve-phuot-my" replace />} />
        <Route path="/dai-ly" element={<Agents />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/contact" element={<Navigate to="/lien-he" replace />} />
        <Route path="/dieu-khoan-dich-vu" element={<Legal kind="terms" />} />
        <Route path="/chinh-sach-bao-mat" element={<Legal kind="privacy" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
