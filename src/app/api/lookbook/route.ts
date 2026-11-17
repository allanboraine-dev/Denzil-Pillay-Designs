import { NextResponse } from "next/server";
import { coutureCollection } from "@/data/collections";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const query = searchParams.get("q")?.toLowerCase();

    let items = coutureCollection;

    if (category && category !== "all") {
      items = items.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query) {
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.collection.toLowerCase().includes(query) ||
          item.tagline.toLowerCase().includes(query) ||
          item.silhouetteNotes.toLowerCase().includes(query)
      );
    }

    return NextResponse.json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    console.error("Lookbook API error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve lookbook collection" },
      { status: 500 }
    );
  }
}
