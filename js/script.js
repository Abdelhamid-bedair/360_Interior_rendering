const panoImage = document.querySelector(".pano-image");
const hall = "images/211111.jpg";


const panorama = new PANOLENS.ImagePanorama(hall);
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    cameraFov: 75,
});

viewer.add(panorama);
viewer.addViewIndicator();
viewer.getControl().rotateLeft(4.75);
viewer.getControl().rotateUp(-0.05);