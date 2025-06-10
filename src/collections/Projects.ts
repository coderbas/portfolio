// collections/Projects.ts
import { CollectionConfig } from 'payload';

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  access: {
    // for simplicity, allow anyone you’re logged in as “admin” to read/write.
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'title', // show `title` as the label in the admin UI
  },
  fields: [
    {
      name: 'title',
      label: 'Project Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        description: 'URL‐friendly slug (e.g. “my-awesome‐project”)',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'url',
      label: 'Project URL (live demo or GitHub link)',
      type: 'text',
    },
    {
      name: 'screenshot',
      label: 'Screenshot / Image',
      type: 'upload',
      relationTo: 'media',
    },
    // You can add any additional fields you want (tech stack, date, etc.)
  ],
};

export default Projects;
