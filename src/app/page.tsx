import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container relative top-[15rem] pb-16 pt-8 xl:px-16">
        <CardPanel />
      </div>
    </main>
  );
}
