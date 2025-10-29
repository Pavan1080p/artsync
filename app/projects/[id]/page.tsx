'use client';

import { useParams } from 'next/navigation';
import ProjectDetailPage from '@/components/sections/projectdetailpage';

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id as string;

  return <ProjectDetailPage projectId={projectId} />;
}