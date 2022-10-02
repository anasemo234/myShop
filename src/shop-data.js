const SHOP_DATA = [
  {
    title: "All",
    items: [
      {
        id: 1,
        name: "Michael Jackson",
        imageUrl:
          "https://target.scene7.com/is/image/Target/GUEST_ce155838-d52e-47c1-af73-3630b6027ef8?wid=488&hei=488&fmt=pjpeg",
        price: 20,
      },
      {
        id: 2,
        name: "The Weeknd",
        imageUrl:
          "https://i.ebayimg.com/images/g/B34AAOSws9Riba~j/s-l500.jpg",
        price: 15,
      },
      {
        id: 2,
        name: "Burna Boy",
        imageUrl:
          "https://i.pinimg.com/originals/3a/c2/c3/3ac2c343450de7e4e85d9ec216720d9e.png",
        price: 20,
      },
      {
        id: 3,
        name: "Bob Marley",
        imageUrl:
          "https://i5.walmartimages.com/asr/518544dd-87c6-4ccb-85dd-a5a40a294efd.1ad4170d89e06aab6ea7fa6a6ae732fc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        price: 15,
      },
      {
        id: 4,
        name: "Jungle",
        imageUrl:
          "https://m.media-amazon.com/images/I/41MpEGVhUQL._SY350_.jpg",
        price: 15,
      },
      {
        id: 5,
        name: "Tame Impala",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/1809/3005/products/TameImpalaTSR_grande.png?v=1582175565",
        price: 20,
      },
      {
        id: 6,
        name: "Kool & The Gang",
        imageUrl:
          "https://i.etsystatic.com/21130895/r/il/8139b8/2742213356/il_570xN.2742213356_bm0e.jpg",
        price: 15,
      },
      {
        id: 7,
        name: "Lenny Kravitz",
        imageUrl:
          "https://m.media-amazon.com/images/I/51ricp4zKmL._SL1000_.jpg",
        price: 15,
      },
      {
        id: 8,
        name: "Marvin Gaye",
        imageUrl:
          "https://i.ebayimg.com/images/g/onwAAOSw9b9iAqNx/s-l500.jpg",
        price: 15,
      },
      {
        id: 9,
        name: "Kendrick Lemar",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0101/8362/products/maadcity_1024x1024.jpg?v=1620391627",
        price: 15,
      },
      {
        id: 10,
        name: "The NOTORIOUS BIG",
        imageUrl:
          "https://merchbar.imgix.net/product/vinylized/upc/92/603497859245.jpg?auto=format&fit=max&w=828",
        price: 8,
      },
      {
        id: 11,
        name: "Aaliyah",
        imageUrl:
          "https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/products/aaliyah_vinyl_store.jpg",
        price: 5,
      },
      {
        id: 12,
        name: "Miles Davis",
        imageUrl:
          "https://www.bluescentric.com/images/product/micro/3307_1_.jpg",
        price: 15,
      },
      {
        id: 13,
        name: "Bob Marley - Catch A Fire",
        imageUrl:
          "https://i5.walmartimages.com/asr/b71182ff-84ce-47df-af5b-795d1b0803c4.ba007ed0069b577c985bf2f375e0b1c5.jpeg",
        price: 15,
      },
      {
        id: 14,
        name: "Silk Sonic",
        imageUrl:
          "https://store.brunomars.com/on/demandware.static/-/Sites-warner-master/default/dw5bf1b719/pdp-img/silksonic_standard_mockup_r2_2_1_.jpg",
        price: 15,
      },
      {
        id: 15,
        name: "Parcels",
        imageUrl:
          "https://media.maisonkitsune.com/media/catalog/product/k/m/kma072lp.jpg",
        price: 15,
      },
      {
        id: 16,
        name: "Dr.Dre",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-7fd99jwy75/images/stencil/1280x1280/products/4446/13502/DrDreTheChronicVinylFront_1800x1800__24931.1649112834.jpg?c=1",
        price: 15,
      },
      {
        id: 17,
        name: "The Beatles",
        imageUrl:
          "https://www.thevinylstore.com.au/wp-content/uploads/2021/10/beatlesabbey.jpg",
        price: 15,
      },
      {
        id: 18,
        name: "Fleetwood Mac",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/0558/5027/0926/products/093624979340.jpg?v=1649913075",
        price: 15,
      },
    ],
  },
  {
    title: "Reggae",
    items: [
      {
        id: 3,
        name: "Bob Marley",
        imageUrl:
          "https://i5.walmartimages.com/asr/518544dd-87c6-4ccb-85dd-a5a40a294efd.1ad4170d89e06aab6ea7fa6a6ae732fc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        price: 15,
      },
      {
        id: 13,
        name: "Bob Marley - Catch A Fire",
        imageUrl:
          "https://i5.walmartimages.com/asr/b71182ff-84ce-47df-af5b-795d1b0803c4.ba007ed0069b577c985bf2f375e0b1c5.jpeg",
        price: 15,
      },
    ],
  },
  {
    title: "Popular",
    items: [
      {
        id: 1,
        name: "Michael Jackson",
        imageUrl:
          "https://target.scene7.com/is/image/Target/GUEST_ce155838-d52e-47c1-af73-3630b6027ef8?wid=488&hei=488&fmt=pjpeg",
        price: 20,
      },
      {
        id: 2,
        name: "The Weeknd",
        imageUrl:
          "https://i.ebayimg.com/images/g/B34AAOSws9Riba~j/s-l500.jpg",
        price: 15,
      },
      {
        id: 2,
        name: "Burna Boy",
        imageUrl:
          "https://i.pinimg.com/originals/3a/c2/c3/3ac2c343450de7e4e85d9ec216720d9e.png",
        price: 20,
      },
      {
        id: 4,
        name: "Jungle",
        imageUrl:
          "https://m.media-amazon.com/images/I/41MpEGVhUQL._SY350_.jpg",
        price: 15,
      },
      {
        id: 5,
        name: "Tame Impala",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/1809/3005/products/TameImpalaTSR_grande.png?v=1582175565",
        price: 20,
      },
      {
        id: 6,
        name: "Kool & The Gang",
        imageUrl:
          "https://i.etsystatic.com/21130895/r/il/8139b8/2742213356/il_570xN.2742213356_bm0e.jpg",
        price: 15,
      },
      {
        id: 7,
        name: "Lenny Kravitz",
        imageUrl:
          "https://m.media-amazon.com/images/I/51ricp4zKmL._SL1000_.jpg",
        price: 15,
      },
      {
        id: 8,
        name: "Marvin Gaye",
        imageUrl:
          "https://i.ebayimg.com/images/g/onwAAOSw9b9iAqNx/s-l500.jpg",
        price: 15,
      },
      {
        id: 14,
        name: "Silk Sonic",
        imageUrl:
          "https://store.brunomars.com/on/demandware.static/-/Sites-warner-master/default/dw5bf1b719/pdp-img/silksonic_standard_mockup_r2_2_1_.jpg",
        price: 15,
      },
      {
        id: 17,
        name: "The Beatles",
        imageUrl:
          "https://www.thevinylstore.com.au/wp-content/uploads/2021/10/beatlesabbey.jpg",
        price: 15,
      },
      {
        id: 18,
        name: "Fleetwood Mac",
        imageUrl:
          "http://cdn.shopify.com/s/files/1/0558/5027/0926/products/093624979340.jpg?v=1649913075",
        price: 15,
      },
      {
        id: 15,
        name: "Parcels",
        imageUrl:
          "https://media.maisonkitsune.com/media/catalog/product/k/m/kma072lp.jpg",
        price: 15,
      },



    ],
  },
  {
    title: "Hip-Hop",
    items: [
      {
        id: 9,
        name: "Kendrick Lemar",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0101/8362/products/maadcity_1024x1024.jpg?v=1620391627",
        price: 15,
      },
      {
        id: 10,
        name: "The NOTORIOUS BIG",
        imageUrl:
          "https://merchbar.imgix.net/product/vinylized/upc/92/603497859245.jpg?auto=format&fit=max&w=828",
        price: 8,
      },
      {
        id: 11,
        name: "Aaliyah",
        imageUrl:
          "https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/products/aaliyah_vinyl_store.jpg",
        price: 5,
      },
      {
        id: 16,
        name: "Dr.Dre",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-7fd99jwy75/images/stencil/1280x1280/products/4446/13502/DrDreTheChronicVinylFront_1800x1800__24931.1649112834.jpg?c=1",
        price: 15,
      },
    ],
  },
  {
    title: "Jazz",
    items: [
      {
        id: 12,
        name: "Miles Davis",
        imageUrl:
          "https://www.bluescentric.com/images/product/micro/3307_1_.jpg",
        price: 15,
      },
    ],
  },
];

export default SHOP_DATA;