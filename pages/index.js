
import Head from 'next/head';
import Calculator from '../components/Calc';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Calculator</title>
                <meta name="description" content="A simple calculator app built with Next.js" />
            </Head>

            <main>
                <h1>Simple Calculator</h1>
                <Calculator />
            </main>
        </div>
    );
}
