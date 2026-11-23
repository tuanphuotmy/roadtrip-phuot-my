import type { RouteObject } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Home from '../pages/Home';
import TourDetail from '../pages/TourDetail';
import { TourList, CategoryPage } from '../pages/Tours';
import { Destinations, DestinationDetail, Blog, PostPage, Share } from '../pages/Content';
import { About, Agents, Contact, Legal, NotFound } from '../pages/Info';

// Đường dẫn cũ → mới (giữ SEO)
function LegacyDestination() {
  const { id = '' } = useParams();
  return <Navigate to={`/diem-den/${id}`} replace />;
}

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/tour', element: <TourList /> },
  { path: '/tour/:slug', element: <TourDetail /> },
  { path: '/loai-hinh/:slug', element: <CategoryPage group="loai-hinh" /> },
  { path: '/nhu-cau/:slug', element: <CategoryPage group="nhu-cau" /> },
  { path: '/quoc-gia/:slug', element: <CategoryPage group="quoc-gia" /> },
  { path: '/theo-mua/:slug', element: <CategoryPage group="theo-mua" /> },
  { path: '/diem-den', element: <Destinations /> },
  { path: '/diem-den/:slug', element: <DestinationDetail /> },
  { path: '/destination/:id', element: <LegacyDestination /> },
  { path: '/destinations', element: <Navigate to="/diem-den" replace /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <PostPage /> },
  { path: '/goc-chia-se', element: <Share /> },
  { path: '/ve-phuot-my', element: <About /> },
  { path: '/about', element: <Navigate to="/ve-phuot-my" replace /> },
  { path: '/dai-ly', element: <Agents /> },
  { path: '/lien-he', element: <Contact /> },
  { path: '/contact', element: <Navigate to="/lien-he" replace /> },
  { path: '/dieu-khoan-dich-vu', element: <Legal kind="terms" /> },
  { path: '/chinh-sach-bao-mat', element: <Legal kind="privacy" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
