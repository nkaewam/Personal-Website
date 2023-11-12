import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const getFont = async () => {
    const response = await fetch(
      new URL("../../../public/font/Boska-Medium.ttf", import.meta.url)
    );
    const interSemiBold = await response.arrayBuffer();

    return interSemiBold;
  };
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 75,
          color: "#FFFFE3",
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Boska",
        }}
      >
        Nonthapat Kaewamporn
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Boska",
          data: await getFont(),
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
