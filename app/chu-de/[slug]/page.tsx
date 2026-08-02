import { notFound } from "next/navigation";
import { topics, getTopic } from "@/lib/topics";
import TopicDetailClient from "@/components/TopicDetailClient";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);
  if (!topic) notFound();

  return <TopicDetailClient topic={topic} />;
}
