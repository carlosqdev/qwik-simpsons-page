import { component$, useTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Card from "~/components/card/card";

import type { Characters } from "~/types";

export default component$(() => {
  const dataCharacters = useSignal<Characters>();

  useTask$(async () => {
    async function getCharacter() {
      const response = await fetch(
        "https://apisimpsons.fly.dev/api/personajes"
      );
      const characters = await response.json();

      return characters;
    }

    dataCharacters.value = await getCharacter();
  });

  return (
    <section class="container">
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
