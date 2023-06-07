import { component$, useTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Characters } from "~/types";

export default component$(() => {
  const data = useSignal<Characters>();

  useTask$(async () => {
    async function getCharacter() {
      const response = await fetch(
        "https://apisimpsons.fly.dev/api/personajes"
      );
      const characters = await response.json();

      return characters;
    }

    data.value = await getCharacter();
  });

  return (
    <>
      <section>
        <ul>
          {data.value?.docs.map((doc) => (
            <li key={doc._id}>
              <p>{doc.Nombre}</p>
              <span>{doc.Ocupacion}</span>
              <img width={250} height={329} src={doc.Imagen} alt={doc.Nombre} />
            </li>
          ))}
        </ul>
      </section>
    </>
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
