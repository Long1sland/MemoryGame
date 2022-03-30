import React, { Component, useEffect, useRef, useState } from "react";
import { Content, Tile, Wrapper } from "./grid.styles";

const Grid = ({
  moves,
  setMoves,
  isVisible,
  setIsVisible,
  Board,
  setBoard,
}) => {
  console.log("this is moves from grid" + moves);
  console.log("the grid component rerenred");

  const selectedTiles = useRef([]);

  useEffect(() => {
    if (selectedTiles.current.length == 2) {
      selectedTiles.current = [];
    } else {
      return;
    }
  }, [Board]);

  function handleClick(e, i) {
    setBoard((prev) => {
      let val = [...prev];
      val[i].visible = true;
      return val;
    });

    if (selectedTiles.current.length == 1) {
      selectedTiles.current = [
        ...selectedTiles.current,
        { Tile: e.target, index: i },
      ];
      console.log(selectedTiles.current);
      const selected = selectedTiles.current;

      if (
        selected[0].Tile.innerText == selected[1].Tile.innerText &&
        selected[0].index !== selected[1].index
      ) {
        setMoves((prev) => prev + 1);
        setBoard((prev) => {
          selectedTiles.current.forEach((tile) => {
            prev[tile.index].correct = true;
          });

          return prev;
        });

        console.log("good");
        return;
      } else {
        setBoard((prev) => {
          selectedTiles.current.forEach((tile) => {
            prev[tile.index].visible = false;
          });
          setMoves((prev) => prev++);

          return prev;
        });

        setMoves((prev) => prev + 1);
        console.log("bad");
      }
    } else {
      selectedTiles.current = [
        ...selectedTiles.current,
        { Tile: e.target, index: i },
      ];
      console.log(selectedTiles.current);
    }
  }

  return (
    <Wrapper>
      <Content>
        {Board.map((item, i) => {
          return (
            <Tile
              onAnimationEnd={() => {
                setIsVisible(false);
              }}
              key={i}
              onClick={(e) => {
                if (Board[i].correct == true) {
                  return;
                }
                handleClick(e, i);
              }}
              color={Board[i].visible ? "white" : "#304859"}
              background={Board[i].correct ? "#FDA214" : "#304859"}
              animation={isVisible ? "fade-out" : null}
            >
              {item.value}
            </Tile>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default Grid;
