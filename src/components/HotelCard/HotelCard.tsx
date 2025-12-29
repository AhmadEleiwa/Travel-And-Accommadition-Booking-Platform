// HotelCard.tsx
import { Link } from "react-router-dom";
import { Star, MapPin } from 'lucide-react';
import HotelCardProps from "./HotelCard.types";
import React from "react";

const HotelCard: React.FC<HotelCardProps> = ({
  hotel,
  variant = 'compact',
  showSaleBadge = false
}) => {
  // Compact variant (Recently Visited)
  if (variant === 'compact') {
    return (
      <Link
        to={`/hotel/${hotel.id}`}
        data-testid={'hotel--compact-ui'}
        className="flex-none w-80 bg-white p-4 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
      >
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="w-full h-40 object-cover rounded-2xl mb-4"
        />
        <h4 className="font-bold text-slate-900 truncate">{hotel.name}</h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-500">
            {hotel.location.split(',')[0]}
          </span>
          <span className="font-bold text-blue-600">
            ${hotel.discountedPrice || hotel.basePrice}
          </span>
        </div>
      </Link>
    );
  }

  // Featured variant (Featured Deals)
  if (variant === 'featured') {
    return (
      <Link
        to={`/hotel/${hotel.id}`}
         data-testid={'hotel--featured-ui'}
        className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {showSaleBadge && (
            <div data-testid={'hotel--featured-ui--salebadge'} className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              SALE
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-bold">
                {hotel.starRating}.0
              </span>
            </div>
          </div>
          <div className="flex items-center text-slate-500 text-sm mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            {hotel.location}
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-slate-400 text-sm line-through">
                ${hotel.basePrice}
              </span>
              <p className="text-2xl font-black text-blue-600">
                ${hotel.discountedPrice}
                <span className="text-xs text-slate-400 font-medium">
                  {" "}/ night
                </span>
              </p>
            </div>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              View Deal
            </button>
          </div>
        </div>
      </Link>
    );
  }

  // List variant (Search Results)
  if (variant === 'list') {
    return (
      <Link
        to={`/hotel/${hotel.id}`}
        data-testid={'hotel--list-ui'}
        className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
      >
        <div className="w-full md:w-80 h-64 md:h-auto overflow-hidden">
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-slate-900">{hotel.name}</h3>
              <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-current mr-1" />
                <span className="text-sm font-bold">{hotel.starRating}.0</span>
              </div>
            </div>
            <div className="flex items-center text-slate-500 text-sm mb-4">
              <MapPin className="w-4 h-4 mr-1 text-slate-400" />
              {hotel.location}
            </div>
            <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
              {hotel.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {hotel.amenities.map(a => (
                <span
                  key={a}
                  className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-end justify-between mt-6">
            <div className="text-sm text-slate-400">
              Price for 1 night, 2 adults
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 line-through">
                ${hotel.basePrice}
              </p>
              <p className="text-3xl font-black text-blue-600">
                ${hotel.discountedPrice || hotel.basePrice}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return null;
};

export default HotelCard;