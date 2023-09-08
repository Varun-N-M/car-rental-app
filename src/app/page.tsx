import {
  Hero,
  CarCards,
  SearchBar,
  CustomFilter,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="max-width mt-10 px-6 py-4 sm:px-16" id="discover">
        <div className="flex flex-col justify-start items-start gap-y-2.5 text-gray-800">
          <h1 className="text-5xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars that you may like</p>
        </div>
        <div className="mt-12 w-full flex justify-between items-center gap-5 flex-wrap">
          <SearchBar />
          <div className="flex justify-start items-center gap-5 flex-wrap">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6 pt-14">
              {allCars?.map((car) => (
                <CarCards car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="to-black text-xl font-bold">Oops no cars found</h2>
          </div>
        )}
      </div>
    </main>
  );
}
