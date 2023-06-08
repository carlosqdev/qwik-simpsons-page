import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header class="bg-yellow-400 border-b border-b-yellow-500 py-8">
      <div class="w-[90%] lg:w-[70%] m-auto">
        <div class="{styles.logo}">
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
      </div>
    </header>
  );
});
