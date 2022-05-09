import asciify from 'asciify-image'

const filename = './26z28l.jpg'

var options = {
  fit: 'box',
  width: 200,
  height: 100
}

asciify(filename, options, function (err, asciified) {
  if (err) throw err;

  // Print to console
  console.log(asciified);
});