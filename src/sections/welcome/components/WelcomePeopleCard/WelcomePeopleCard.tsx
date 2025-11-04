import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { People } from "@/modules/welcome/domain/People";

const WelcomePeopleCard = ({ people }: { people: People }) => {
  return (
    <Card className="group w-full overflow-hidden transition-all duration-300 p-0 hover:scale-105 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={people.imageUrl}
          alt={`${people.name}-image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-center font-semibold text-lg tracking-tight">
          {people.name}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default WelcomePeopleCard;
