import type { APIRoute } from 'astro';
import { getPublishedPosts, formatDate } from '../lib/posts';

/** Limpia el Markdown para quedarnos con texto plano indexable. */
function cleanBody(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 5000);
}

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();

  const data = posts.map((post) => ({
    slug: post.id,
    title: post.data.title,
    description: post.data.description ?? '',
    tags: post.data.tags,
    dateLabel: formatDate(post.data.date),
    body: cleanBody(post.body ?? ''),
  }));

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
