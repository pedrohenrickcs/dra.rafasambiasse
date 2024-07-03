import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src="./logo.png"
        alt="Rafaela Sambiasse"
        className="dark:invert"
        width={1080}
        height={600}
        priority
        />
        <p className="text-xl">Em contrução... 😊</p>
    </main>
  );
}
