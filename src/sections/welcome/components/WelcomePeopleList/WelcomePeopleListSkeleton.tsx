import { Card, CardHeader } from "@/components/ui/card";

export default function WelcomePeopleListSkeleton() {
  return (
    <section className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 4 }, (_, i) => `skeleton-${i}`).map((key) => (
        <Card key={key} className="w-full animate-pulse overflow-hidden p-0">
          <div className="relative aspect-square overflow-hidden bg-muted" />
          <CardHeader className="pb-4">
            <div className="mx-auto h-5 w-32 rounded bg-muted" />
          </CardHeader>
        </Card>
      ))}
    </section>
  );
}
