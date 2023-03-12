setInterval(updateCenterSlide, 200);

function info(div){
  const h3 = div.querySelector(".textslide h3");
  const h3Content = h3.textContent;

  const infoHeader = document.querySelector('.information h1');
  infoHeader.textContent = h3Content;

  const slideInformation = {
    'slide1': {
      description: 'EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup™ coming to the game as post-launch updates, the addition of women’s club teams, cross-play features*, and more. Experience unrivaled authenticity with over 19,000 players, 700+ teams, 100 stadiums, and over 30 leagues in FIFA 23.',
      image: 'images/fifa22.jpg',
      price: '69.99$',
      discount: '45%'
    },
    'slide2': {
      description: 'Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.',
      image: 'images/hogwarts.jpg',
      price: '59.99$',
      discount: '24%'
    },
    'slide3': {
      description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
      image: 'images/gta.jpg',
      price: '29.99$',
      discount: '65%'
    },
    'slide4': {
      description: 'Create, explore, survive, repeat. Get Minecraft: Java Edition and Bedrock Edition as a package deal for Windows! With Minecraft: Java & Bedrock Edition for Windows, you can easily switch between games using the unified launcher and cross-play with any current edition of Minecraft.',
      image: 'images/minecraft.jpg',
      price: '39.99$',
      discount: '14%'
    },
    'slide5': {
      description: 'Experience a visceral Campaign or assemble your team in the ultimate online playground with multiple Special Ops challenges and a mix of Multiplayer maps and modes.',
      image: 'images/mw.jpg',
      price: '29.99$',
      discount: '28%'
    },
    'slide6': {
      description: 'Cook and serve your dishes, design and decorate your restaurants, and expand your culinary kingdom with new unlocks, abilities and dishes in procedurally-generated locations. Classic cooking action with permanent roguelite progression. Hire your friends - or do it all yourself!',
      image: 'images/plate.jpg',
      price: '17.49$',
      discount: '33%'
    },
    'slide7': {
      description: 'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.',
      image: 'images/forest.jpg',
      price: '29.99$',
      discount: '15%'
    },
    'slide8': {
      description: 'EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup™ coming to the game as post-launch updates, the addition of women’s club teams, cross-play features*, and more. Experience unrivaled authenticity with over 19,000 players, 700+ teams, 100 stadiums, and over 30 leagues in FIFA 23.',
      image: 'images/fifa22.jpg',
      price: '69.99$',
      discount: '45%'
    },
    'slide9': {
      description: 'Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.',
      image: 'images/hogwarts.jpg',
      price: '59.99$',
      discount: '24%'
    },
    'slide10': {
      description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
      image: 'images/gta.jpg',
      price: '29.99$',
      discount: '65%'
    },
    'slide11': {
      description: 'Create, explore, survive, repeat. Get Minecraft: Java Edition and Bedrock Edition as a package deal for Windows! With Minecraft: Java & Bedrock Edition for Windows, you can easily switch between games using the unified launcher and cross-play with any current edition of Minecraft.',
      image: 'images/minecraft.jpg',
      price: '39.99$',
      discount: '14%'
    },
    'slide12': {
      description: 'Experience a visceral Campaign or assemble your team in the ultimate online playground with multiple Special Ops challenges and a mix of Multiplayer maps and modes.',
      image: 'images/mw.jpg',
      price: '29.99$',
      discount: '28%'
    },
    'slide13': {
      description: 'Cook and serve your dishes, design and decorate your restaurants, and expand your culinary kingdom with new unlocks, abilities and dishes in procedurally-generated locations. Classic cooking action with permanent roguelite progression. Hire your friends - or do it all yourself!',
      image: 'images/plate.jpg',
      price: '17.49$',
      discount: '33%'
    },
    'slide14': {
      description: 'Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.',
      image: 'images/forest.jpg',
      price: '29.99$',
      discount: '15%'
    }
  };

  const infoDescription = document.querySelector('.information p');
  infoDescription.textContent = slideInformation[div.id].description;

  const image = document.querySelector('.image-container img');
  image.src = slideInformation[div.id].image;

  const old = document.querySelector('.old-price');
  old.textContent = slideInformation[div.id].price;

  const originalPrice = Number(slideInformation[div.id].price.replace('$', ''));
  const discountPercentage = Number(slideInformation[div.id].discount.replace('%', ''));
  const price = originalPrice - (originalPrice * (discountPercentage / 100));

  const newPrice = document.querySelector('.new-price');
  newPrice.textContent = price.toFixed(2) + '$';
}

function distanceBetweenElements(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();
  const dx = rect1.left + rect1.width / 2 - (rect2.left + rect2.width / 2);
  const dy = rect1.top + rect1.height / 2 - (rect2.top + rect2.height / 2);
  return Math.sqrt(dx * dx + dy * dy);
}

function updateCenterSlide() {
  const slideTrack = document.querySelector('.slider');
  const slides = slideTrack.querySelectorAll('.slide');
  const centerSlide = Array.from(slides).reduce((minSlide, slide) => {
    const distance = distanceBetweenElements(slideTrack, slide);
    if (!minSlide || distance < minSlide.distance) {
      return {slide, distance};
    }
    return minSlide;
  }, null).slide;

  // hide all text slides
const textSlides = document.querySelectorAll('.textslide');
textSlides.forEach(textSlide => {
  textSlide.style.opacity = '0';
});

// show text slide for center slide
const centerTextSlide = centerSlide.querySelector('.textslide');
centerTextSlide.style.opacity = '1';

}

function addToCart(button){

  button.classList.toggle("button-clicked-animation");
  button.textContent = '✔';

  setTimeout(function(){
    button.classList.remove("button-clicked-animation");
    button.textContent = 'Add to Cart'
  }, 2000);
}
