function asynchronous(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

asynchronous((err, data) => {
  if (err) {
    console.error("Tenemos un error");
    console.error(err);
    return false;
  }

  console.log("Todo ha ido bien, data es: " + data);
});
