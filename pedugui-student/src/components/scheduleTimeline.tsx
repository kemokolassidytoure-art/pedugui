export default function ScheduleTimeline({ eventws = [] }) {
  const events = [
    {
      day: 1,
      start: "08:00",
      end: "09:30",
      title: "Math Class",
      color: "#4CAF50",
    },
    {
      day: 2,
      start: "13:00",
      end: "15:15",
      title: "Team Meeting",
      color: "#FBC02D",
    },
    {
      day: 4,
      start: "16:30",
      end: "17:00",
      title: "Science Lab",
      color: "#45A048",
    },
  ];

  const startHour = 8;
  const numberOfHour = 10;

  const hours = Array.from(
    { length: numberOfHour },
    (_, i) => `${String(i + startHour).padStart(2, "0")}:00`
  );

  const getHour = (t: any) => {
    const [h, _] = t.split(":").map(Number);
    return h;
  };

  const toMinutes = (t: any) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const eventStyle = (e: any) => {
    const top = toMinutes(e.start) - startHour * 60;
    const bottom = toMinutes(e.end) - startHour * 60;
    return {
      top: top + "px",
      height: bottom - top + "px",
      background: e.color || "#4CAF50",
    };
  };

  return (
    <div className="rounded-xl shadow bg-white overflow-scroll min-w-2xl h-[600px] flex flex-col p-6">
      <h2 className="text-lg font-semibold mb-4">Emploi du temps</h2>

      {/* ===== HEADER (STICKY) ===== */}
      <div className="border-b border-portal-yellow/50 bg-white sticky top-0 z-20 flex">
        <div className="w-20"></div>
        <div className="grow grid grid-cols-7 ">
          {[
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi",
          ].map((d) => (
            <div
              key={d}
              className="first:border-l border-portal-yellow/50 py-2 text-center font-semibold border-r last:border-r-0"
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* ===== SCROLL AREA (hours + grid scroll TOGETHER) ===== */}
      <div className="flex flex-1 overflow-auto relative">
        {/* ==== HOURS COLUMN (INSIDE scroll area) ==== */}
        <div className="w-20 relative">
          {hours.map((h, i) => (
            <div
              key={h}
              className="absolute right-2 text-xs text-gray-500"
              style={{ top: i * 60 + "px" }}
            >
              {h}
            </div>
          ))}
        </div>

        {/* ==== GRID AREA ==== */}
        <div className="flex-1 relative">
          <div className={`relative h-[${numberOfHour * 60}px]`}>
            {/* horizontal lines */}
            {hours.map((_, i) => {
              const borderStyle = i == 0 ? "" : "border-t";
              return (
                <div
                  key={i}
                  className={`absolute w-full ${borderStyle} border-gray-200`}
                  style={{ top: i * 60 + "px" }}
                />
              );
            })}

            {/* vertical day columns */}
            <div className="grid grid-cols-7 h-full">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  style={{ height: `${numberOfHour * 60}px` }}
                  className="border-r border-portal-yellow/50 first:border-l last:border-r-0"
                ></div>
              ))}
            </div>

            {/* events */}
            {events
              .filter((e) => {
                return (
                  getHour(e.start) >= startHour &&
                  getHour(e.end) <= startHour + numberOfHour
                );
              })
              .map((e, idx) => (
                <div
                  key={idx}
                  className="absolute p-2 text-xs text-white rounded shadow overflow-auto"
                  style={{
                    left: `calc(${e.day} * (100% / 7))`,
                    width: "calc(100% / 7)",
                    ...eventStyle(e),
                  }}
                >
                  <div className="font-bold">{e.title}</div>
                  <div className="opacity-80 text-[10px]">
                    {e.start}–{e.end}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
