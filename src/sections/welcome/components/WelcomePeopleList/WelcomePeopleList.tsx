import { usePeopleContext } from "../../context";
import { WelcomePeopleCard } from "../WelcomePeopleCard";

const WelcomePeopleList = () => {
  const { peoples } = usePeopleContext();

  if (peoples.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-center text-muted-foreground">
          <div className="mb-4 text-6xl">👥</div>
          <p className="text-lg">No people added yet</p>
          <p className="text-sm">Add your first person using the form above</p>
        </div>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {peoples.map((people) => (
        <WelcomePeopleCard key={people.id} people={people} />
      ))}
    </section>
  );
};

export default WelcomePeopleList;
