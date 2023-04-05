import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>home | Vibez@SAISHackClub</title>
                <meta
                    name="description"
                    content="❤️💛💚💙 What's your vibe here at SAIS Hack Club?"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className={styles.main}>
                <h1>what&apos;s your vibe today?</h1>

                <div className={styles.gallery}>
                    <Image src="/red.jpg" alt="red" width={300} height={300} />
                    <Image
                        src="/yellow.jpg"
                        alt="yellow"
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/green.jpg"
                        alt="green"
                        width={300}
                        height={300}
                    />
                    <Image
                        src="/blue.jpg"
                        alt="blue"
                        width={300}
                        height={300}
                    />
                </div>

                <div className={styles.cta}>
                    <Link href="/generate" passHref className={styles.button}>
                        begin the journey
                    </Link>
                </div>
            </main>
        </>
    );
}
