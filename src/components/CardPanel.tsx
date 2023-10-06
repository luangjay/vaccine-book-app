"use client";

import { type Hospital } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useReducer, useState } from "react";
import Card from "./Card";

type CardPanelProps = {
  hospitals: Hospital[];
};

export default function CardPanel({ hospitals }: CardPanelProps) {
  const ratingsReducer = (
    ratings: Map<string, number>,
    action:
      | { type: "add"; hospitalName: string; rating: number }
      | {
          type: "remove";
          hospitalName: string;
        }
  ) => {
    switch (action.type) {
      case "add":
        console.log(ratings);
        ratings.set(action.hospitalName, action.rating);
        return new Map(ratings);
      case "remove":
        ratings.delete(action.hospitalName);
        return new Map(ratings);
    }
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const [ratings, dispatchRatings] = useReducer(
    ratingsReducer,
    new Map<string, number>()
  );

  const ratingList = Array.from(ratings);

  const handleRatingChange = (hospitalName: string, rating: number | null) => {
    if (rating === null) {
      dispatchRatings({ type: "remove", hospitalName });
      return;
    }
    dispatchRatings({
      type: "add",
      hospitalName,
      rating,
    });
  };

  const handleRemoveRating = (hospitalName: string) => {
    dispatchRatings({ type: "remove", hospitalName });
  };

  return (
    <>
      <ul className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <Card
              hospital={hospital}
              rating={ratings.get(hospital.name ?? "")}
              onRatingChange={handleRatingChange}
            />
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 right-8 w-full max-w-xs rounded-[8px_8px_0_0] border bg-white backdrop-blur-sm">
        <button
          className="flex w-full justify-center rounded-[inherit] border-b bg-inherit py-2 hover:bg-background/90"
          onClick={() => void setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? <ExpandMore /> : <ExpandLess />}
        </button>
        <List
          className={cn(
            "transition-[max-height]",
            isExpanded ? "max-h-80 overflow-auto" : "max-h-0 overflow-hidden"
          )}
        >
          {ratingList.map(([hospitalName, rating]) => (
            <ListItem
              className="border-b"
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => void handleRemoveRating(hospitalName)}
                >
                  <Delete />
                </IconButton>
              }
              key={hospitalName}
            >
              <ListItemText
                primary={hospitalName}
                secondary={`Rating: ${rating} star(s)`}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}
