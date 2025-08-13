# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js blog application called "apimagic" built with TypeScript, focused on artificial intelligence and APIs content. It's based on the Tailwind Next.js Starter Blog template with customizations for AI/API-focused content.

## Development Commands

### Core Development

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle and run post-build scripts
- `npm run serve` - Start production server
- `npm run start` - Start development server (alternative to dev)

### Code Quality

- `npm run lint` - Run ESLint with auto-fix on pages, app, components, lib, layouts, and scripts
- `npm run prepare` - Setup Husky git hooks

### Analysis

- `npm run analyze` - Build with bundle analyzer enabled

## Architecture

### Framework & Core Technologies

- **Next.js 15.2.4** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS 4.0** for styling
- **Contentlayer2** for content management (MDX processing)
- **React 19** with Server Components

### Content Management

- Blog posts stored in `data/blog/` as MDX files
- Authors in `data/authors/` as MDX files
- Content processed through Contentlayer with extensive MDX plugin support
- Automatic tag counting and search index generation

### Key Directories

- `app/` - Next.js app router pages and layouts
- `components/` - Reusable React components
- `data/` - Content (blog posts, authors, site metadata)
- `layouts/` - Blog post layout templates (PostLayout, PostSimple, PostBanner)
- `public/static/` - Static assets (images, favicons)
- `css/` - Global styles and Tailwind configuration

### Content Processing Features

- Reading time calculation
- Table of contents generation
- Math typesetting via KaTeX
- Code syntax highlighting with Prism
- Citation support
- GitHub-style alerts
- Image optimization

### Site Configuration

- Main config in `data/siteMetadata.js`
- Site titled "Artificial Intelligence & APIs" by author "Jai"
- Domain: apimagic.ai
- Search via kbar
- Comments via Giscus

### TypeScript Configuration

- Path aliases configured: `@/components/*`, `@/data/*`, `@/layouts/*`, `@/css/*`
- Contentlayer integration for generated content types
- Pliny library integration

### Styling System

- Tailwind CSS with custom configuration
- Space Grotesk font as primary typeface
- Dark/light theme support
- Responsive design patterns

### Content Security & Deployment

- Comprehensive CSP headers configured in next.config.js
- Support for static export with EXPORT=1 UNOPTIMIZED=1
- Vercel deployment ready
- GitHub Pages workflow available

### Development Workflow

- Husky git hooks with lint-staged for pre-commit linting
- ESLint + Prettier code formatting
- Hot reloading for development
- Bundle analysis capabilities

## Content Creation

### Blog Posts

- Create MDX files in `data/blog/`
- Required frontmatter: title, date
- Optional: tags, summary, authors, layout, images, draft status
- Support for nested routing (folders create URL paths)

### Supported Layouts

- `PostLayout` - Default two-column with metadata
- `PostSimple` - Simplified single-column
- `PostBanner` - Features banner image

When working with this codebase, leverage the existing component patterns, use the configured path aliases, and follow the established content structure for blog posts and authors.
