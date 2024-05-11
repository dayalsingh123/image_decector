const imageFile= document.getElementById("File")
const rightImage = document.getElementById("right-img")
const magicBtn = document.getElementById("magic-btn")

console.log(imageFile)
let imgBase64 = null;

imageFile.addEventListener("change",() => {
    console.log("Image Sel")
    const oneImage=imageFile.files[0]
    const imageUrl = URL.createObjectURL(oneImage)
    rightImage.src=imageUrl
    // image to base64
    const reader = new FileReader()
    reader.readAsDataURL(oneImage)
    reader.onload=() => {
        imgBase64= reader.result.split(",")[1]
    }
})
magicBtn.addEventListener("click",() => {
    const service = document.querySelector('input[name ="service"]:checked')?.value
    if(service===undefined){
        alert("please select correct service")
        return;
    }
})
L= "https://python-api.techsimplus.com/api/amazon-service/"
// css loader and spiner
// amazon rekognition website
// bootstrap