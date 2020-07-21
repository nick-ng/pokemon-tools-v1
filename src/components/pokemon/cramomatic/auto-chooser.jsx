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

const makeItem = (
  desiredItem,
  inventory,
  startingPrice = Infinity,
  count = 10
) => {
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

  for (let n = 0; n < count; n++) {
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

    if (resultPrice <= bestPrice) {
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
    if (desiredItem) {
      const { bestPrice, bestItems } = makeItem(
        desiredItem,
        inventory,
        Infinity,
        5
      );
      setPrice(bestPrice);
      setItems(bestItems);
    }
  }, [desiredItem, inventory]);

  return (
    <Container>
      <h2>Auto Chooser</h2>
      {desiredItem ? (
        <div>
          <p>{`Making ${startCase(desiredItem)}`}</p>
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
      {desiredItem && (
        <button
          onClick={() => {
            const temp = makeItem(desiredItem, inventory, price, 500);
            if (temp.bestPrice <= price) {
              setPrice(temp.bestPrice);
              setItems(temp.bestItems);
            }
          }}
        >
          Try Again
        </button>
      )}
      <p>
        The Auto Chooser won't use items marked with "Don't Use" and will prefer
        items you have more of. It randomly tries combinations of items and
        shows the combination that uses your most "plentiful" items. You can
        press the "Try Again" button to see if it can find a better combination.
      </p>
      <h3>What is this?</h3>
      <p>
        The Cram-o-Matic is a feature introduced in the Isle of Armor DLC for
        Pokemon Sword/Shield. You can combine 4 items to make another item and
        the item you get is{" "}
        <a
          href="https://www.serebii.net/swordshield/cram-o-matic.shtml"
          target="_blank"
        >
          determined by what items you put in
        </a>
        . This tool figures out what items you should "give" the Cram-o-Matic to
        get the item you want.
      </p>
    </Container>
  );
};

export default AutoChooser;
