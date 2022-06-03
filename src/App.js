import { React, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import BlackModal from "./components/BlackModal";
import ContentContainer from "./components/ContentContainer";
import ImageSlider from "./components/ImageSlider";

function App() {
  const [menu, setMenu] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [image, setImage] = useState(1);
  const [imageSlide, setImageSlide] = useState(false);
  const [copyImage, setCopyImage] = useState(image);

  return (
    <div>
      <BlackModal
        menuState={menu}
        setMenuStatus={setMenu}
        imageSlide={imageSlide}
      />
      <Navbar
        setMenuStatus={setMenu}
        menuState={menu}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        imageSlide={imageSlide}
      />
      <ContentContainer
        menuState={menu}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
        image={image}
        setImage={setImage}
        imageSlide={imageSlide}
        setImageSlide={setImageSlide}
      />
      <ImageSlider
        copyImage={copyImage}
        setCopyImage={setCopyImage}
        imageSlide={imageSlide}
        setImageSlide={setImageSlide}
      />
    </div>
  );
}

export default App;
