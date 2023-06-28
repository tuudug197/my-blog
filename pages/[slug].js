import React, { useEffect, useState} from 'react'
import { useRouter } from 'next/router';

const Article = () => {
    const [article, setArticle] = useState()
    const router = useRouter()
    const { slug } = router.query
    useEffect(() => {
        if(slug) {
            fetch(`https://dev.to/api/articles/abbeyperini/${slug}`)
            .then((res) => res.json())
            .then((data) => setArticle(data))
        }
       
    }, [slug])
    console.log(article);
    if(!article) {
        return (
            <div>loading</div>
        )
    }

    return (
        <div dangerouslySetInnerHTML={{__html: article.body_html}} />
    )
}
export default Article