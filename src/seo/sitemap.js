import { SitemapStream, streamToPromise } from 'sitemap'

// Function to fetch products from your API
async function fetchAllProducts() {
  const tmdbAPI = '711ff86aba647821e529c801d4ff3403'

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPI}&include_adult=true`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }
  return await response.json()
}

export default async function handler(req, res) {
  try {
    const products = await fetchAllProducts() // Fetch product data

    // Initialize sitemap stream
    const sitemapStream = new SitemapStream({
      //hostname: 'https://shop-swart-phi.vercel.app/',
      hostname: 'https:/localhost/',
    })

    // Add static URLs
    sitemapStream.write({
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
    })
    sitemapStream.write({
      url: '/cart',
      changefreq: 'monthly',
      priority: 0.7,
    })

    // Add product pages dynamically to the sitemap
    products.forEach((product) => {
      sitemapStream.write({
        url: `/${product.id}`, // Assuming each product has an 'id'
        changefreq: 'weekly', // Adjust as needed
        priority: 0.8, // Adjust priority if needed
      })
    })

    sitemapStream.end()

    // Convert the stream to a string and send it as a response
    const sitemapOutput = await streamToPromise(sitemapStream).then((data) =>
      data.toString()
    )

    // Send the sitemap as XML
    res.setHeader('Content-Type', 'application/xml')
    res.write(sitemapOutput)
    res.end()
  } catch (error) {
    res.status(500).end('Error generating sitemap')
  }
}
