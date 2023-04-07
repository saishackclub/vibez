import { useState, useRef } from "react";
import html2canvas from "html2canvas";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Generate.module.css";

export default function Generate() {
    const [selectedImage, setSelectedImage] = useState("/red.jpg");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const finalImageRef = useRef(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const color = e.currentTarget.innerText;
        setSelectedImage(`/${color}.jpg`);
    };

    const handleDownload = () => {
        if (!finalImageRef.current) {
            return;
        }

        html2canvas(finalImageRef.current).then((canvas: HTMLCanvasElement) => {
            const link = document.createElement("a");
            link.download = "example.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    };

    return (
        <>
            <Head>
                <title>generate | Vibez</title>
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
                <div className={styles.choices}>
                    <button
                        className={styles.choice}
                        style={{
                            backgroundColor: "rgba(236, 55, 80, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        red
                    </button>
                    <button
                        className={styles.choice}
                        style={{
                            backgroundColor: "rgba(241, 196, 15, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        yellow
                    </button>
                    <button
                        className={styles.choice}
                        style={{
                            backgroundColor: "rgba(51, 214, 166, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        green
                    </button>
                    <button
                        className={styles.choice}
                        style={{
                            backgroundColor: "rgba(51, 142, 218, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        blue
                    </button>
                </div>

                <div className={styles.splitContainer}>
                    <div className={styles.left}>
                        <div className={styles.finalImage} ref={finalImageRef}>
                            <Image
                                src={selectedImage}
                                alt="red"
                                width={300}
                                height={533}
                                className={styles.finalBackground}
                                unoptimized
                            />

                            <div className={styles.finalDescription}>
                                <h1 className={styles.finalTitle}>{title}</h1>
                                <p className={styles.finalDate}>{date}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.textEditor}>
                        <div className={styles.form}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                    className={styles.input}
                                    id="title"
                                    type="text"
                                    placeholder="Enter title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="date">Date:</label>
                                <input
                                    className={styles.input}
                                    id="date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <button onClick={handleDownload}>
                                download image
                            </button>

                            <Link href="/">
                                <button>back to home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
