import React from 'react';

interface OrderListFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const OrderListFilters: React.FC<OrderListFiltersProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Search Input */}
      <div className="relative w-[250px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm trên Oreka"
          className="
            w-full px-2.5 py-2 pr-10
            border border-border-surface rounded-md
            bg-bg-surface
            text-body-regular text-content-neutral
            placeholder:text-content-neutral-light
            focus:outline-none focus:ring-2 focus:ring-border-primary
          "
        />
        <button className="absolute right-2.5 top-1/2 -translate-y-1/2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-content-neutral-light"
          >
            <path
              d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Date Filter */}
      <div className="relative w-[250px]">
        <input
          type="text"
          placeholder="Ngày đặt hàng"
          className="
            w-full px-2.5 py-2 pr-10
            border border-border-surface rounded-md
            bg-bg-surface
            text-body-regular text-content-neutral
            placeholder:text-content-neutral-light
            focus:outline-none focus:ring-2 focus:ring-border-primary
            cursor-pointer
          "
          readOnly
        />
        <button className="absolute right-2.5 top-1/2 -translate-y-1/2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-content-neutral-light"
          >
            <rect
              x="3"
              y="4"
              width="14"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M7 2v4M13 2v4M3 8h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Filter Toggle Button */}
      <button
        className="
          flex items-center justify-center gap-2
          px-4 py-2 rounded-md
          border border-border-surface
          bg-bg-surface
          text-body-medium text-content-neutral
          hover:bg-bg-canvas
          transition-colors
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-content-neutral"
        >
          <path
            d="M2 5h16M5 10h10M8 15h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

