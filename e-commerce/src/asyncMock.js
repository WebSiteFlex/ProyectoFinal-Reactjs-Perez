const listProduct = [
  {
    id: "1",
    nameP: "Iphone 12 pro",
    img: "https://loop-mobile.co.uk/cdn/shop/products/iphone12_pro_max_gold_both_0efba546-88fb-40c0-b003-8a0207360063.jpg?v=1633000750",
    stock: 20,
    price: 874.0,
    description:
      "Pantalla LCD Liquid Retina HD de 6.1 pulgadas. (3), Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros). (1), Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps, Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta. Face ID para una autenticación segura y Apple Pay. Chip A13 Bionic con Neural Engine de tercera generación",
    category: "Phones",
  },
  {
    id: "2",
    nameP: "Samsung Newsroom",
    img: "https://img.global.news.samsung.com/cl/wp-content/uploads/2019/01/Notebook-9-Pro-3-553x408.jpg",
    stock: 20,
    price: 266.0,
    description:
      "16 4K OLED (3840 x 2400), 100% DCI-P3 Color Gamut, Glossy, 86% Screen-to-Body Ratio, Pantone Validated  NVIDIA GeForce RTX 3050Ti w/ 4 GB GDDR6 (Max TGP 50W - Boost Clock 1035MHz) NVIDIA GeForce RTX 3050Ti w/ 4 GB GDDR6 (Max TGP 50W - Boost Clock 1035MHz) AMD Ryzen 7 5800H 8 Core - 16 Thread Processor, 3.2 GHz (Max TurboFrequency 4.4 GHz), 16 MB Smart Cache  16 GB Dual Channel DDR4 (1 x 16 GB On-Board) 1 TB M.2 PCIe NVMe Gen4 SSD Wi-Fi 6 (802.11ax) w/ Bluetooth 5.0 (Dual band) 2*2 Windows® 11 Home ",
    category: "Notebook",
  },
  {
    id: "3",
    nameP: "Atomic Habits",
    img: "https://image-proxy-production.swag.com/convert/swag-prod/5ed96cf35310c31e1ca86abf.jpg?format=jpg&height=750",
    stock: 20,
    price: 467.0,
    description: "#",
    category: "Book",
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProduct);
    }, 1000);
  });
};
export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProduct.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      // resultP(listProduct.find(prod => {
      //   console.log('prod.id', prod.id)
      //   console.log('id', id)
        
      //   }
      const product = listProduct.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Product not found");
      }
  }, 1200);
  });
};
