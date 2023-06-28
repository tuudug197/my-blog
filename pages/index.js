import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Head from 'next/head';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=abbeyperini")
      .then((res) => res.json())
      .then((data) => setArticles(data))
  }, [])
  return (
    <> 
      <Head>
        <meta property='og:title' content='bulog'></meta>
        <meta property='og:image' content='https://media.istockphoto.com/id/1170652843/photo/chemical-formula-of-vitamin-b1-on-a-futuristic-background.jpg?s=2048x2048&w=is&k=20&c=oxRoe8oYS9NSaZI9I7pl68U-MM9gZwUH3T9qkvpbnO4='></meta>
      </Head>

      {articles.map((article) => {
        return( 
          <Card 
            key={article.id}
            color='info'
            variant='soft'
          >
            <CardContent>
              <a
                href={`/${article.slug}`}
                >{article.title}</a>
            </CardContent>
          </Card>
        )
      })}
    </>
  )
}
