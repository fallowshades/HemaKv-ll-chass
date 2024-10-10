type Link = {
  href: string
  label: string
}

// Update links to match router paths
export const links: Link[] = [
  { href: '/', label: 'Home' },
  { href: '/books', label: 'Books' },
]
