import Image from "next/image";

export default function Banner() {
  return (
    <div className="absolute inset-0 z-0 mx-auto min-h-screen w-auto bg-gradient-to-b from-support">
      <div className="absolute left-0 right-0 top-0 mx-auto h-96 max-w-[1536px]">
        <Image
          className="object-cover"
          src="/images/cover.png"
          alt="Cover"
          priority
          fill
        />
      </div>
      <div className="container relative top-40 flex flex-col gap-4 text-right xl:px-16">
        <h1 className="text-4xl font-semibold tracking-tight text-primary-dark">
          Your Vaccine Partner
        </h1>
        <h2 className="text-2xl tracking-tight">Health protection made easy</h2>
      </div>
    </div>
  );
}
