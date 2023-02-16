import { previewData} from "next/headers"
import PreviewSuspense from "components/PreviewSuspense"
import {DocumentsCount} from 'components/DocumentsCount'
import PreviewDocumentsCount from 'components/PreviewDocumentsCount'
import PreviewBlogList from "components/PreviewBlogList"
import { groq } from "next-sanity"
import {client} from 'lib/sanity.client'
import BlogList from "components/BlogList"
import cache from 'react'

//const clientFetch = cache(client.fetch.bind(client))


// Getting syntax error with current groq query, when we are in preview mode.
/* const query = groq`
 *[_type == "post"] | order(_createdAt desc) {
    ...,
    author ->,
    categories[] ->
  } 
`
*/

const query = groq`
 *[_type == "post"] | order(_createdAt desc) {
...
 }
`  
  
export default async function HomePage() { // Added Async to function to fix error below with awaiting client/posts
  if (previewData()) {
    return (
      <PreviewSuspense 
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0a]">
            Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
    </PreviewSuspense>
    )
  }
 
  const posts =  await client.fetch(query)// Error: Await not allowed in non-async function. Wrapped in a wait function
  return (
  <BlogList posts={posts} />
  )
}


