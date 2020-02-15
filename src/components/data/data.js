import Phones from '../../assets/phones.jpg'
import Bikes from '../../assets/bikes.jpg'
import Toys from '../../assets/toys.jpg'
import Electronics from '../../assets/electronics.jpg'
import Books from '../../assets/books.jpeg'
import Properties from '../../assets/properties.jpg'

export default [
    {
      id: "0",
      thumbnail: Phones,
      title: "Phones",
      price: 50000,
      varients: [
        {
          title: "Capacity",
          items: [
            {
              title: "16gb",
              price: 5
            },
            {
              title: "32gb",
              price: 10
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "Black",
              price: 10
            },
            {
              title: "Silver",
              price: 15
            },
            {
              title: "White",
              price: 20
            },
            {
              title: "Golden",
              price: 25
            }
          ]
        }
      ]
    },
    {
      id: "1",
      thumbnail: Bikes,
      title: "Bikes",
      description: "The best shoes avaliable on earth",
      price: 150000,
      varients: [
        {
          title: "Shoe Size",
          items: [
            {
              title: "12",
              price: 5
            },
            {
              title: "11",
              price: 10
            },
            {
              title: "10",
              price: 15
            },
            {
              title: "09",
              price: 20
            },
            {
              title: "08",
              price: 25
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "Golden",
              price: 5
            },
            {
              title: "White",
              price: 10
            },
            {
              title: "Black",
              price: 15
            }
          ]
        }
      ]
    },
    {
      id: "2",
      thumbnail: Toys,
      title: "Toys",
      description: "The best Bags avaliable on earth",
      price: 500,
      varients: [
        {
          title: "Bags Size",
          items: [
            {
              title: "small",
              price: 5
            },
            {
              title: "medium",
              price: 10
            },
            {
              title: "large",
              price: 15
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "yellow",
              price: 5
            },
            {
              title: "brown",
              price: 10
            },
            {
              title: "green",
              price: 15
            }
          ]
        }
      ]
    },
    {
      id: "3",
      thumbnail: Electronics,
      title: "Electronics",
      description: "The best T shirts avaliable on earth",
      price: 15000,
      varients: [
        {
          title: "Size",
          items: [
            {
              title: "small",
              price: 5
            },
            {
              title: "medium",
              price: 10
            },
            {
              title: "large",
              price: 15
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "white",
              price: 5
            },
            {
              title: "black",
              price: 10
            },
            {
              title: "green",
              price: 15
            }
          ]
        }
      ]
    },
    {
      id: "4",
      thumbnail: Books,
      title: "Books",
      description: "The best T shirts avaliable on earth",
      price: 250,
      varients: [
        {
          title: "Size",
          items: [
            {
              title: "small",
              price: 5
            },
            {
              title: "medium",
              price: 10
            },
            {
              title: "large",
              price: 15
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "white",
              price: 2
            },
            {
              title: "black",
              price: 3
            },
            {
              title: "green",
              price: 5
            }
          ]
        }
      ]
    },
    {
      id: "5",
      thumbnail: Properties,
      title: "Property",
      description: "The best watch avaliable on earth",
      price: 5000000,
      varients: [
        {
          title: "Rist Size",
          items: [
            {
              title: "small",
              price: 5
            },
            {
              title: "medium",
              price: 15
            },
            {
              title: "large",
              price: 25
            }
          ]
        },
        {
          title: "Color",
          items: [
            {
              title: "black",
              price: 21
            },
            {
              title: "glod",
              price: 24
            },
            {
              title: "silver",
              price: 28
            }
          ]
        }
      ]
    }
  ];
  