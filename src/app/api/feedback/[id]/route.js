import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = params;

  const singleFeedback = feedback.find((item) => item.id === parseInt(id));

  const feedbackCollection = connect("feedback");
  const feedbackFromDB = await feedbackCollection.find().toArray();

  return Response.json({
    status: 200,
    message: "Feedback retrieved successfully",
    data: singleFeedback || feedbackFromDB,
  });
}
