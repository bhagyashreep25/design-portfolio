import type { MetadataRoute } from "next";
import { getNotes } from "@/content/notes";

const BASE_URL = "https://www.bhagyashreephadnis.com";

/**
 * clover-ai is deliberately excluded — it's a live route kept unlinked from
 * every page on the site, and a sitemap entry would undo that by advertising
 * it to crawlers even without an on-page link.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/ai-labs", "/play", "/notes", "/work/bbq-nation", "/work/school-counselling", "/work/walletwize"];

  return [
    ...routes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...getNotes().map(({ meta }) => ({
      url: `${BASE_URL}/notes/${meta.slug}`,
      lastModified: new Date(meta.date),
    })),
  ];
}
