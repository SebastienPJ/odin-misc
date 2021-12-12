

function setup() {
  delay('klasd')
    .then(() => console.log('hello'))
    .catch(err => console.error(err))



  
}




function delay(time) {
  return new Promise((resolve, reject) => {
    
    if (isNaN(time)) {
      reject('Error: delay must be a valid number')
    }

    setTimeout(resolve, time);


  })

}


setup();