// Set zoom to all images
function addZoomDataElement(){

    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-action', "zoom");
    }

}
addZoomDataElement();

Holder.addTheme('thumb', {
    bg: '#55595c',
    fg: '#eceeef',
    text: 'Thumbnail'
  });