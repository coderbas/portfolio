// src/app/(frontend)/portfolio/page.tsx
import React from 'react'
import { redirect } from 'next/navigation'

type Project = {
  id: string
  title: string
  slug: string
  description: string
  url?: string
  screenshot?: { url: string; alt?: string }
}

async function getProjects(): Promise<Project[]> {
  const res = await fetch('http://localhost:3000/api/projects')
  if (!res.ok) {
    console.error('Failed to fetch projects:', res.statusText)
    return []
  }
  const data = await res.json()
  return data.docs.map((p: any) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    description: p.description,
    url: p.url,
    screenshot: p.screenshot
      ? { url: p.screenshot.url, alt: p.screenshot.altText || p.title }
      : undefined,
  }))
}

export default async function PortfolioPage() {
  const projects = await getProjects()

  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>My Portfolio</h1>
      {projects.length === 0 && <p>No projects found.</p>}
      {projects.map((proj) => (
        <article key={proj.id} style={{ marginBottom: '2rem' }}>
          <h2>{proj.title}</h2>
          {proj.screenshot?.url && (
            <img
              src={proj.screenshot.url}
              alt={proj.screenshot.alt || proj.title}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
          <p>{proj.description}</p>
          {proj.url && (
            <p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          )}
        </article>
      ))}
    </main>
  )
}
