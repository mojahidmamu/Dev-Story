import { connect } from "@/app/lib/dbConnect";

export async function GET() {
  try {
    const feedbackCollection = await connect("feedback");

    const feedback = await feedbackCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return Response.json({
      status: 200,
      message: "Feedback retrieved successfully",
      data: feedback,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        status: 500,
        message: "Failed to retrieve feedback",
      },
      {
        status: 500,
      },
    );
  }
}
