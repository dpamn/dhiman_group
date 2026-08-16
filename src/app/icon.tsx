import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f5d75",
          color: "#ffffff",
          fontSize: 24,
          fontWeight: 800,
          borderBottom: "6px solid #22c55e",
        }}
      >
        DG
      </div>
    ),
    size,
  );
}
