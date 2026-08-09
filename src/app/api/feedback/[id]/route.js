import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return Response.json(
        {
          status: 400,
          message: "Invalid feedback ID",
        },
        {
          status: 400,
        },
      );
    }

    const feedbackCollection = await connect("feedback");

    const feedback = await feedbackCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!feedback) {
      return Response.json(
        {
          status: 404,
          message: "Feedback not found",
        },
        {
          status: 404,
        },
      );
    }

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
