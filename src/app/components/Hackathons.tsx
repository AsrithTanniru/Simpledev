import { hackathons } from "../data/data";

export default function Hackathons() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
      <ul className="list-disc pl-8 space-y-2">
        {hackathons.map((hackathon, index) => (
          <li key={index}>
            {hackathon.name}: {hackathon.description} -  {hackathon.year}
          </li>
        ))}
      </ul>
    </section>
  );
}
