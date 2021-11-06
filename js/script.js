const panoImage = document.querySelector(".pano-image");
const hall = "images/hall.jpg";


const panorama = new PANOLENS.ImagePanorama(hall);
const viewer = new PANOLENS.Viewer({
    container: panoImage,

});

viewer.add(panorama);
viewer.addViewIndicator();
viewer.getControl().rotateLeft(4.75);
viewer.getControl().rotateUp(0.1);
