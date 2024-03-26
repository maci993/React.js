import React from "react";
import Item from "./Items";
import bananasImg from '../assets/images/bananas.jpg'
import butterImg from '../assets/images/butter.jpg'
import cucumberImg from '../assets/images/cucumber.jpg'
import eggsImg from '../assets/images/eggs.jpg'
import milkImg from '../assets/images/milk.jpg'
import spaghetiImg from '../assets/images/spagheti.jpg'
import tomatoImg from '../assets/images/tomatoes.jpg'

const PackageList = () => {
  return (
    <div>
      <h1>Package List</h1>
    <div className="items">
       <Item name='bananas' img={bananasImg} isPacked={false}/>
       <Item name='butter' img={butterImg} isPacked={true}/>
       <Item name='cucumber' img={cucumberImg} isPacked={false}/>
       <Item name='eggs' img={eggsImg} isPacked={true}/>
       <Item name='milk' img={milkImg} isPacked={true}/>
       <Item name='spagheti' img={spaghetiImg} isPacked={true}/>
       <Item name='tomatoes' img={tomatoImg} isPacked={false}/> */}
    </div>
    // </div>
  );
};

export default PackageList;
