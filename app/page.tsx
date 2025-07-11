import { connection } from "next/server";
import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image";

export default async function Home() {
  await connection();

  const image = await fetchImage();
  console.log("Home: You got image information.", image);
  
  return <CatImage url={image.url} />;
}