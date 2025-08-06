import Image from 'next/image';
import geda from '../public/geda.jpg';
import stadium from '../public/stadium.jpg';

export default function BlogBody() {
  return (
    <section className="space-y-6 leading-relaxed">
      <Image src={geda} alt="ASTU" className="rounded shadow-md max-w-md float-left mr-4 mb-2" />

      <p>
        As a student in ASTU, I experienced a lot of things including social life, struggle, starvation, living together, knowledge and most importantly friendship.
      </p>
      <p>
        These things that I mentioned are common things one can obtain from any university in my country, but the one thing I found different in ASTU is "Survival of the Fittest."
      </p>
      <p>
        Consequently, most of the students I met during freshman year were dismissed or left the university because they came without a goal or aim, so they got distracted.
      </p>
      <p>
        Additionally, peer pressure is a thing that changes people's minds and lives too.
      </p>

      <Image src={stadium} alt="ASTU Stadium" className="rounded shadow-md max-w-md float-right ml-4 mb-2" />

      <p>
        In conclusion, everyone should be aware of themselves, their capabilities, and interests before joining ASTU because many of my friends left due to the reasons I mentioned above.
      </p>
    </section>
  );
}