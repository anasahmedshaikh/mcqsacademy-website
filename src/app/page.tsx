import Image from "next/image";
import ill from "@/public/images/heroImg.webp"

export default function Home() {
  return (
    <main className="flex bg-white">
      <div className="p-3">
        <h1 className="font-black text-3xl">Welcome to Mcqs Academy</h1>
        <h2 className="font-semibold text-2xl">We Got you</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque, pariatur numquam vel natus dolorem ipsa similique cum, inventore, perferendis a et ipsum nisi expedita.
        </p>
        <div>
          <button className="w-28 text-white bg-black rounded-lg p-1 m-6">TAKE TESTS</button>
        </div>
      </div>
      <div>
        <Image                 
        src={ill}
        alt="illustration of student taking test"
        height={800}
        width={800}
        />
      </div>
    </main>
  );
}
