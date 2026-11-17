import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  service: z.string().min(1, "Service selection is required"),
  eventDate: z.string().min(1, "Event date is required"),
  urgency: z.string().optional(),
  silhouette: z.string().min(1, "Silhouette specification is required"),
  styleTag: z.string().optional(),
  fittingMode: z.string().min(1, "Fitting mode is required"),
  clientName: z.string().min(2, "Client name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Valid contact number is required"),
  budgetRange: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = inquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const inquiry = result.data;

    // Structured receipt logging for atelier dispatch / Resend / WhatsApp Cloud API hook
    console.log("=== NEW BESPOKE COUTURE COMMISSION ===");
    console.log(`Client: ${inquiry.clientName} (${inquiry.email} | ${inquiry.phone})`);
    console.log(`Service: ${inquiry.service}`);
    console.log(`Event Date: ${inquiry.eventDate} [${inquiry.urgency || "Standard"}]`);
    console.log(`Silhouette / Style: ${inquiry.silhouette} | ${inquiry.styleTag || "N/A"}`);
    console.log(`Fitting Preference: ${inquiry.fittingMode}`);
    console.log(`Investment Range: ${inquiry.budgetRange || "TBD"}`);
    console.log(`Notes: ${inquiry.notes || "None"}`);
    console.log("======================================");

    return NextResponse.json({
      success: true,
      message: "Bespoke inquiry successfully registered with Denzil Pillay Designs atelier.",
      inquiryReference: `DPD-${Date.now().toString(36).toUpperCase()}`,
      data: inquiry,
    });
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json(
      {
        error: "Unable to process commission inquiry at this time. Please contact Denzil via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
