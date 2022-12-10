import * as React from "react";
import { Range, getTrackBackground } from "react-range";

// const STEP = 0.1;
const MIN = 0;
const MAX = 500;

const INITIAL_MIN = 0;
const INITIAL_MAX = 500;

const TwoThumbs: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([INITIAL_MIN, INITIAL_MAX]);
  return (
    <div>
      <output className="flex items-center justify-between mb-4">
        <span className="text-xs xl:text-sm -text-gray font-normal">
          ${values[0].toFixed(0)}
        </span>{" "}
        <span className="text-xs xl:text-sm -text-gray font-normal">
          ${values[1].toFixed(0)}+
        </span>
      </output>
      <Range
        values={values}
        // step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => {
          return (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
              }}
            >
              <div
                ref={props.ref}
                className="rounded h-[3px] w-full"
                style={{
                  background: getTrackBackground({
                    values,
                    colors: ["#ccc", "#00B1A7", "#ccc"],
                    min: MIN,
                    max: MAX,
                    rtl,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          );
        }}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`w-4 h-4 rounded-full border-[1px] -border-gray outline-none
                ${isDragged ? "-bg-yellow" : "-bg-yellow-200"}
            `}
            style={{
              ...props.style,
              boxShadow: "0px 2px 6px #AAA",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default TwoThumbs;
