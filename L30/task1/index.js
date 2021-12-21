const addImage = (imgSrc) => {
  const p = new Promise((resolveCd, rejectCd) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My Photo");
    imgElem.src = imgSrc;
    const containerElem = document.querySelector(".page");
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCd({ width, height });
    };

    imgElem.addEventListener("load", onImageLoaded);

    imgElem.addEventListener("error", () =>
      rejectCd(new Error("Image load is failed..."))
    );
  });
  return p;
};

const imgSrc =
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

const resPromise = addImage(imgSrc);
resPromise.then((data) => console.log(data));
resPromise.catch((error) => console.log(error));
//console.log(res);
