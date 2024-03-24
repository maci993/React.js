import React from "react";
import Item from "./Items";
// import bananasImg from '../assets/images/bananas.jpg'
// import butterImg from '../assets/images/butter.jpg'
// import cucumberImg from '../assets/images/cucumber.jpg'
// import eggsImg from '../assets/images/eggs.jpg'
// import milkImg from '../assets/images/milk.jpg'
// import spaghetiImg from '../assets/images/spagheti.jpg'
// import tomatoImg from '../assets/images/tomatoes.jpg'

const PackageList = () => {
  return (
    <div>
      <h1>Package List</h1>
      <Item
        name="bananas"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpkieAyXV_kaPpK7i8_J6oavrY_Np-9XFjA&s"
        isPacked={false}
      />

      <Item
        name="cucumber"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lu0TihciWXFkWJvwc7CrM2TyCwgcTALysw&s"
        isPacked={false}
      />

      <Item
        name="eggs"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBuPRaF320bmRL66qOlqzH2b7O41fGVLsRg&s"
        isPacked={true}
      />

      <Item
        name="milk"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIW-Q5PXTDjLvg4O171Bw1YJH5YtsVkT4bg&s"
        isPacked={true}
      />

      <Item
        name="spagheti"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkee1ssdgVTQB0R8OhkZakjf2yaL4CRoa9A&s"
        isPacked={true}
      />

      <Item
        name="tomatoes"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtI8lusPLl9c_GLvq3yWgpgXzi1n7Xva2Kg&s"
        isPacked={false}
      />

      {/* <div className="items"> */}
      {/* <Item name='bananas' ItemImg={bananasImg} isPacked={false}/>
                <Item name='butter' ItemImg={butterImg} isPacked={true}/>
                <Item name='cucumber' ItemImg={cucumberImg} isPacked={false}/>
                <Item name='eggs' ItemImg={eggsImg} isPacked={true}/>
                <Item name='milk' ItemImg={milkImg} isPacked={true}/>
                <Item name='spagheti' ItemImg={spaghetiImg} isPacked={true}/>
                <Item name='tomatoes' ItemImg={tomatoImg} isPacked={false}/> */}
    </div>
    // </div>
  );
};

export default PackageList;
