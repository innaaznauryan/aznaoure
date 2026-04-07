const images = import.meta.glob(
  "../assets/*.webp",
  { eager: true, import: "default" }
);

const imageMap: Record<string, string> = {};

for (const path in images) {
  const fileName = path.split("/").pop() as string;
  imageMap[fileName] = images[path] as string;
}

export default imageMap;