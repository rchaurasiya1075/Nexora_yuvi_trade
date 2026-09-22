import { createServerFn } from "@tanstack/react-start";
import { pullQuotes } from "./quotes-core";

export { pullQuotes } from "./quotes-core";

export const fetchLiveQuotes = createServerFn({ method: "GET" }).handler(async () => {
  return pullQuotes();
});
