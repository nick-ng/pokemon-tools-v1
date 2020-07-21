import React, { useState, useEffect } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";

import { ingredientNames, ingredients, recipes } from "./item-data";
import { validRemainingItems } from "./utils";

const Container = styled.div`
  justify-self: center;
`;

const BASE_VALUE = 1000000;

const randomItem = items => items[Math.floor(Math.random() * items.length)];

const getItemPrice = count => BASE_VALUE / (count + 1);

const makeItem = (desiredItem, inventory, startingPrice = Infinity) => {
  let bestPrice = startingPrice;
  let bestItems = [];

  const prices = ingredientNames.reduce((prev, name) => {
    prev[name] = getItemPrice(inventory[name]?.count || 0);
    return prev;
  }, {});

  const excludedItems = Object.keys(inventory).filter(item => {
    return inventory[item]?.exclude;
  });

  const recipe = recipes[desiredItem];

  for (let n = 0; n < 1000; n++) {
    const tempItems = [];
    const itemsA = validRemainingItems(
      recipe.range,
      [],
      [desiredItem, ...excludedItems]
    ).filter(ingredient =>
      recipe?.types.includes(ingredients[ingredient].type)
    );
    tempItems.push(randomItem(itemsA));
    for (let m = 0; m < 2; m++) {
      const itemsB = validRemainingItems(recipe.range, tempItems, [
        desiredItem,
        ...excludedItems
      ]);
      tempItems.push(randomItem(itemsB));
    }
    const itemsC = validRemainingItems(recipe.range, tempItems, [
      desiredItem,
      ...excludedItems
    ]);
    itemsC.sort((a, b) => prices[a] - prices[b]);
    tempItems.push(itemsC[0]);
    const resultPrice = tempItems.reduce((prev, item) => {
      return prev + prices[item];
    }, 0);

    if (resultPrice < bestPrice) {
      bestPrice = resultPrice;
      bestItems = tempItems;
    }
  }

  return {
    bestPrice,
    bestItems
  };
};

const AutoChooser = ({ desiredItem, inventory }) => {
  const [price, setPrice] = useState(Infinity);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setPrice(Infinity);
    setItems([]);
  }, [desiredItem, inventory]);

  return (
    <Container>
      <h2>Auto Chooser</h2>
      {desiredItem ? (
        <div>
          <button
            onClick={() => {
              const temp = makeItem(desiredItem, inventory, price);
              if (temp.bestPrice < price) {
                setPrice(temp.bestPrice);
                setItems(temp.bestItems);
              }
            }}
          >{`Make ${startCase(desiredItem)}`}</button>
        </div>
      ) : (
        <p>Choose an item</p>
      )}
      {items.length > 0 && (
        <ol>
          {items.map((item, i) => (
            <li key={`${item}${i}`}>{startCase(item)}</li>
          ))}
        </ol>
      )}
      {}
    </Container>
  );
};

export default AutoChooser;
