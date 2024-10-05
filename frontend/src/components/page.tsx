"use client";

import { useMemo, useState } from "react";
import { cn, dayNames } from "./lib/utils";
import {
  add,
  addDays,
  addHours,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isSameMonth,
  isThisMonth,
  isToday,
  parse,
  parseISO,
  set,
  startOfDay,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from "date-fns";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import AvailableHours from "./calcomponent/hours.tsx";
import TimesBar from "./calcomponent/timesBar";
import PayPalButton from "../components/PayPalButton"; // Import PayPalButton

const reservations = [
  addHours(startOfToday(), 5).toString(),
  addHours(startOfToday(), 6).toString(),
  addHours(startOfToday(), 7).toString(),
  addHours(startOfToday(), 8).toString(),
  addHours(startOfToday(), 9).toString(),
  addDays(new Date(addHours(startOfToday(), 4)), 3).toString(),
];

export default function Home({price}) {
  const [calendarTouched, setCalendarTouched] = useState<Boolean>(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(startOfToday());
  const [selectedTime, setSelectedTime] = useState<Date | null>(null); // State to hold selected time
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = useMemo(() => eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  }), [firstDayCurrentMonth]);

  const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState<number[]>([]);
  const [availableTimesInThisMonthForEachDay, setAvailableTimesInThisMonthForEachDay] = useState<Date[][]>([]);

  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const freeTimes = useMemo(() => {
    if (!selectedDay) return [];
    
    const StartOfToday = startOfDay(selectedDay);
    const endOfToday = endOfDay(selectedDay);
    const startHour = set(StartOfToday, { hours: 1 });
    const endHour = set(endOfToday, { hours: 17, minutes: 45 });
    let hoursInDay = eachMinuteOfInterval(
      {
        start: startHour,
        end: endHour,
      },
      { step: 15 }
    );

    let freeTimes = hoursInDay.filter(
      (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
    );

    return freeTimes;
  }, [selectedDay]);

  useMemo(() => {
    let thisMonthTimesLength: number[] = [];
    let thisMonthTimesEachDay: Date[][] = [];
    days.map((day, dayIdx) => {
      const StartOfToday = startOfDay(day);
      const endOfToday = endOfDay(day);
      const startHour = set(StartOfToday, { hours: 1 });
      const endHour = set(endOfToday, { hours: 17, minutes: 45 });
      let hoursInDay = eachMinuteOfInterval(
        {
          start: startHour,
          end: endHour,
        },
        { step: 15 }
      );
      let freeTimes = hoursInDay.filter(
        (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
      );
      thisMonthTimesLength.push(freeTimes.length);
      thisMonthTimesEachDay.push(freeTimes);
    });

    setAvailableTimesInThisMonth(thisMonthTimesLength);
    setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay);
  }, [currentMonth]);

  return (
    <div className=" flex-col min-h-screen justify-center items-center gap-2">
      {/* calendar implementation */}
      <div className=" flex-col gap-2 h-[400px] w-[380px] mt-12">
        {/* calendar header */}
        <div className="grid grid-cols-3">
          <button
            type="button"
            onClick={prevMonth}
            disabled={isThisMonth(new Date(currentMonth))}
          >
            <ChevronLeft
              size={20}
              aria-hidden="true"
              className={cn(
                isThisMonth(new Date(currentMonth)) && "text-gray-300"
              )}
            />
          </button>
          <h2 className="font-semibold text-orange-950 justify-center flex" style={{fontSize:"16px"}}>
            {format(firstDayCurrentMonth, " MMMM yyyy")}
          </h2>
          <button
            type="button"
            className="flex justify-end"
            onClick={nextMonth}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        {/* calendar body */}
        <div>
          <div className="grid grid-cols-7 mt-4">
            {dayNames.map((day, i) => (
              <div
                key={i}
                className={cn(
                  "flex justify-center items-center text-sm text-blue-500 w-full py-2",
                  {
                    "text-orange-400 bg-orange-50 rounded-t-lg":
                      day === "Sun" || day === "Sat",
                  }
                )}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={cn(
                  dayIdx === 0 && colStartClasses[getDay(day) - 1],
                  "h-14 justify-center flex items-center",
                  (getDay(day) === 0 || getDay(day) === 6) &&
                    "bg-orange-50 rounded-lg"
                )}
              >
                <button
                  onClick={() => {
                    setCalendarTouched(true);
                    setSelectedDay(day);
                    setSelectedTime(null); // Reset selected time when day changes
                  }}
                  className={cn(
                    "w-12 h-12 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-50 relative group",
                    isEqual(day, selectedDay) &&
                      "bg-orange-100 text-slate-900 text-lg",
                    isEqual(today, day) && "text-blue-900 bg-blue-50",
                    isBefore(day, today) &&
                      "text-red-800 bg-red-50 cursor-not-allowed",
                    isEqual(today, day) && "text-blue-900 bg-blue-50",
                    isBefore(day, today) && "cursor-not-allowed",
                    isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "bg-blue-200",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900"
                  )}
                  disabled={isBefore(day, today)}
                >
                  {isAfter(day, startOfYesterday()) && (
                    <span className="hidden group-hover:flex absolute top-0 -translate-x-.5 -translate-y-4 z-10 text-[11px] bg-slate-900 text-slate-100 px-1 rounded-md gap-1">
                      <span>{availableTimesInThisMonth[dayIdx]}</span>
                      <span>Available</span>
                    </span>
                  )}

                  <time
                    dateTime={format(day, "yyyy-MM-dd")}
                    className={cn(
                      "group-hover:text-lg",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold"
                    )}
                  >
                    {format(day, "d")}
                  </time>

                  <CheckCircle2
                    className={cn(
                      "hidden",
                      isEqual(day, selectedDay) &&
                        "absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 text-orange-900",
                      isEqual(day, today) && "text-blue-900"
                    )}
                  />

                  {isAfter(day, startOfYesterday()) && (
                    <TimesBar
                      times={availableTimesInThisMonthForEachDay[dayIdx]}
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display available hours for the selected day */}
      {calendarTouched && (
        <div className="mt-4">
          <AvailableHours
            freeTimes={freeTimes}
            onTimeSelect={setSelectedTime} // Pass down the onTimeSelect prop
          />
        </div>
      )}

      {/* Show the PayPal button only if a time is selected */}
      {selectedTime && <PayPalButton price={price}/>}
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];