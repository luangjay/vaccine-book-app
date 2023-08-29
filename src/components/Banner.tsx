import Image from "next/image";

export default function Banner() {
  return (
    <div className="from-support absolute inset-0 z-0 mx-auto min-h-screen w-auto bg-gradient-to-b">
      <div className="absolute left-0 right-0 top-0 mx-auto h-[24rem] max-w-[1536px]">
        <Image
          className="object-cover"
          src="/images/cover.png"
          alt="Cover"
          priority
          fill
        />
      </div>
      <div className="container relative top-[10rem] flex flex-col gap-4 text-right">
        <h1 className="text-heading text-4xl font-semibold tracking-tight">
          Your Vaccine Partner
        </h1>
        <h2 className="text-2xl tracking-tight">Health protection made easy</h2>
      </div>
    </div>
  );
}
