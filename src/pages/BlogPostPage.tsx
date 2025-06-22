import React from 'react';
import { useParams } from 'react-router-dom';
import DevisAssuranceAuto2025Post from './blog/DevisAssuranceAuto2025Post';
import RCProArtisansPost from './blog/RCProArtisansPost';
import GuideAssuranceAuto2025Post from './blog/GuideAssuranceAuto2025Post';
import GuideAssuranceHabitation2025 from './blog/GuideAssuranceHabitation2025';
import GuideAssuranceRCPro2025 from './blog/GuideAssuranceRCPro2025';
import GuideAssuranceVie2025 from './blog/GuideAssuranceVie2025';
import NotFoundPage from './NotFoundPage';

export default function BlogPostPage() {
  const { postSlug } = useParams();

  switch (postSlug) {
    case 'devis-assurance-auto-2025':
      return <DevisAssuranceAuto2025Post />;
    case 'rc-pro-artisans-commercants-guide':
      return <RCProArtisansPost />;
    case 'guide-complet-assurance-auto-2025':
      return <GuideAssuranceAuto2025Post />;
    case 'guide-assurance-habitation-2025':
      return <GuideAssuranceHabitation2025 />;
    case 'guide-assurance-rc-pro-2025':
      return <GuideAssuranceRCPro2025 />;
    case 'guide-assurance-vie-2025':
      return <GuideAssuranceVie2025 />;
    default:
      return <NotFoundPage />;
  }
}