import React from 'react'
import { Helmet } from 'react-helmet-async'

interface MetaTagsProps {
  title?: string // Optional title
  description?: string // Optional description
  url?: string // Optional URL
  canonicalUrl?: string // Optional canonical URL
  ogImage?: string // Optional Open Graph image
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  url,
  canonicalUrl,
  ogImage,
}) => (
  <Helmet>
    {/* Meta Description */}
    <meta
      name='description'
      content={description}
    />

    {/* Canonical Link */}
    <link
      rel='canonical'
      href={canonicalUrl || url}
    />

    {/* Open Graph Tags */}
    <title>{title}</title>
    <meta
      name='description'
      content={description}
    />
    <meta
      property='og:title'
      content={title}
    />
    <meta
      property='og:description'
      content={description}
    />
    {/* Open Graph Tags  extra*/}
    <meta
      property='og:url'
      content={url}
    />
    {ogImage && (
      <meta
        property='og:image'
        content={ogImage}
      />
    )}

    {/* Optional Charset and Viewport */}
    <meta charSet='UTF-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0'
    />
  </Helmet>
)

export default MetaTags
