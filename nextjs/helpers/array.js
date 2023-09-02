import { DUMMY_WORK } from "../components/UI/WorkCarousel/Carousel";

export function increment(array, index) {
  return index === array.length - 1 ? 0 : index + 1;
}

export function decrement(array, index) {
  return index === 0 ? array.length - 1 : index - 1;
}
