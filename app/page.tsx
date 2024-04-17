import { MaxWidThWrapper } from "@/components/max-width-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const cue = [
  {
    name: "SuperFast Delivery",
    Icon: ArrowDownToLine,
    description: "Fastest delivery on Internet",
  },

  {
    name: "Guranteed Quality",
    Icon: CheckCircle,
    description: "Quality is our priority. We guarantee it",
  },

  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We care about our planet. We have taken care of it.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidThWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
            Your ultimate destination for{" "}
            <span className="text-purple-500">online shopping</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to our online store. We offer a wide range of products at
            competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Out quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidThWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidThWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {cue.map((item, i) => (
              <div
                key={i}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center "
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-900">
                    {<item.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidThWrapper>
      </section>
    </>
  );
}
