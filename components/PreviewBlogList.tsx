"use client"

import { usePreview } from "@/lib/sanity.preview"
import BlogList from "./BlogList"
//import { previewData } from "next/headers"
import { arrayBuffer } from "stream/consumers"

type Props = {
    query: any
}

export default function PreviewBlogList({ query }: Props) {

  //  if(previewData()) { 

   // }


    const posts = usePreview(null, query) || [] 
    return <BlogList posts={posts} />
}