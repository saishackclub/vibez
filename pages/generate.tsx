import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Generate.module.css";

export default function Generate() {
    const [selectedImage, setSelectedImage] = useState("/red.jpg");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    
    const handleClick = (e: any) => {
        const color = e.target.innerText;
        setSelectedImage(`/${color}.jpg`);
    };
    
    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };
    
    const handleDateChange = (e: any) => {
        setDate(e.target.value);
    };
    
    const handleMessageChange = (e: any) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <Head>
                <title>generate | Vibez@SAISHackClub</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
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
                {/* TODO: Clean up button options + wrap up final image generation with html2canvas */}
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        style={{
                            backgroundColor: "rgba(236, 55, 80, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        red
                    </button>
                    <button
                        className={styles.button}
                        style={{
                            backgroundColor: "rgba(241, 196, 15, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        yellow
                    </button>
                    <button
                        className={styles.button}
                        style={{
                            backgroundColor: "rgba(51, 214, 166, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        green
                    </button>
                    <button
                        className={styles.button}
                        style={{
                            backgroundColor: "rgba(51, 142, 218, 0.75)",
                        }}
                        onClick={handleClick}
                    >
                        blue
                    </button>
                </div>

                <div className={styles.splitContainer}>
                    <div className={styles.finalImage}>
                        <Image
                            src={selectedImage}
                            alt="red"
                            width={300}
                            height={533}
                        />

                        <div className={styles.finalDescription}>
                            <h1 className={styles.finalTitle}>{title}</h1>
                            <p className={styles.finalDate}>{date}</p>
                            
                            <p className={styles.finalMessage}>{message}</p>
                        </div>
                    </div>

                    <div className={styles.textEditor}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input className={styles.input} id="title" type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="date">Date:</label>
                            <input className={styles.input} id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea className={styles.input} id="message" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>

                        <div className={styles.home}>
                            <Link href="/" passHref className={styles.homeButton}>
                                back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
