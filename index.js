const { remote } = require('electron');
const fs = require('fs');
const AnImage = require('lightning-image-poly');
const pic = require('cat-picture');
const src = pic.src;
pic.remove();
const viz = new AnImage('#visualization', null, [src], { hullAlgorithm: 'convex' });

function save() {
  remote.getCurrentWebContents().printToPDF({
    portrait: true,
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ' + err.message);
      else alert('pdf saved!');
    });
  });
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode == 80) save();
});
