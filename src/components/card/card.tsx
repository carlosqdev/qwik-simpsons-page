import { component$ } from "@builder.io/qwik";
import type { Character } from "~/types";

export default component$(
  ({ Nombre, Ocupacion, Imagen, Historia }: Character) => {
    return (
      <li class="bg-yellow-300 rounded-md p-3 shadow-lg w-full max-w-[420px] grid place-content-center gap-4">
        <p class="text-2xl font-bold font-sans text-slate-800 text-center">
          {Nombre}
        </p>
        <span class="text-xl font-semibold font-sans text-slate-800 text-center">
          {Ocupacion}
        </span>
        <img
          class="object-contain h-[329px] w-[250px] hover:transition-all hover:scale-110 m-auto"
          width={250}
          height={329}
          src={Imagen}
          alt={Nombre}
        />
        <p class="text-lg font-sans font-medium text-slate-800">{Historia}</p>
      </li>
    );
  }
);
