import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer
      class="bg-yellow-400 py-8 border-t border-t-yellow-500
    "
    >
      <div class="w-[90%] lg:w-[70%] m-auto">
        <a
          class="flex justify-center gap-2"
          href="https://www.builder.io/"
          target="_blank"
        >
          <span class="text-xl font-sans font-bold text-slate-950">
            Power by Qwik
          </span>
          <span class="text-xl font-sans font-bold text-slate-950">|</span>
          <span class="text-xl font-sans font-bold text-slate-950">
            {serverTime.value.date}
          </span>
        </a>
      </div>
    </footer>
  );
});
