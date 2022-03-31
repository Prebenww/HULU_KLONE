import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

// @ts-ignore
export default function Home({results}) {

    return (
        <div className="">
            <Head>
                <title>Hulu</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Nav/>
            <Results results={results} />
        </div>
    )
}



// @ts-ignore
export async function getServerSideProps(context) {

    const genre = context.query.genre;

    // @ts-ignore
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url 
    }`
    ).then(res => res.json())

    return {
        props: {
            results: request.results,

        }

    }

}