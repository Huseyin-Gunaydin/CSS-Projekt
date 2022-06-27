const img = document.querySelector(".about-image");
const images = [
  "https://images.unsplash.com/photo-1616493039661-8a63de6ead09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2F0emV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1531748774806-58179918dba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0emV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1612258689092-8ca077ecf417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2F0emV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1592750639212-2ca413b44ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGthdHplfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://media.istockphoto.com/photos/veterinarians-examining-dog-picture-id1362498999?b=1&k=20&m=1362498999&s=170667a&w=0&h=FSeAtQAvRRW05lfBVLo6Xe22qahrX869h_wF7y3Affo=",
  "https://media.istockphoto.com/photos/young-nurse-looking-at-labrador-picture-id1371820919?b=1&k=20&m=1371820919&s=170667a&w=0&h=Id3LcZLtS-0e8I2EuJNV4AKYbpO6EVxsJ2fUPAe74QA=",
  "https://media.istockphoto.com/photos/cute-cat-getting-a-checkup-picture-id1325463845?b=1&k=20&m=1325463845&s=170667a&w=0&h=1jj2CiThMecSqoAH6HZXdDYKXhSP18IuszidjUEn5Ig=",
  "https://media.istockphoto.com/photos/young-nurse-looking-at-labrador-picture-id1371820919?b=1&k=20&m=1371820919&s=170667a&w=0&h=Id3LcZLtS-0e8I2EuJNV4AKYbpO6EVxsJ2fUPAe74QA=",
  "https://media.istockphoto.com/photos/examining-a-kitten-picture-id638142534?k=20&m=638142534&s=612x612&w=0&h=q6Dw1-PA0Z1epD28uBDTbp671141pVcdgZ2cO1vNPDw=",
  "https://media.istockphoto.com/photos/female-veterinarian-with-a-pup-at-the-office-picture-id1299191892?k=20&m=1299191892&s=612x612&w=0&h=h2gfj53ehFFVLVF0uJKckSTmnA6ZEc9HVxk6fjcIqsE=",
  "https://media.istockphoto.com/photos/beautiful-sunlight-female-vet-examining-horse-outdoors-at-the-farm-at-picture-id1301576588?k=20&m=1301576588&s=612x612&w=0&h=yho9BdvbKvSG7ssKv-OirIdy5Sodz-LDsL5VD6Krdzw=",
];

let a = 0;
setInterval(function () {
  if (a == images.length) a = 0;
  img.style.backgroundImage = "url('" + images[a] + "')";
  a++;
}, 2000);
