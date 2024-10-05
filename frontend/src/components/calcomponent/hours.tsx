"use client";

import { format, isSameMinute } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import React, { memo, useState } from "react";
import { cn } from "../lib/utils";

// Define the props for the AvailableHours component
interface AvailableHoursProps {
  freeTimes: Date[];
  onTimeSelect: (time: Date) => void; // Callback for time selection
}

// eslint-disable-next-line react/display-name
const AvailableHours: React.FC<AvailableHoursProps> = memo(({ freeTimes, onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null); // Using null for no initial selection

  const handleTimeClick = (hour: Date) => {
    setSelectedTime(hour); // Set the selected time
    onTimeSelect(hour); // Call the parent function to handle time selection
  };

  return (
    <div className="flex flex-col items-left p-4">
      <span>
        Available times:{" "}
        <span className="font-semibold text-orange-950">
          {freeTimes.length}
        </span>
      </span>
      <div className="grid grid-cols-4 mt-2 sm:grid-cols-5 md:grid-cols-8 text-md gap-2">
        {freeTimes.map((hour, hourIdx) => (
          <div key={hourIdx}>
            <button
              type="button"
              className={cn(
                "bg-green-200 lg px-1 text-gray-800 relative hover:border hover:border-green-400 w-[110px] h-[40px]",
                selectedTime && isSameMinute(selectedTime, hour) && "bg-green-400 text-gray-800"
              )}
              onClick={() => handleTimeClick(hour)} // Update here to handle time click
            >
              <CheckCircle2
                className={cn(
                  "w-[16px] h-[16px] absolute hidden top-0 right-0 transform translate-x-1 -translate-y-1.5 text-green-700",
                  selectedTime && isSameMinute(selectedTime, hour) && "block"
                )}
              />
              {format(hour, "HH:mm")}
            </button>
          </div>
        ))}
      </div>
      {selectedTime && (
        <div className="w-full py-6">
          <span>Final selected reservation time is: </span>
          <span className="font-semibold text-rose-950 pl-1">
            {format(selectedTime, "dd MMMM yyyy HH:mm")}
          </span>
        </div>
      )}
    </div>
  );
});

export default AvailableHours;
