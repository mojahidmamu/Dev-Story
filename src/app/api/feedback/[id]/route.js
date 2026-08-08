import { feedback } from "../../route";

export async function GET(request , {params}) {
    const { id } = params;

    const singleFeedback = feedback.find((item) => item.id === parseInt(id));

    
    return Response.json({
        status: 200,
        message: `Feedback with id ${id} is working`,
        data: singleFeedback,
    });     
}
