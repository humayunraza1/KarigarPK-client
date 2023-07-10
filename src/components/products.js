const products = [
  {
    _id: 1,
    Title: "Viper Mini Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/viper-mini-white.png",
    Description: "Viper Mini Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 2,
    Title: "Viper Mini Grip",
    Variant: "Black Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/viper-black.png",
    Description: "Viper Mini Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 3,
    Title: "GPW/GPXS Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 3,
    ImageURL: "./Resources/gpro-white.png",
    Description:
      "G Pro Wireless / G Pro X Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 4,
    Title: "GPW/GPXS Grip",
    Variant: "Black Printstream",
    Price: 900,
    Stock: 3,
    ImageURL: "./Resources/gpro-black.png",
    Description:
      "G Pro Wireless / G Pro X Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 5,
    Title: "GPW/GPXS Grip",
    Variant: "Red Voltalc",
    Price: 900,
    Stock: 3,
    ImageURL: "./Resources/gpro-red.png",
    Description:
      "G Pro Wireless / G Pro X Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 9,
    Title: "Viper Ultimate Grip",
    Variant: "Black Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/viper-black.png",
    Description:
      "Viper Ultimate Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 10,
    Title: "Viper Ultimate Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/viper-ultimate-white.png",
    Description:
      "Viper Ultimate Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 11,
    Title: "G102 Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/g102-g304-white.png",
    Description: "G102 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 12,
    Title: "G102 Grip",
    Variant: "Red Voltalc",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/g102-red.png",
    Description: "G102 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 13,
    Title: "G304 Grip",
    Variant: "Red Voltalc",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/g304-red.png",
    Description: "G304 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 14,
    Title: "G304 Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/g102-g304-white.png",
    Description: "G304 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 15,
    Title: "G502 Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 2,
    ImageURL: "./Resources/g502-white.png",
    Description: "G502 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 16,
    Title: "G402 Grip",
    Variant: "White Printstream",
    Price: 900,
    Stock: 1,
    ImageURL: "./Resources/g402-white.png",
    Description:
      "Universal G402 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 17,
    Title: "G402 Grip",
    Variant: "Black Printstream",
    Price: 900,
    Stock: 0,
    ImageURL: "./Resources/g402-black.png",
    Description:
      "Universal G402 Grip made from Anti Slip and Anti Sweat material.",
  },
  {
    _id: 18,
    Title: "Universal Grip Sheet",
    Variant: "White Printstream",
    Price: 1200,
    Stock: 0,
    ImageURL: "./Resources/universal-white.png",
    Description:
      "Universal grip sheet made from Anti Slip and Anti Sweat Material. Can be used on mice or other item. Dimensions: 7cm x 10cm",
  },
  {
    _id: 19,
    Title: "Universal Grip Sheet",
    Variant: "Black Printstream",
    Price: 1200,
    Stock: 0,
    ImageURL: "./Resources/universal-black.png",
    Description:
      "Universal grip sheet made from Anti Slip and Anti Sweat Material. Can be used on mice or other item. Dimensions: 7cm x 10cm",
  },
  {
    _id: 20,
    Title: "Universal Grip Sheet",
    Variant: "Red Voltaic",
    Price: 1200,
    Stock: 2,
    ImageURL: "./Resources/universal-red.png",
    Description:
      "Universal grip sheet made from Anti Slip and Anti Sweat Material. Can be used on mice or other item. Dimensions: 7cm x 10cm",
  },
  {
    _id: 21,
    Title: "TTC Scroll Wheel Encoder",
    Variant: "9mm",
    Price: 300,
    Stock: 10,
    ImageURL: "./Resources/ttc-9mm.png",
    Description:
      "Replacement scroll wheel encoder to fix scroll wheel issue. 9mm is for Viper Mini and others which use 9mm encoder.",
  },
  {
    _id: 22,
    Title: "TTC Scroll Wheel Encoder",
    Variant: "8mm",
    Price: 300,
    Stock: 3,
    ImageURL: "./Resources/ttc-8mm.png",
    Description:
      "Replacement scroll wheel encoder to fix scroll wheel issue. 8mm is for G Pro/ G Pro X and others which use 8mm encoder.",
  },
  {
    _id: 23,
    Title: "Huano Switches",
    Variant: "White Dot",
    Price: 300,
    Stock: 6,
    ImageURL: "./Resources/Huano-white.png",
    Description:
      "Replacement switches for gaming mice. Instantly fix your double click issue",
  },
  {
    _id: 24,
    Title: "Rival 300 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 2,
    ImageURL: "./Resources/rival-300.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 25,
    Title: "Rival 600 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 2,
    ImageURL: "./Resources/rival-600.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 26,
    Title: "Rival 500 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 2,
    ImageURL: "./Resources/rival-500.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 27,
    Title: "Rival 310 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 0,
    ImageURL: "./Resources/rival-310.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 28,
    Title: "G304/G305 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 6,
    ImageURL: "./Resources/g304-305-skates.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 29,
    Title: "G102 Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 5,
    ImageURL: "./Resources/g102-skates.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 30,
    Title: "GPW Skates",
    Variant: "PTFE Skates",
    Price: 600,
    Stock: 0,
    ImageURL: "./Resources/gpw-skates.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 6,
    Title: "G402 Skates",
    Variant: "Normal PTFE",
    Price: 600,
    Stock: 6,
    ImageURL: "./Resources/g402-skates.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 7,
    Title: "GPXS Skates",
    Variant: "Normal PTFE",
    Price: 650,
    Stock: 0,
    ImageURL: "./Resources/gpxs skate.png",
    Description: "PTFE Skates, best for replacement",
  },
  {
    _id: 8,
    Title: "G502 Lightspeed Skates",
    Variant: "Normal PTFE",
    Price: 600,
    Stock: 4,
    ImageURL: "./Resources/g502-light-skates.png",
    Description: "PTFE Skates, best for replacement",
  },
];

export default products;
