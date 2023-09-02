import { DUMMY_WORK } from "../components/UI/Carousel/Carousel";

export function increment(index) {
  return index === DUMMY_WORK.length - 1 ? 0 : index + 1;
}

export function decrement(index) {
  return index === 0 ? DUMMY_WORK.length - 1 : index - 1;
}
