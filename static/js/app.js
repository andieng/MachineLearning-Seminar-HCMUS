if (predict_text.innerText === "") {
  recognize_btn.style.display = "none";
  result.style.display = "none";
}

if (preview_img.src !== window.location.href) {
  preview_img.style.display = "block";
  img_icon.style.display = "none";
  preview_img.classList.add("hover-effect");
}

image.onchange = (evt) => {
  const [file] = image.files;
  recognize_btn.style.display = "block";
  result.style.display = "block";
  if (predict_text.innerText === "") {
    result.style.display = "none";
  }
  if (file) {
    preview_img.style.display = "block";
    img_icon.style.display = "none";
    preview_img.src = URL.createObjectURL(file);
  }
};

function openLinkInNewTab(link) {
  window.open(link, "_blank");
}
