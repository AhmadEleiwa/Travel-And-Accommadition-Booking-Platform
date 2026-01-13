// HotelCard.tsx
import React from "react";
import type HotelCardProps from "./HotelCard.types";
import Compact from "./variants/Compact";
import Featured from "./variants/Featured";
import List from "./variants/List";

const HotelCard: React.FC<HotelCardProps> = ({
  hotel,
  variant = "compact",
  showSaleBadge = false,
}) => {
  if (variant === "compact") {
    return <Compact hotel={hotel} />;
  }

  if (variant === "featured") {
    return <Featured hotel={hotel} showSaleBadge={showSaleBadge} />;
  }

  if (variant === "list") {
    return <List hotel={hotel} />;
  }

  return null;
};

export default HotelCard;
