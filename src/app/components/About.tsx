// src/app/components/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

// src/app/components/About.tsx

// … other imports …
import Timeline from './Timeline';

export default function About() {
  // Build an array of timeline items (education + experience)
  const timelineItems = [
    {
      date: '2021 – Present',
      title: 'B.Sc. in Computer Science',
      subtitle: 'University of Wollongong in Dubai',
      description:
        "Pursuing a Bachelor's degree in CS with a focus on cybersecurity, data structures, and software architecture. "
      + "Expected graduation: Spring 2025.",
    },
    {
      date: 'Jan 2025 – Mar 2025',
      title: 'Security Risk Assessment Project',
      company: 'Dubai Veterinary Clinic',
      description: `• Conducted a full security risk assessment of clinic operations, facilities, and digital systems under Dubai Municipality regulations.  
    • Identified and prioritized high-risk threats (data breaches, cyberattacks, compliance violations, pharmaceutical theft, equipment failures).  
    • Mapped potential adversaries (cybercriminals, insider threats, pharmaceutical thieves, competitors, activist groups) and evaluated their motives.  
    • Recommended and budgeted AED 150,000 for layered controls: physical security (surveillance, access controls), cybersecurity (firewalls, IDS/IPS, staff training), compliance measures, and incident response planning.`
    },
    {
      date: 'Jan 2023 – Present',
      title: 'Freelance Web Developer',
      subtitle: 'Self-Employed',
      description:
        'Designed and deployed Next.js + Tailwind CSS websites for local businesses, integrated Sanity CMS, optimized '
      + 'for SEO, and implemented responsive/mobile‐first layouts.',
    },
    {
      date: 'July 2022 – Sept 2022',
      title: 'AMS Integrated Solutions (Dubai, UAE)',
      subtitle: 'IT Intern',
      description:
        'Automated HR workflows and developed robust data migration scripts, completing 350+ hours of hands-on experience.',
    },
    {
      date: 'Jul 2025',
      title: 'CompTIA Security+ CE (In Progress)',
      subtitle: '',
      description:
        'Scheduled for July 2025 exam. Topics include risk management, cryptography, identity management, and network security.',
    },
  ];

  return (
    <section id="about" className="…">
      {/* … Portrait + Intro (unchanged) … */}

      {/* Replace the bullet lists with a full‐bleed Timeline */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading id="about">About Me</SectionHeading>

        {/* … Intro paragraph(s) … */}

        {/* Insert the timeline */}
        <Timeline items={timelineItems} />
      </motion.div>
    </section>
  );
}

