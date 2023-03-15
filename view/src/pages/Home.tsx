import { Link } from "@solidjs/router";
import Card from "../components/Card";
import LinkCard from "../components/LinkCard";

export default function Home() {
  return (
    <>
      <section>
        <h2 class="large-heading">الحلقات المتوفرة</h2>
        {/* todo: add magazine cards */}
        <div class="card-grid">
          <LinkCard href="/all" title="المزيد" />
        </div>
      </section>

      <hr />

      <section class="card-grid">
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
      </section>
    </>
  );
}
