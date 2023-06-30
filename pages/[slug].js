import Head from "next/head"

export default function Article({ article }) {
    if(!article) return <div>loading</div>

    return (
        <>
            <Head>
                <meta property='og:title' content={article.title}/>
                <meta property='og:description' content={article.description}/>
                <meta property='og:image' content={article.social_image}/>
            </Head>
            <div dangerouslySetInnerHTML={{__html: article.body_html}} />
        </>
       
    )
}

export async function getServerSideProps({ params }) {
    const { slug } = params
    const result =  await fetch(`https://dev.to/api/articles/abbeyperini/${slug}`)
    const data = await result.json()
    return { props: { article : data }}
}