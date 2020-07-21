import React, { useState, useEffect } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";

import ItemSelector from "./item-selector";
import AutoChooser from "./auto-chooser";
import InventoryManager from "./inventory-manager";
import { ingredientNames, ingredients, recipes } from "./item-data";
import { validRemainingItems } from "./utils";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;

  h1 {
    grid-column: 1 / 4;
  }

  @media screen and (max-device-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemMaker = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-device-width: 700px) {
    display: none;
  }

  span {
    margin-top: 0.5em;
  }
`;

const Item4Choices = styled.ul`
  margin-top: 0;
`;

const Cramomatic = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedIngredient1, setSelectedIngredient1] = useState(null);
  const [selectedIngredient2, setSelectedIngredient2] = useState(null);
  const [selectedIngredient3, setSelectedIngredient3] = useState(null);
  const [remainingIngredients1, setRemainingIngredients1] = useState(
    ingredientNames
  );
  const [remainingIngredients2, setRemainingIngredients2] = useState(
    ingredientNames
  );
  const [remainingIngredients3, setRemainingIngredients3] = useState(
    ingredientNames
  );
  const [remainingIngredients4, setRemainingIngredients4] = useState(
    ingredientNames
  );
  const [inventory, setInventory] = useState({});
  const [excludedItems, setExcludedItems] = useState([]);

  const range = recipes[selectedRecipe]?.range || [0, 0];

  useEffect(() => {
    setExcludedItems(
      Object.keys(inventory).filter(item => inventory[item]?.exclude)
    );
  }, [inventory]);

  useEffect(() => {
    setSelectedIngredient1(null);
    setSelectedIngredient2(null);
    setSelectedIngredient3(null);
    setRemainingIngredients1(
      validRemainingItems(
        range,
        [],
        [selectedRecipe, ...excludedItems]
      ).filter(ingredient =>
        recipes[selectedRecipe]?.types.includes(ingredients[ingredient].type)
      )
    );
  }, [selectedRecipe, excludedItems]);

  useEffect(() => {
    setRemainingIngredients2(
      validRemainingItems(
        range,
        [selectedIngredient1],
        [selectedRecipe, ...excludedItems]
      )
    );
    setRemainingIngredients3(
      validRemainingItems(
        range,
        [selectedIngredient1, selectedIngredient2],
        [selectedRecipe, ...excludedItems]
      )
    );
    setRemainingIngredients4(
      validRemainingItems(
        range,
        [selectedIngredient1, selectedIngredient2, selectedIngredient3],
        [selectedRecipe, ...excludedItems]
      )
    );
  }, [
    selectedIngredient1,
    selectedIngredient2,
    selectedIngredient3,
    excludedItems
  ]);

  return (
    <Container>
      <h1>Cram-o-matic Helper</h1>
      <ItemMaker>
        <h2>Item You Want</h2>
        <ItemSelector
          itemList={Object.keys(recipes)}
          selectedItem={selectedRecipe}
          onSelect={setSelectedRecipe}
        />
        <Ingredients>
          <h2>Ingredients</h2>
          <ItemSelector
            itemList={remainingIngredients1}
            selectedItem={selectedIngredient1}
            onSelect={setSelectedIngredient1}
          />
          <ItemSelector
            itemList={remainingIngredients2}
            selectedItem={selectedIngredient2}
            onSelect={setSelectedIngredient2}
          />
          <ItemSelector
            itemList={remainingIngredients3}
            selectedItem={selectedIngredient3}
            onSelect={setSelectedIngredient3}
          />
          <span>Fourth Item:</span>
          <Item4Choices>
            {remainingIngredients4.sort().map(ingredient => (
              <li key={ingredient}>{startCase(ingredient)}</li>
            ))}
          </Item4Choices>
        </Ingredients>
      </ItemMaker>
      <AutoChooser desiredItem={selectedRecipe} inventory={inventory} />
      <InventoryManager updateInventory={setInventory} />
    </Container>
  );
};

export default Cramomatic;
