import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'
//import fetch from 'node-fetch' // Ensure you have node-fetch installed (npm install node-fetch)

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

async function generateSitemap() {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTFmZjg2YWJhNjQ3ODIxZTUyOWM4MDFkNGZmMzQwMyIsIm5iZiI6MTcyOTEwNjY3OC4wNzM0NCwic3ViIjoiNjcwN2E2ZTY2NzE4MDEyZmMyMzNhYzY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ESFEzMS3wU3VUN0G3fdJRFogjC3eQmsw49xGA9J59sQ',
      },
    }

    const response = await fetch(
      'https://api.themoviedb.org/3/movie/changes?page=1',
      options
    )

    const productData = await response.json() // Assuming this returns an array of products

    // Initialize sitemap stream
    const sitemapStream = new SitemapStream({
      hostname: 'https://localhost/', // Replace with your actual hostname
    })

    // Add static URLs
    sitemapStream.write({
      url: '/',
      changefreq: 'monthly',
      priority: 1.0,
    })
    sitemapStream.write({
      url: '/books',
      changefreq: 'daily',
      priority: 0.7,
    })
    console.log(productData)
    // Add product pages dynamically to the sitemap
    productData.results.forEach((product) => {
      sitemapStream.write({
        url: `/${product.id}`, // Assuming each product has an 'id'
        changefreq: 'weekly', // Adjust as needed
        priority: 0.8, // Adjust priority if needed
      })
    })

    sitemapStream.end()

    // Convert the stream to a string and write to a file
    const sitemapOutput = await streamToPromise(sitemapStream).then((data) =>
      data.toString()
    )

    // Write the sitemap to an XML file
    const writeStream = createWriteStream('sitemap.xml')
    writeStream.write(sitemapOutput)
    writeStream.end()

    console.log('Sitemap generated and saved as sitemap.xml')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

// Run the function to generate the sitemap
generateSitemap()

// import { SitemapStream, streamToPromise } from 'sitemap'

// // Function to fetch products from your API
// async function fetchAllProducts() {
//   const tmdbAPI = '711ff86aba647821e529c801d4ff3403'

//   const response = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPI}&include_adult=true`
//   )
//   if (!response.ok) {
//     throw new Error('Failed to fetch products')
//   }
//   return await response.json()
// }

// export default async function handler(req, res) {
//   try {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTFmZjg2YWJhNjQ3ODIxZTUyOWM4MDFkNGZmMzQwMyIsIm5iZiI6MTcyOTEwNjY3OC4wNzM0NCwic3ViIjoiNjcwN2E2ZTY2NzE4MDEyZmMyMzNhYzY1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ESFEzMS3wU3VUN0G3fdJRFogjC3eQmsw49xGA9J59sQ',
//       },
//     }

//     response = await fetch(
//       'https://api.themoviedb.org/3/movie/changes?page=1',
//       options
//     )
//     // // .then((response) => response.json())
//     // // .then((response) => console.log(response))
//     // // .catch((err) => console.error(err))
//     // if (!response!.ok) {
//     //   throw new Error('Failed to fetch data')
//     // }
//     // const data = await response.json() //meh may it be

//     // Initialize sitemap stream
//     const sitemapStream = new SitemapStream({
//       hostname: 'https:/localhost/',
//     })

//     // Add static URLs
//     sitemapStream.write({
//       url: '/',
//       changefreq: 'monthly',
//       priority: 1.0,
//     })
//     sitemapStream.write({
//       url: '/books',
//       changefreq: 'daily',
//       priority: 0.7,
//     })

//     // Add product pages dynamically to the sitemap
//     response.forEach((product) => {
//       sitemapStream.write({
//         url: `/${product.id}`, // Assuming each product has an 'id'
//         changefreq: 'weekly', // Adjust as needed
//         priority: 0.8, // Adjust priority if needed
//       })
//     })

//     sitemapStream.end()

//     // Convert the stream to a string and send it as a response
//     const sitemapOutput = await streamToPromise(sitemapStream).then((data) =>
//       data.toString()
//     )

//     // Send the sitemap as XML
//     res.setHeader('Content-Type', 'application/xml')
//     res.write(sitemapOutput)
//     res.end()
//   } catch (error) {
//     res.status(500).end('Error generating sitemap')
//   }
// }
// handler()
