if (predict_text.innerText === '') {
    predict_container.style.display = 'none'
    upload_container.style.marginRight = '0px'
}

if (preview_img.src !== window.location.href) {
    preview_img.style.display = 'block'
    img_icon.style.display = 'none'
    upload_text.style.display = 'none'
}

image.onchange = evt => {
    const [file] = image.files
    predict_container.style.display = 'flex'
    if (predict_text.innerText === '') {
        result.style.display = 'none'
    }
    upload_container.style.marginRight = '250px'
    if (file) {
        preview_img.style.display = 'block'
        img_icon.style.display = 'none'
        upload_text.style.display = 'none'
        preview_img.src = URL.createObjectURL(file)
    }
}