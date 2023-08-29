import Banner from "@/components/Banner";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container relative top-[15rem] pb-16 pt-8">
        <Grid />
      </div>
    </main>
  );
}
