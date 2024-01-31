let outputForLoop = document.querySelector(".outputForLoop");

let galleryObjects = [
  {
    url: "https://picsum.photos/300/300?random=1",
    alt: "Cannot find picture",
    title: "Shows picture 1",
  },
  {
    url: "https://picsum.photos/300/300?random=2",
    alt: "Cannot find picture",
    title: "Shows picture 2",
  },
  {
    url: "https://picsum.photos/300/300?random=3",
    alt: "Cannot find picture",
    title: "Shows picture 3",
  },
  {
    url: "https://picsum.photos/300/300?random=4",
    alt: "Cannot find picture",
    title: "Shows picture 4",
  },
  {
    url: "https://picsum.photos/300/300?random=5",
    alt: "Cannot find picture",
    title: "Shows picture 5",
  },
  {
    url: "https://picsum.photos/300/300?random=6",
    alt: "Cannot find picture",
    title: "Shows picture 6",
  },
  {
    url: "https://picsum.photos/300/300?random=7",
    alt: "Cannot find picture",
    title: "Shows picture 7",
  },
  {
    url: "https://picsum.photos/300/300?random=8",
    alt: "Cannot find picture",
    title: "Shows picture 8",
  },
];

for (let i = 0; i < galleryObjects.length; i++) {
  outputForLoop.innerHTML += `
        <div class="gallery-item">
            <img src="${galleryObjects[i].url}" alt="${galleryObjects[i].alt}">;
            <p class="image-title">${galleryObjects[i].title}</p>
        </div>
            `;
}
