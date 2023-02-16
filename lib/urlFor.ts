import { client } from './sanity.client'
import imageUrlBuilder from "@sanity/image-url"

// Get a preconfigured url builder from you sanity client
const builder = imageUrlBuilder(client)

function urlFor(source: any) {  
    return builder.image(source)
}

export default urlFor 