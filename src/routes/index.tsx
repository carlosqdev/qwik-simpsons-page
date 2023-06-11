import { component$, useTask$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Card from "~/components/card/card";
import { BASE_API_URL } from "~/constants";

import type { Characters } from "~/types";

export default component$(() => {
  const dataCharacters = useSignal<Characters>();
  const page = useSignal(1);
  const nextPage = useSignal(0);

  useTask$(async () => {
    async function getCharacter() {
      const response = await fetch(`${BASE_API_URL}?limit=6&page=1`);
      const characters = await response.json();

      return characters as Characters;
    }

    dataCharacters.value = await getCharacter();
    nextPage.value = dataCharacters.value.nextPage;
  });

  const theNextPage = $(async function theNextPage() {
    page.value = nextPage.value;

    const response = await fetch(`${BASE_API_URL}?limit=6&page=${page.value}`);
    const characters: Characters = await response.json();

    dataCharacters.value = characters;
    nextPage.value = dataCharacters.value.nextPage;
  });

  return (
    <section class="container">
      <div>
        <button
          onClick$={() => {
            theNextPage();
          }}
          class="rounded-sm bg-yellow-400 text-blue-600 text-xl font-sans font-bold"
        >
          Siguiente
        </button>
      </div>
      <ul class="w-[90%] py-8 m-auto flex flex-wrap justify-center gap-4 md:gap-10 lg:w-[70%]">
        {dataCharacters.value?.docs.map((doc) => (
          <Card
            key={doc._id}
            Nombre={doc.Nombre}
            Ocupacion={doc.Ocupacion}
            Imagen={doc.Imagen}
            Historia={doc.Historia}
          />
        ))}
      </ul>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Simpsons page",
  meta: [
    {
      name: "description",
      content:
        "The Simpsons page is a collection of information about the our lovely yellow family",
    },
  ],
};
