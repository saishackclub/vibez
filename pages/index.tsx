import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>home | Vibez</title>
                <meta
                    name="description"
                    content="❤️💛💚💙 What's your vibe here at SAIS Hack Club?"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* OG graph */}
                <meta property="og:title" content="vibez | SAIS Hack Club" />
                <meta
                    property="og:description"
                    content="❤️💛💚💙 What's your vibe here at SAIS Hack Club?"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://vibez.saishack.club/"
                />
                <meta
                    property="og:image"
                    content="https://vibez.saishack.club/og.png"
                />

                {/* Twitter */}
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content="vibez | SAIS Hack Club"
                />
                <meta
                    name="twitter:description"
                    content="❤️💛💚💙 What's your vibe here at SAIS Hack Club?"
                />
                <meta
                    name="twitter:image"
                    content="https://vibez.saishack.club/og.png"
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
                    <Image src="/red.jpg" alt="red" width={300} height={450} />
                    <Image
                        src="/yellow.jpg"
                        alt="yellow"
                        width={300}
                        height={450}
                    />
                    <Image
                        src="/green.jpg"
                        alt="green"
                        width={300}
                        height={450}
                    />
                    <Image
                        src="/blue.jpg"
                        alt="blue"
                        width={300}
                        height={450}
                    />
                </div>

                <div className={styles.cta}>
                    <Link href="/generate" passHref>
                        <button>
                            begin the journey
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
}
