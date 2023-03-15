import logo from "../../assets/logo/black.svg";
import { createSignal, Show } from "solid-js";

export default function IntroAnimation() {
  const [animationEnded, updateAnimationEnded] = createSignal(false);

  setTimeout(() => updateAnimationEnded(true), 2500)

  return (
    <Show when={!animationEnded()}>
      <span class="intro">
        <img src={logo} />
      </span>
    </Show>
  );
}
