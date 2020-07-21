import React, { useState, useEffect } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";

import { ingredientNames, ingredients, recipes } from "./item-data";

const CRAMOMATIC_INVENTORY_KEY = "CRAMOMATIC_INVENTORY_KEY";

const Container = styled.div``;

const Table = styled.table`
  margin-top: 1em;
`;

const HCell = styled.th`
  text-align: ${props => props.textAlign || "left"};
`;

const Cell = styled.td`
  text-align: ${props => props.textAlign || "left"};
`;

const InventoryManager = ({ updateInventory }) => {
  const [counts, setCounts] = useState({});
  const [excludes, setExcludes] = useState({});
  const [itemFilter, setItemFilter] = useState("");

  useEffect(() => {
    const inventory = JSON.parse(
      localStorage.getItem(CRAMOMATIC_INVENTORY_KEY) || "{}"
    );
    const tempCounts = {};
    const tempExcludes = {};
    ingredientNames.forEach(ingredient => {
      const temp = inventory[ingredient];
      if (temp) {
        tempCounts[ingredient] = temp.count || 0;
        tempExcludes[ingredient] = !!temp.exclude;
      }
    });
    setCounts(tempCounts);
    setExcludes(tempExcludes);
  }, []);

  useEffect(() => {
    const inventory = ingredientNames.reduce((prev, ingredient) => {
      prev[ingredient] = {
        count: counts[ingredient] || 0,
        exclude: !!excludes[ingredient]
      };
      return prev;
    }, {});
    updateInventory(inventory);
    localStorage.setItem(CRAMOMATIC_INVENTORY_KEY, JSON.stringify(inventory));
  }, [counts, excludes]);

  return (
    <Container>
      <label>
        Item Filter
        <input
          style={{ marginLeft: "0.5em" }}
          value={itemFilter}
          onChange={e => {
            setItemFilter(e.target.value);
          }}
        />
        <button onClick={() => setItemFilter("")}>Clear</button>
      </label>
      <Table>
        <thead>
          <tr>
            <HCell>Item</HCell>
            <HCell textAlign="center">##</HCell>
            <HCell textAlign="center">Don't Use</HCell>
          </tr>
        </thead>
        <tbody>
          {ingredientNames
            .filter(i => i.includes(itemFilter))
            .map(ingredient => {
              return (
                <tr key={ingredient}>
                  <Cell>{startCase(ingredient)}</Cell>
                  <Cell textAlign="right">
                    <input
                      style={{
                        textAlign: "right",
                        fontSize: "1em",
                        width: "4em"
                      }}
                      type="number"
                      value={counts[ingredient] || 0}
                      onChange={e => {
                        setCounts({
                          ...counts,
                          [ingredient]: parseFloat(e.target.value)
                        });
                      }}
                    />
                  </Cell>
                  <Cell textAlign="center">
                    <input
                      type="checkbox"
                      checked={!!excludes[ingredient]}
                      onChange={() => {
                        setExcludes({
                          ...excludes,
                          [ingredient]: !excludes[ingredient]
                        });
                      }}
                    />
                  </Cell>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default InventoryManager;
