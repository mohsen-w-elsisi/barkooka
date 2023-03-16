import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import LinkCard from "../components/LinkCard";
import RecentMagazineCards from "../components/RecentMagazineCards";

export default function Home() {
  return (
    <>
      <section>
        <h2 class="large-heading">الحلقات المتوفرة</h2>
        <CardGrid>
          <RecentMagazineCards />
          <LinkCard href="/all" title="المزيد" />
        </CardGrid>
      </section>

      <hr />

      <CardGrid>
        <Card title="أهلا بك">
          يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع
          اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ
        </Card>
        <Card title="أهلا بك">
          يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع
          اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ
        </Card>
        <Card title="أهلا بك">
          يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع
          اثعا رخثقا رتبتر يىقعؤ اقابؤه اقبعاقبراقع اثعا رخثقا رتبتر يىقعؤ
        </Card>
      </CardGrid>
    </>
  );
}
