import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Next.js starter site</title>
                <meta
                    name="description"
                    content="An example Next.js site."
                />
            </Head>

            <h1>Next.js starter site</h1>
            <p>This is a demonstration blog using <a href="https://nextjs.org/">Next.js</a>.</p>
            <p>Find out more <Link href="/about"><a>about us...</a></Link></p>
            <p>Find out more <Link href="/contact"><a>contact us...</a></Link></p>
        </>
    );
}
