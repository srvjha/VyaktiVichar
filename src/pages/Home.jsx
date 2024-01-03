import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/conf'
import { Container,PostCard } from '../components'


function Home() {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts)
            {
                setPosts(posts.documents)
            }
    })
    },[])
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-3xl px-15 text-black border-l-purple-400 cursor-wait bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-96 
                            font-bold hover:text-white rounded-2xl ">
                               LOGIN TO READ POSTS
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home