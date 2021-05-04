const args = process.argv.slice(2);

let sorted = args.sort(function(a, b) {
  return a-b
});



for (let arg of sorted) {
  if (arg >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(arg + '000'))
    console.log(Number(arg + '000'))
  }
};

