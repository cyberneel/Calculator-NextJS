
import Head from 'next/head';
import Calculator from '../components/Calc';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Calculator</title>
            </Head>

            <main>
                <h1>Simple Calculator</h1>
                <p>A simple calculator made in NextJS</p>
                <Calculator />
            </main>
        </div>
    );
}
