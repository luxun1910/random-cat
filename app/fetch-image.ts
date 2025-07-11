"use server";

type Image = {
    url: string;
};

export async function fetchImage(): Promise<Image> {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log("fetchImage: You got image information.", images);
    return images[0];
}