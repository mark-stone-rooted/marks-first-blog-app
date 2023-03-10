import Image from "next/image"
import { Post } from "typings"
import urlFor from "../lib/urlFor"


type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
    console.log('Post object Length test: ', posts)

    
    return ( 
      
    <div>
        <hr className="border-[#F7AB0A] mb-10" />
        
        {posts.map(post => (
            <div key={post._id} className="flex flex-col group cursor-pointer">
               <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-300 ease-out">
                    <Image 
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                        <div>
                            <p className="font-semibold">{post.title}</p>

                            <p>
                                {new Date(post._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default BlogList